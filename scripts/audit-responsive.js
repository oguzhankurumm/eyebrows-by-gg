/* eslint-disable */
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'http://localhost:3000';
const INVENTORY_PATH = path.join(__dirname, '../reports/route_inventory.json');
const REPORT_PATH = path.join(__dirname, '../reports/responsive_issues.json');
const SCREENSHOT_BASE = path.join(__dirname, '../reports/screenshots');

const VIEWPORTS = [
  { name: 'Mobile_Small', width: 360, height: 800 },
  { name: 'Mobile_Large', width: 390, height: 844 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1440, height: 900 },
  { name: 'Large_Desktop', width: 1920, height: 1080 }
];

async function main() {
  console.log('Starting Responsive Audit...');

  // 1. Load Inventory
  const inventory = JSON.parse(fs.readFileSync(INVENTORY_PATH, 'utf8'));
  const routes = [...inventory.static, ...inventory.dynamic.services, ...inventory.dynamic.blog];
  
  // 2. Launch Browser
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const issues = [];

  try {
    for (const route of routes) {
      if (route === '/book') {
          console.log(`Skipping ${route} (Redirect Page)`);
          continue;
      }
      try {
        const pageUrl = `${BASE_URL}${route}`;
        const routeSlug = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '_');
        console.log(`Checking: ${route}`);
        
        const page = await browser.newPage();
        
        for (const vp of VIEWPORTS) {
          try {
              await page.setViewport(vp);
              await page.goto(pageUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
              // Wait a bit for layout
              await new Promise(r => setTimeout(r, 500));
              
              // Check for Horizontal Scroll (Overflow)
              const overflow = await page.evaluate(() => {
                return document.documentElement.scrollWidth > window.innerWidth;
              });

              if (overflow) {
                  console.log(`  [FAIL] ${route} @ ${vp.name} - Horizontal Overflow`);
                  
                  // Create dir
                  const screenshotDir = path.join(SCREENSHOT_BASE, routeSlug, vp.name);
                  fs.mkdirSync(screenshotDir, { recursive: true });
                  const screenshotPath = path.join(screenshotDir, `overflow.png`);
                  
                  await page.screenshot({ path: screenshotPath, fullPage: true });
                  
                  issues.push({
                      route: route,
                      viewport: vp.name,
                      width: vp.width,
                      issue: 'Horizontal Overflow',
                      description: `Content width exceeds viewport width (${vp.width}px).`,
                      screenshot: screenshotPath
                  });
              }
          } catch (vpErr) {
              console.error(`Error on ${route} @ ${vp.name}: ${vpErr.message}`);
          }
        }
        
        await page.close();
      } catch (routeErr) {
          console.error(`Error processing route ${route}: ${routeErr.message}`);
      }
    }
  } catch (err) {
      console.error("Critical error in responsive audit:", err);
  } finally {
    await browser.close();
    fs.writeFileSync(REPORT_PATH, JSON.stringify(issues, null, 2));
    console.log(`Responsive Audit complete. Found ${issues.length} issues.`);
  }
}

main();
