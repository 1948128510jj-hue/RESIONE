"""
From each VERIFIED CORRECT poster PNG,
crop the FULL product photo area naturally.
Save as {slug}_1.jpeg for product cards.
"""
import os
from PIL import Image

img_dir = r'C:\Users\Administrator\resin3d-b2b\public\images\products'

# Product slugs in catalog page order
slugs = [
    'ht-enduse','sp64','ww123','m70','th-bjd','tough74-v2',
    'tough74','g217','m58','m68','k','k-plus',
    'th-hr','cl-th','ww-abs','anti-impact','th72','th-mini',
    'th-ww','f69','f39','f39t','fx60','esd-flex',
    'eb80-eb60','ehp80-ehp60','el80-el60','f80',
    'gm01','d01','d01s','c01'
]

for slug in slugs:
    poster = os.path.join(img_dir, f'{slug}.png')
    if not os.path.exists(poster):
        print(f'MISSING: {slug}')
        continue

    img = Image.open(poster)
    w, h = img.size

    # Crop the RIGHT portion: product photo + visual area
    # Wide crop covering the main visual content
    photo = img.crop((
        int(w * 0.40),   # left edge - skip text labels
        int(h * 0.04),   # top - skip tiny top margin
        w,               # right edge
        int(h * 0.68)    # bottom - skip spec table
    ))

    out = os.path.join(img_dir, f'{slug}_1.jpeg')
    if photo.mode in ('RGBA', 'P'):
        photo = photo.convert('RGB')
    photo.save(out, 'JPEG', quality=93, optimize=True)
    print(f'{slug}: {photo.size[0]}x{photo.size[1]}')

print(f'\nDone! {len(slugs)} photos.')
