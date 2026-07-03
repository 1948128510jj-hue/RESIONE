const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  const html = fs.readFileSync('C:/Users/Administrator/Desktop/RESIONE学习与工作规划.html', 'utf-8');
  await page.setContent(html, {waitUntil: 'networkidle0'});
  await page.pdf({
    path: 'C:/Users/Administrator/Desktop/RESIONE学习与工作规划.pdf',
    format: 'A4',
    margin: {top: '12mm', bottom: '12mm', left: '10mm', right: '10mm'},
    printBackground: true
  });
  await browser.close();
  console.log('PDF saved!');
})();
