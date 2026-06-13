"""
Crop product images from catalog pages.
Each page has 2 products: left and right.
Pages 5-20 contain product detail pages.
"""
import fitz
import os

pdf_path = r"C:\Users\Administrator\Desktop\(压缩)产品册 英文 2026.3.13.pdf"
output_dir = r"C:\Users\Administrator\resin3d-b2b\public\images\products"

# Product-page mapping determined by visual inspection
# (page_num, left_product_slug, right_product_slug)
PRODUCT_PAGES = [
    (5, 'ht-enduse', 'sp64'),
    (6, 'ww123', 'm70'),
    (7, 'th-bjd', 'tough74-v2'),
    (8, 'tough74', 'g217'),
    (9, 'm58', 'm68'),
    (10, 'k', 'k-plus'),
    (11, 'th-hr', 'cl-th'),
    (12, 'ww-abs', 'anti-impact'),
    (13, 'th72', 'th-mini'),
    (14, 'th-ww', 'f69'),
    (15, 'f39', 'f39t'),
    (16, 'fx60', 'esd-flex'),
    (17, 'eb80-eb60', 'ehp80-ehp60'),
    (18, 'el80-el60', 'f80'),
    (19, 'gm01', 'd01'),
    (20, 'd01s', 'c01'),
]

doc = fitz.open(pdf_path)

for page_num, left_slug, right_slug in PRODUCT_PAGES:
    page = doc[page_num - 1]  # 0-indexed
    page_rect = page.rect
    width = page_rect.width
    height = page_rect.height

    # Render full page at high DPI
    pix = page.get_pixmap(dpi=300)
    img_data = pix.tobytes("png")

    from PIL import Image
    import io

    img = Image.open(io.BytesIO(img_data))
    w, h = img.size

    # Left half (main product image area - top portion)
    left = img.crop((0, 0, w // 2, h))
    right = img.crop((w // 2, 0, w, h))

    left_path = os.path.join(output_dir, f'{left_slug}.png')
    right_path = os.path.join(output_dir, f'{right_slug}.png')

    left.save(left_path, 'PNG', optimize=True)
    right.save(right_path, 'PNG', optimize=True)

    print(f'Page {page_num}: {left_slug}.png + {right_slug}.png saved ({w//2}x{h})')

doc.close()
print(f'\nDone! All product images in {output_dir}')
