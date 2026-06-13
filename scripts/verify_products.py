import fitz
import os

pdf_path = r"C:\Users\Administrator\Desktop\(压缩)产品册 英文 2026.3.13.pdf"
output_dir = r"C:\Users\Administrator\Desktop\网站\catalog_pages"

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Converting {doc.page_count} pages to images...")

for page_num in range(doc.page_count):
    page = doc[page_num]
    # Render at high resolution
    pix = page.get_pixmap(dpi=200)
    img_path = os.path.join(output_dir, f"page_{page_num+1:02d}.png")
    pix.save(img_path)
    print(f"Page {page_num+1} saved: {img_path}")

doc.close()
print(f"\nDone! All pages saved to {output_dir}")
