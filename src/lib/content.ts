import fs from "node:fs";
import path from "node:path";
import * as cheerio from "cheerio";
import pagesJson from "@/data/pages.json";
import { ORIGIN } from "./site";

export type PageType =
  | "home" | "service" | "area" | "post" | "page" | "about" | "contact"
  | "portfolio" | "photo-gallery" | "areas" | "services" | "blog-index";

export interface Page {
  path: string;
  title: string;
  desc: string;
  h1: string;
  type: PageType;
  date: string;
  ogimage: string;
  body: string;
  images: { src: string; alt: string }[];
  jsonld: unknown[];
  words: number;
}

export const UNRESOLVED = new Set<string>();
export const DATA = pagesJson as unknown as Page[];
export const PAGES: Record<string, Page> = Object.fromEntries(DATA.map((p) => [p.path, p]));
export const POSTS = DATA.filter((p) => p.type === "post").sort((a, b) => b.date.localeCompare(a.date));

const IMG_DIR = path.join(process.cwd(), "public/assets/img");

export function localImg(url: string): string | null {
  const m = url.match(/\/wp-content\/uploads\/(.+?)(?:-\d+x\d+)?(\.\w+)$/);
  if (!m) return null;
  const stem = m[1].replace(/\//g, "_");
  return fs.existsSync(path.join(IMG_DIR, `${stem}.webp`)) ? `/assets/img/${stem}.webp` : null;
}

export function postThumb(p: Page): string | null {
  for (const i of p.images) {
    const l = localImg(i.src);
    if (l) return l;
  }
  return null;
}

export const postTitle = (p: Page) => p.h1 || p.title;

export function fmtDate(d: string) {
  if (!d) return "";
  const [y, m, day] = d.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, day)).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
  });
}

/** Old links whose target slug exists under a different name (judged by slug + topic; listed in CLIENT-QUESTIONS.md). */
const LINK_FIX: Record<string, string> = {
  "/blog/microblading-cost-connecticut/": "/microblading-cost-connecticut-2026/",
  "/blog/soap-brows-guide/": "/soap-brows-how-to/",
  "/blog/microblading-vs-tattoo/": "/microblading-vs-traditional-tattoo/",
  "/blog/eyebrow-shape-face-shape-guide/": "/perfect-eyebrow-shape-face-guide/",
};

/** Old links like /blog/<slug>/ never existed in the 90-page set; the post lives at /<slug>/. */
function fixHref(href: string): string {
  const clean = href.split("#")[0].split("?")[0];
  if (LINK_FIX[clean]) return href.replace(clean, LINK_FIX[clean]);
  if (PAGES[clean] || /^\/(assets|wp-content)\//.test(clean)) return href;
  const m = clean.match(/^\/(?:blog|services)\/([^/]+\/)$/);
  if (m && PAGES[`/${m[1]}`]) return href.replace(clean, `/${m[1]}`);
  return href;
}

function rewriteUrls($: cheerio.CheerioAPI) {
  $("a[href]").each((_, el) => {
    let h = $(el).attr("href")!;
    h = h.replace(/^https?:\/\/(?:www\.)?eyebrowsbygg\.com(?=\/|$)/, "") || "/";
    if (h.startsWith("/")) h = fixHref(h);
    const clean = h.split("#")[0].split("?")[0];
    if (h.startsWith("/") && !PAGES[clean] && !/^\/(assets|wp-content|_next)\//.test(clean)) {
      UNRESOLVED.add(clean);
      $(el).replaceWith($(el).contents()); // dead target: keep the words, drop the dead link
      return;
    }
    $(el).attr("href", h);
  });
  $("img[src]").each((_, el) => {
    const s = $(el).attr("src")!;
    const l = localImg(s);
    if (l) $(el).attr("src", l);
  });
}

export interface BodySegments {
  parts: string[];
  faq: { q: string; a: string }[];
}

function faqFromLd(page: Page) {
  for (const blk of page.jsonld as any[]) {
    const items = blk && blk["@graph"] ? blk["@graph"] : [blk];
    for (const it of items) {
      if (it && it["@type"] === "FAQPage") {
        return (it.mainEntity ?? []).map((q: any) => ({
          q: decode(q.name),
          a: decode(String(q.acceptedAnswer?.text ?? "").replace(/<[^>]+>/g, "")),
        }));
      }
    }
  }
  return [];
}

function decode(s: string) {
  return cheerio.load(`<i>${s}</i>`)("i").text();
}

const SLOT = "<!--FAQ-SLOT-->";

/** Cleans the WordPress body; splits it at the FAQ placeholder so FAQ renders as a Radix accordion. */
export function bodySegments(page: Page): BodySegments {
  const $ = cheerio.load(page.body);
  const root = $("div.entry-content").first().length ? $("div.entry-content").first() : $("body");
  root.find("div.clear").remove();
  root.find("h1").slice(1).each((_, el) => { (el as any).tagName = "h2"; });
  root.find("img").each((_, el) => {
    $(el).removeAttr("srcset").removeAttr("sizes");
    if ($(el).attr("loading") !== "eager") $(el).attr("loading", "lazy");
  });
  rewriteUrls($);
  let slotted = false;
  root.find("*").contents().each((_, node) => {
    if (node.type === "text" && /\[FAQPage schema renders/.test((node as any).data)) {
      const par = $(node).parent();
      $(par.is("p") ? par : (node as any)).replaceWith(SLOT);
      slotted = true;
    }
  });
  const html = root.html() ?? "";
  const parts = html.split(SLOT);
  return { parts, faq: slotted ? faqFromLd(page) : [] };
}

export function ogImage(p: Page): string {
  if (!p.ogimage) return "";
  const l = localImg(p.ogimage);
  return l ? ORIGIN + l : p.ogimage;
}
