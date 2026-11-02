import fs from "node:fs";
import path from "node:path";
const pages = JSON.parse(fs.readFileSync("src/data/pages.json", "utf8"));
const failures = [];
let links = 0;
for (const page of pages) {
  const file = path.join("out", page.path, "index.html");
  if (!fs.existsSync(file)) {
    failures.push(`Missing route ${page.path}`);
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1)
    failures.push(`${page.path}: expected one h1`);
  for (const token of [
    'name="description"',
    'property="og:title"',
    'property="og:description"',
    'property="og:image"',
    'rel="canonical"',
    'id="main"',
    '<html lang="en"',
  ])
    if (!html.includes(token)) failures.push(`${page.path}: missing ${token}`);
  for (const match of html.matchAll(
    /<script type="application\/ld\+json">(.*?)<\/script>/gs,
  )) {
    try {
      JSON.parse(match[1]);
    } catch {
      failures.push(`${page.path}: invalid JSON-LD`);
    }
  }
  for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    const url = match[1].replaceAll("&amp;", "&");
    if (!url.startsWith("/") || url.startsWith("//")) continue;
    const [pathname, fragment] = url.split("#");
    const clean = pathname.split("?")[0];
    const target = path.join("out", clean);
    const index = path.join(target, "index.html");
    links++;
    if (!fs.existsSync(target) && !fs.existsSync(index))
      failures.push(`${page.path}: broken asset/link ${url}`);
    if (
      fragment &&
      fs.existsSync(index) &&
      !fs.readFileSync(index, "utf8").includes(`id="${fragment}"`)
    )
      failures.push(`${page.path}: missing anchor ${url}`);
  }
}
const css = fs.readFileSync("src/app/globals.css", "utf8");
function luminance(hex) {
  const channels = hex
    .match(/[a-f\d]{2}/gi)
    .map((value) => parseInt(value, 16) / 255)
    .map((value) =>
      value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
    );
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}
const colors = Object.fromEntries(
  [
    ...css.matchAll(
      /--(background|surface|text|accent|muted):\s*(#[a-f\d]{6})/gi,
    ),
  ].map((match) => [match[1], match[2]]),
);
const contrast = [];
for (const [foreground, background] of [
  ["text", "background"],
  ["text", "surface"],
  ["muted", "background"],
  ["muted", "surface"],
  ["background", "accent"],
  ["background", "text"],
]) {
  const values = [
    luminance(colors[foreground]),
    luminance(colors[background]),
  ].sort((a, b) => b - a);
  const ratio = (values[0] + 0.05) / (values[1] + 0.05);
  contrast.push(`${foreground}/${background} ${ratio.toFixed(2)}:1`);
  if (ratio < 4.5)
    failures.push(`Contrast below AA: ${foreground}/${background}`);
}
if (!fs.existsSync("out/sitemap.xml") || !fs.existsSync("out/robots.txt"))
  failures.push("Missing sitemap or robots");
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `PASS: ${pages.length} routes, ${links} local links/assets, headings, metadata, JSON-LD and AA contrast.`,
  );
  console.log(contrast.join("\n"));
}
