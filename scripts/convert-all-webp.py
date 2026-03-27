#!/usr/bin/env python3
import io
from pathlib import Path
from PIL import Image

public = Path('public')
converted = 0

for img_path in sorted(public.rglob('*')):
    if img_path.suffix.lower() not in ('.jpg', '.jpeg', '.png'):
        continue
    if 'logo' in img_path.name.lower():
        continue  # keep logo.png for transparency
    webp = img_path.with_suffix('.webp')
    if webp.exists():
        continue
    try:
        img = Image.open(img_path)
        if img.mode != 'RGB':
            bg = Image.new('RGB', img.size, (10, 10, 10))
            if img.mode == 'P':
                img = img.convert('RGBA')
            if img.mode in ('RGBA', 'LA'):
                bg.paste(img, mask=img.split()[-1])
            else:
                bg.paste(img)
            img = bg
        w, h = img.size
        if w > 1920:
            img = img.resize((1920, int(h * 1920 / w)), Image.LANCZOS)
        quality = 85
        while quality >= 65:
            buf = io.BytesIO()
            img.save(buf, 'WEBP', quality=quality, method=6)
            if buf.tell() <= 1.5 * 1024 * 1024:
                webp.write_bytes(buf.getvalue())
                print(f'✅ {img_path.relative_to(public)} → {webp.name} ({buf.tell()//1024}KB)')
                converted += 1
                break
            quality -= 5
        else:
            img = img.resize((1280, int(img.height * 1280 / img.width)), Image.LANCZOS)
            buf = io.BytesIO()
            img.save(buf, 'WEBP', quality=72, method=6)
            webp.write_bytes(buf.getvalue())
            print(f'✅ {img_path.name} → {webp.name} ({buf.tell()//1024}KB, resized)')
            converted += 1
    except Exception as e:
        print(f'⚠️  {img_path.name}: {e}')

print(f'\nTotal converted: {converted}')
