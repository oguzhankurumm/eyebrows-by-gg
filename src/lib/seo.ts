import type { Metadata } from "next";
import { ORIGIN } from "./site";
import type { Page } from "./content";
export function pageMetadata(page: Page): Metadata {
  const title = `${page.title} | Eyebrows by GG, Milford CT`;
  return { title: { absolute: title }, description: page.desc, alternates: { canonical: ORIGIN + page.path }, openGraph: { title, description: page.desc, url: ORIGIN + page.path, siteName: "Eyebrows by GG", locale: "en_US", type: "website", images: [{ url: "/assets/photos/gg-cover-1440.webp", width: 1440, height: 804, alt: "Gonul Gonenc of Eyebrows by GG" }] }, twitter: { card: "summary_large_image", title, description: page.desc, images: ["/assets/photos/gg-cover-1440.webp"] } };
}
