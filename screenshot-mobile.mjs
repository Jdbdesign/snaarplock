import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

const url = process.argv[2] || 'http://localhost:3001';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

const viewports = [
  { width: 375,  height: 812, label: 'mobile-375' },
  { width: 768,  height: 1024, label: 'tablet-768' },
];

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 800));
  const out = path.join(screenshotDir, `screenshot-${vp.label}.png`);
  await page.screenshot({ path: out, fullPage: true });
  console.log(`Saved: ${out}`);
  await page.close();
}

await browser.close();
