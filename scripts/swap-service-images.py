#!/usr/bin/env python3
import io, sys
from pathlib import Path
from PIL import Image

SOURCES = [
    Path.home() / "Desktop" / "firenze new",
    Path.home() / "Desktop" / "firenze-new",
    Path.home() / "Desktop" / "firenze_new",
]
SOURCE = next((s for s in SOURCES if s.exists()), None)
if not SOURCE:
    print("ERROR: folder not found"); sys.exit(1)

TARGETS = {}
for f in SOURCE.iterdir():
    name = f.stem.lower().replace(' ', '-').replace('_', '-')
    if f.suffix.lower() not in ('.jpg','.jpeg','.png','.webp','.heic'):
        continue
    if 'wedding' in name and 'firenze' in name:
        TARGETS['weddings'] = f
    elif 'event' in name and 'firenze' in name:
        TARGETS['events'] = f
    elif name.startswith('wedding') or name == 'weddings':
        TARGETS.setdefault('weddings', f)
    elif name.startswith('event') or name == 'events':
        TARGETS.setdefault('events', f)

print("Found:", TARGETS)

DEST_MAP = {
    'weddings': Path('public/images/heroes/hero-weddings.webp'),
    'events':   Path('public/images/heroes/hero-events.webp'),
}

MAX = 1.5 * 1024 * 1024

for key, src in TARGETS.items():
    dest = DEST_MAP[key]
    dest.parent.mkdir(parents=True, exist_ok=True)
    print(f"Processing {src.name} -> {dest.name}")
    try:
        img = Image.open(src)
        if img.mode != 'RGB':
            bg = Image.new('RGB', img.size, (10,10,10))
            if img.mode == 'P': img = img.convert('RGBA')
            if img.mode in ('RGBA','LA'): bg.paste(img, mask=img.split()[-1])
            else: bg.paste(img)
            img = bg
        w, h = img.size
        if w > 1920:
            img = img.resize((1920, int(h*1920/w)), Image.LANCZOS)
        quality = 85
        while quality >= 65:
            buf = io.BytesIO()
            img.save(buf, 'WEBP', quality=quality, method=6)
            if buf.tell() <= MAX:
                dest.write_bytes(buf.getvalue())
                print(f"  Saved {buf.tell()//1024}KB @ q{quality}")
                break
            quality -= 5
    except Exception as e:
        print(f"  ERROR: {e}")
