const fs = require('fs');

// Try to import pdf-parse properly
const pdfModule = require('pdf-parse');
console.log('Module type:', typeof pdfModule);
console.log('Module keys:', Object.keys(pdfModule));

if (typeof pdfModule === 'function') {
  // It's a direct function
  const pdfPath = 'C:\\Users\\Administrator\\Desktop\\(压缩)产品册 中文 2026.3.13 .pdf';
  const dataBuffer = fs.readFileSync(pdfPath);
  pdfModule(dataBuffer).then(data => {
    console.log('Pages:', data.numpages);
    console.log('=== TEXT ===');
    console.log(data.text.substring(0, 10000));
  }).catch(err => console.error('Error:', err.message));
} else if (pdfModule.default) {
  console.log('Using .default');
} else if (pdfModule.PDFParse) {
  console.log('Using PDFParse');
}
