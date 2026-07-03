"""
Extract clean product photos from poster PNGs.
Crop the product photo area (right side, middle portion) naturally.
No forced squaring — keep natural proportions.
"""
import os
from PIL import Image

img_dir = r'C:\Users\Administrator\resin3d-b2b\public\images\products'

slugs = [
    'ht-enduse','sp64','ww123','m70','th-bjd','tough74-v2',
    'tough74','g217','m58','m68','k','k-plus',
    'th-hr','cl-th','ww-abs','anti-impact','th72','th-mini',
    'th-ww','f69','f39','f39t','fx60','esd-flex',
    'eb80-eb60','ehp80-ehp60','el80-el60','f80',
    'gm01','d01','d01s','c01'
]

for slug in slugs:
    poster_path = os.path.join(img_dir, f'{slug}.png')
    if not os.path.exists(poster_path):
        continue

    img = Image.open(poster_path)
    w, h = img.size

    # Crop the product photo area: right side, upper-middle portion
    left = int(w * 0.42)
    right = w
    top = int(h * 0.06)
    bottom = int(h * 0.58)

    photo = img.crop((left, top, right, bottom))

    photo_path = os.path.join(img_dir, f'{slug}_photo_1.jpeg')
    if photo.mode in ('RGBA', 'P'):
        photo = photo.convert('RGB')
    photo.save(photo_path, 'JPEG', quality=92, optimize=True)
    print(f'{slug}: {photo.size[0]}x{photo.size[1]}')

print('\nDone!')
