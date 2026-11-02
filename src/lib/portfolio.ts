import fs from "node:fs";
import path from "node:path";
import { DATA } from "./content";

export interface Shot { src: string; alt: string; w: number; h: number }
const IMG = path.join(process.cwd(), "public/assets/img");
let cache: Shot[] | null = null;

export function portfolioShots(): Shot[] {
  if (cache) return cache;
  const alts: Record<string, string> = {};
  for (const p of DATA) for (const i of p.images) alts[i.src.split("/").pop()!.replace(/\.[^.]+$/, "")] = i.alt;
  const files = fs.readdirSync(IMG).filter((f) => /^2023_\d+_portfolio-\d+\.webp$/.test(f));
  const num = (f: string) => Number(f.match(/-(\d+)\.webp/)![1]);
  cache = files.sort((a, b) => num(b) - num(a)).map((f) => {
    const meta = dimsSync(path.join(IMG, f));
    return { src: `/assets/img/${f}`, alt: alts[`portfolio-${num(f)}`] || "Eyebrows by GG portfolio", w: meta.w, h: meta.h };
  });
  return cache;
}

/** WebP header parse (VP8/VP8L/VP8X) so we avoid async sharp inside sync render. */
function dimsSync(file: string) {
  const b = fs.readFileSync(file);
  const t = b.toString("ascii", 12, 16);
  if (t === "VP8X") return { w: 1 + b.readUIntLE(24, 3), h: 1 + b.readUIntLE(27, 3) };
  if (t === "VP8 ") return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
  const bits = b.readUInt32LE(21);
  return { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
}
