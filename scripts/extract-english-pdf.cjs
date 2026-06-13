const fs = require('fs');
const path = require('path');

const pdfPath = 'C:\\Users\\Administrator\\Desktop\\(压缩)产品册 英文 2026.3.13.pdf';

const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
  console.log('Pages:', data.numpages);
  console.log('=== FULL TEXT ===');
  console.log(data.text);

  // Save to file
  fs.writeFileSync(path.join(__dirname, 'english-catalog-output.txt'), data.text, 'utf-8');
  console.log('\n\n=== Saved to scripts/english-catalog-output.txt ===');
}).catch(function(err) {
  console.error('Error:', err.message);
});
