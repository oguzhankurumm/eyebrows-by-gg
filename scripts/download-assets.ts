import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { promisify } from 'util';
import stream from 'stream';

const finished = promisify(stream.finished);

// Curated Unsplash IDs for specific vibes (Editorial Beauty, Neutral, High Quality)
// Ensure these are high quality and match the "no gold, clean" aesthetic.
const ASSETS = [
    { name: 'home-hero.jpg', url: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1600&auto=format&fit=crop' }, // Minimalist woman portrait
    { name: 'services-hero.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1600&auto=format&fit=crop' }, // Skincare texture/cream
    { name: 'about-portrait.jpg', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop' }, // Professional artist vibe
    { name: 'portfolio-1.jpg', url: 'https://images.unsplash.com/photo-1588510904428-472d2fb5461c?q=80&w=800&auto=format&fit=crop' }, // Brow closeup
    { name: 'portfolio-2.jpg', url: 'https://images.unsplash.com/photo-1522337360477-36358785d1e4?q=80&w=800&auto=format&fit=crop' }, // Makeup application
    { name: 'portfolio-3.jpg', url: 'https://images.unsplash.com/photo-1596704017254-9b121068fb6d?q=80&w=800&auto=format&fit=crop' }, // Eyes closeup
    { name: 'portfolio-4.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop' }, // Clean beauty
    { name: 'studio-interior.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop' }, // Clean interior
    { name: 'blog-1.jpg', url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop' }, // Tools/Brushes
];

const OUTPUT_DIR = path.join(process.cwd(), 'public/images/stock');

async function downloadImage(url: string, filename: string) {
    const writer = fs.createWriteStream(path.join(OUTPUT_DIR, filename));
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
    });

    response.data.pipe(writer);
    await finished(writer);
    console.log(`Downloaded ${filename}`);
}

async function main() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log(`Downloading ${ASSETS.length} images to ${OUTPUT_DIR}...`);

    // Create CREDITS.md content
    let credits = "# Image Credits\n\n";

    for (const asset of ASSETS) {
        try {
            await downloadImage(asset.url, asset.name);
            credits += `- **${asset.name}**: Sourced from Unsplash (${asset.url})\n`;
        } catch (error) {
            console.error(`Failed to download ${asset.name}:`, error);
        }
    }

    fs.writeFileSync(path.join(process.cwd(), 'CREDITS.md'), credits);
    console.log("Done! Created CREDITS.md");
}

main().catch(console.error);
