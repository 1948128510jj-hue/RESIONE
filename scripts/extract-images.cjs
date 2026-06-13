const fs = require('fs');
const path = require('path');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.cjs');

const pdfPath = 'C:\\Users\\Administrator\\Desktop\\(压缩)产品册 英文 2026.3.13.pdf';
const outputDir = path.join(__dirname, '..', 'public', 'images', 'products');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function main() {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  console.log('Total pages:', doc.numPages);
  let imageCount = 0;

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const ops = await page.getOperatorList();
    const pageOps = ops.fnArray;
    const args = ops.argsArray;

    for (let j = 0; j < pageOps.length; j++) {
      // Check for image operations
      const fn = pageOps[j];

      // OPS.paintImageXObject and similar
      if (fn === 82 || fn === 89 || fn === 25 || fn === 27 || fn === 52) {
        try {
          const imgData = args[j];
          if (imgData && imgData.length > 0) {
            // Try to find the image object
          }
        } catch (e) {}
      }
    }

    // Get image objects from the page
    const objs = page.objs;
    if (objs && objs.hasOwnProperty('_objs')) {
      const objMap = objs._objs;
      for (const [key, obj] of Object.entries(objMap)) {
        if (obj && obj.data && obj.data.length > 1000) {
          imageCount++;
          const ext = obj.data[0] === 0xFF && obj.data[1] === 0xD8 ? 'jpg' :
                      obj.data[0] === 0x89 && obj.data[1] === 0x50 ? 'png' :
                      'bin';
          const imgFile = path.join(outputDir, `product_${imageCount}.${ext}`);
          fs.writeFileSync(imgFile, Buffer.from(obj.data));
        }
      }
    }
    console.log(`Page ${i} processed...`);
  }

  console.log(`\nExtracted ${imageCount} images to ${outputDir}`);
}

main().catch(err => {
  console.error('Error:', err.message);
  console.error(err.stack);
});
