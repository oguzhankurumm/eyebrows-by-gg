import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import TurndownService from 'turndown';
import { URL as NodeURL } from 'url';
import axios from 'axios';

const BASE_URL = 'https://www.eyebrowsbygg.com';
const BLOG_LIST_URL = `${BASE_URL}/blog/`;
const OUTPUT_DIR = path.join(process.cwd(), 'content/blog');
const REDIRECTS_FILE = path.join(process.cwd(), 'data/generated-redirects.json');
const IMAGE_DIR = path.join(process.cwd(), 'public/images/uploads');

// Ensure directories exist
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
if (!fs.existsSync(IMAGE_DIR)) fs.mkdirSync(IMAGE_DIR, { recursive: true });

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
});

// Remove scripts, styles, and empty paragraphs
turndownService.addRule('remove-irrelevant', {
  filter: ['script', 'style', 'iframe', 'form'],
  replacement: () => '',
});

const KNOWN_PAGES = [
  '/', '/about/', '/contact/', '/services/', '/portfolio/',
  '/make-a-reservation/', '/cart/', '/checkout/', '/my-account/',
  '/category/general/', '/category/permanent-makeup/'
];

async function downloadImage(url: string): Promise<string | null> {
  try {
    // Handle relative URLs
    if (url.startsWith('/')) {
      url = `${BASE_URL}${url}`;
    }

    // Skip external images or data URIs
    if (!url.startsWith('http') || url.startsWith('data:')) return url;

    // const urlObj = new NodeURL(url);
    const filename = path.basename(new NodeURL(url).pathname);
    // Add hash to filename to prevent collisions if needed, or just keep simple for now
    const safeFilename = filename.replace(/[^a-zA-Z0-9._-]/g, '_');

    const localPath = path.join(IMAGE_DIR, safeFilename);
    const publicPath = `/images/uploads/${safeFilename}`;

    if (fs.existsSync(localPath)) {
      console.log(`Image exists: ${safeFilename}`);
      return publicPath;
    }

    console.log(`Downloading image: ${url}`);
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
      validateStatus: (status) => status < 500 // Accept anything not server error to try
    });

    const writer = fs.createWriteStream(localPath);
    response.data.pipe(writer);

    return new Promise((resolve) => {
      writer.on('finish', () => resolve(publicPath));
      writer.on('error', (err) => {
        console.error(`Error writing image ${filename}:`, err);
        resolve(url); // Fallback to remote URL
      });
    });
  } catch (error) {
    console.error(`Failed to download image ${url}:`, (error as Error).message);
    return url; // Return original URL if download fails
  }
}

async function scrape() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Set a realistic user agent
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36');

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  console.log('Fetching blog list...');
  await page.goto(BLOG_LIST_URL, { waitUntil: 'networkidle0' });

  const pageTitle = await page.title();
  console.log('Current Page Title:', pageTitle);

  // Get all links
  const allLinks = await page.evaluate(() => Array.from(document.querySelectorAll('a')).map(a => a.href));
  console.log('Total raw links found:', allLinks.length);
  console.log('Sample links:', allLinks.slice(0, 20));

  const postLinks = await page.evaluate((baseUrl, knownPages) => {
    const links = Array.from(document.querySelectorAll('a'));
    // console.log('Total links found:', links.length); // console.log inside evaluate goes to browser console, not node console unless wired up

    return links
      .map(a => a.href)
      .filter(href => {
        if (!href) return false;
        // Normalize
        if (href.endsWith('/')) href = href.slice(0, -1);

        // Check domain
        if (!href.startsWith(baseUrl)) {
          // console.log('Excluded (domain):', href);
          return false;
        }

        // Remove hash and query for analysis
        const cleanHref = href.split('#')[0].split('?')[0];

        // Exclude noise
        // if (cleanHref.includes('/page/') || cleanHref.includes('wp-content')) {
        //     console.log('Excluded (noise):', href);
        //     return false;
        // }

        try {
          const urlObj = new URL(cleanHref);
          const path = urlObj.pathname;
          console.log('Checking path:', path);

          // Exclude known non-blog pages
          if (knownPages.some(kp => path === kp || path === kp.slice(0, -1))) {
            console.log('Excluded (known):', path);
            return false;
          }

          // Exclude author/category/tag archives if they exist
          if (path.startsWith('/author/') || path.startsWith('/category/') || path.startsWith('/tag/')) {
            console.log('Excluded (archive):', path);
            return false;
          }

          // Heuristic: Blog posts usually have longer slugs
          if (path.length <= 15) {
            console.log('Excluded (short):', path);
            return false;
          }

          console.log('Accepted:', cleanHref);
          return true;
        } catch (e) {
          console.log('Error parsing:', href, String(e));
          return false;
        }
      });
  }, BASE_URL, KNOWN_PAGES);

  const uniqueLinks = Array.from(new Set(postLinks));
  console.log(`Found ${uniqueLinks.length} potential post links.`);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const redirects: any[] = [];

  for (const link of uniqueLinks) {
    console.log(`Scraping ${link}...`);
    try {
      await page.goto(link, { waitUntil: 'domcontentloaded' });

      // Extract data
      const data = await page.evaluate(() => {
        // Remove junk
        const selectorsToRemove = ['.sharedaddy', '.jp-relatedposts', '.wpcnt', '#comments', '.post-navigation', '.sidebar', 'header', 'footer', '.nav-links'];
        selectorsToRemove.forEach(s => document.querySelectorAll(s).forEach(e => e.remove()));

        const title = document.querySelector('h1')?.innerText?.trim() || document.title.split('|')[0].trim();
        const dateMeta = document.querySelector('meta[property="article:published_time"]')?.getAttribute('content');
        const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

        // Try to find the main content container
        const contentEl = document.querySelector('.entry-content') || document.querySelector('.post-content') || document.querySelector('article .content') || document.querySelector('article');

        let html = '';
        const images: string[] = [];

        if (contentEl) {
          // Get all image srcs before we grab HTML
          contentEl.querySelectorAll('img').forEach(img => {
            if (img.src) images.push(img.src);
          });
          html = contentEl.innerHTML;
        }

        return {
          title,
          pubDate: dateMeta ? dateMeta.split('T')[0] : new Date().toISOString().split('T')[0],
          description,
          html,
          images
        };
      });

      // Process Images Locally
      let processedHtml = data.html;
      for (const imgUrl of data.images) {
        const localUrl = await downloadImage(imgUrl);
        if (localUrl && localUrl !== imgUrl) {
          // Replace in HTML
          // Simple string replace might be risky if url appears in text, but usually safe for full URLs
          processedHtml = processedHtml.split(imgUrl).join(localUrl);
        }
      }

      const markdown = turndownService.turndown(processedHtml);

      const slug = new NodeURL(link).pathname.replace(/\//g, '').replace(/\/$/, '');

      const mdxContent = `---
title: "${data.title.replace(/"/g, '\\"')}"
description: "${data.description.replace(/"/g, '\\"')}"
date: "${data.pubDate}"
tags: []
author: "Gigi"
---

${markdown}
`;

      const filename = `${slug}.mdx`;
      fs.writeFileSync(path.join(OUTPUT_DIR, filename), mdxContent);
      console.log(`Saved ${filename}`);

      redirects.push({
        source: `/${slug}`,
        destination: `/blog/${slug}`,
        permanent: true,
      });
      redirects.push({
        source: `/${slug}/`,
        destination: `/blog/${slug}`,
        permanent: true,
      });

    } catch (err) {
      console.error(`Failed to scrape ${link}:`, err);
    }
  }

  // Save Redirects
  fs.writeFileSync(REDIRECTS_FILE, JSON.stringify(redirects, null, 2));
  console.log(`Generated ${redirects.length} redirects.`);

  await browser.close();
}

scrape().catch(console.error);
