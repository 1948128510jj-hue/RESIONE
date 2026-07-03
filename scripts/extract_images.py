import fitz  # PyMuPDF
import os
import sys

pdf_path = r"C:\Users\Administrator\Desktop\(压缩)产品册 英文 2026.3.13.pdf"
output_dir = r"C:\Users\Administrator\resin3d-b2b\public\images\products"

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Total pages: {doc.page_count}")

img_count = 0
for page_num in range(doc.page_count):
    page = doc[page_num]
    images = page.get_images(full=True)

    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        ext = base_image["ext"]

        img_count += 1
        img_filename = f"product_{img_count}.{ext}"
        img_path = os.path.join(output_dir, img_filename)

        with open(img_path, "wb") as f:
            f.write(image_bytes)

        # Print image info
        w, h = base_image.get("width", 0), base_image.get("height", 0)
        print(f"Page {page_num+1}: extracted {img_filename} ({w}x{h}, {len(image_bytes)} bytes)")

    print(f"Page {page_num+1} done ({len(images)} images)")

doc.close()
print(f"\nTotal extracted: {img_count} images")
print(f"Output: {output_dir}")
