import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
const source = 'public/assets/img';
const output = 'public/assets/photos';
await fs.mkdir(output, { recursive: true });
const files = (await fs.readdir(source)).filter(file => /portfolio-\d+\.webp$/.test(file) || ['gg-portrait.webp', 'gg-cover.webp'].includes(file));
const manifest = {};
for (const file of files) {
  const name = path.basename(file, '.webp');
  const input = path.join(source, file);
  const metadata = await sharp(input).metadata();
  manifest[name] = { width: metadata.width, height: metadata.height };
  for (const width of [320, 640, 960, 1440]) {
    const target = path.join(output, `${name}-${width}.webp`);
    const exists = await fs.stat(target).catch(() => null);
    if (!exists) await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(target);
  }
}
await fs.writeFile('src/data/photos.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared responsive variants for ${files.length} supplied photographs.`);
