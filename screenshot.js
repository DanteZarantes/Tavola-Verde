const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 }
  });
  
  await page.goto('http://localhost:3001/menu');
  await page.waitForTimeout(2000); // Wait for animations to settle
  
  await page.screenshot({ path: path.join(__dirname, 'menu-screenshot.png'), fullPage: true });
  
  await browser.close();
  console.log('Screenshot saved to menu-screenshot.png');
})();
