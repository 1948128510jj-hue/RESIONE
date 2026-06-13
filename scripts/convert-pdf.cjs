const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  const fs = require('fs');
  const htmlContent = fs.readFileSync('C:/Users/Administrator/Desktop/RESIONE销售培训手册.html', 'utf-8');
  await page.setContent(htmlContent, {waitUntil: 'networkidle0'});
  await page.pdf({
    path: 'C:/Users/Administrator/Desktop/RESIONE销售培训手册.pdf',
    format: 'A4',
    margin: {top: '15mm', bottom: '15mm', left: '12mm', right: '12mm'},
    printBackground: true
  });
  await browser.close();
  console.log('PDF saved to desktop!');
})();
