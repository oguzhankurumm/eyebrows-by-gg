/* eslint-disable */
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Configuration
const BASE_URL = 'http://localhost:3000';
const INVENTORY_PATH = path.join(__dirname, '../reports/route_inventory.json');
const REPORT_PATH = path.join(__dirname, '../reports/broken_links.json');

async function main() {
  console.log('Starting Broken Link Audit...');

  // 1. Load Inventory
  const inventory = JSON.parse(fs.readFileSync(INVENTORY_PATH, 'utf8'));
  const routes = [...inventory.static, ...inventory.dynamic.services, ...inventory.dynamic.blog];
  
  // 2. Launch Browser
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const results = [];
  const visitedLinks = new Set(); // Cache link status to avoid re-checking same URL multiple times

  try {
    for (const route of routes) {
      const pageUrl = `${BASE_URL}${route}`;
      console.log(`Scanning: ${pageUrl}`);
      
      const page = await browser.newPage();
      
      // Navigate to page
      const response = await page.goto(pageUrl, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(e => ({ status: () => 'ERROR', error: e.message }));
      
      if (response.status() !== 200) {
        results.push({
          source: route,
          link: route,
          text: 'PAGE LOAD',
          error: `Page returned status ${response.status()}`
        });
        await page.close();
        continue;
      }

      // Extract links
      const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a')).map(a => ({
          href: a.href,
          text: a.innerText.trim().substring(0, 50),
          html: a.outerHTML.substring(0, 100)
        }));
      });

      for (const link of links) {
        if (!link.href || link.href.startsWith('javascript:') || link.href.startsWith('mailto:') || link.href.startsWith('tel:')) continue;
        
        const isInternal = link.href.startsWith(BASE_URL);
        
        // Skip already checked links if you want optimization, but sometimes context matters.
        // We will cache valid/invalid status.
        
        let status = 'UNKNOWN';
        let error = null;

        if (visitedLinks.has(link.href)) {
            // We could skip re-checking, but for now let's just assume previous result applies. 
            // Ideally we store result in map.
            continue; 
        }
        visitedLinks.add(link.href);

        try {
           if (isInternal) {
             // For internal, we can just fetch HEAD or GET
             const res = await fetch(link.href, { method: 'HEAD' });
             if (!res.ok && res.status !== 405) { // 405 Method Not Allowed might happen for static files sometimes, try GET
                const resGet = await fetch(link.href);
                if (!resGet.ok) {
                    status = 'BROKEN';
                    error = `${resGet.status} ${resGet.statusText}`;
                } else {
                    status = 'OK';
                }
             } else {
                 status = 'OK';
             }
           } else {
             // External
             // GlossGenius/WhatsApp check
             if (link.href.includes('glossgenius.com') || link.href.includes('wa.me') || link.href.includes('whatsapp.com')) {
                // Just check if valid URL format and maybe reachable
                try {
                    new URL(link.href);
                    // Optional: fetch check, but many block bots. 
                    // We'll trust it if it's a valid URL for now to avoid 403s.
                    status = 'OK';
                } catch(e) {
                    status = 'BROKEN';
                    error = 'Invalid URL format';
                }
             } else {
                 const res = await fetch(link.href, { method: 'HEAD', mode: 'no-cors' }); 
                 // fetch from node context doesn't have mode: no-cors same as browser, but simple fetch works.
                 // Note: some external sites block HEAD.
                 if (!res.ok && res.status !== 405 && res.status !== 403) { // 403 is common for bots
                     status = 'BROKEN'; // Mark potential broken, but verify manually?
                     // Let's be lenient on 403 for external
                     if (res.status === 404) {
                         status = 'BROKEN';
                         error = '404 Not Found';
                     } else if (res.status >= 500) {
                         status = 'BROKEN';
                         error = `Server Error ${res.status}`;
                     } else {
                         status = 'OK'; // Assume 403/401/etc are live sites blocking us
                     }
                 } else {
                     status = 'OK';
                 }
             }
           }
        } catch (err) {
            status = 'BROKEN';
            error = err.message;
        }

        if (status === 'BROKEN') {
            console.log(`  [FAIL] ${link.href} (${error})`);
            results.push({
                source: route,
                link: link.href,
                text: link.text || 'IMG/ICON',
                error: error
            });
        }
      }
      
      await page.close();
    }
  } catch (err) {
      console.error("Critical error in audit:", err);
  } finally {
    await browser.close();
    fs.writeFileSync(REPORT_PATH, JSON.stringify(results, null, 2));
    console.log(`Audit complete. Found ${results.length} broken links.`);
  }
}

main();
