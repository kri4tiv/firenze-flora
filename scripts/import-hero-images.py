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
    print("ERROR: Cannot find desktop folder"); sys.exit(1)

HEROES_DEST = Path("public/images/heroes")
CARDS_DEST  = Path("public/images/type-cards")
HEROES_DEST.mkdir(parents=True, exist_ok=True)
CARDS_DEST.mkdir(parents=True, exist_ok=True)

MAX_BYTES = 1.5 * 1024 * 1024

# Hero images (full-bleed page backgrounds)
HERO_MAP = {
    "firenze-weddings": "hero-weddings.webp",
    "firenze-events":   "hero-events.webp",
    "events-background": "hero-events-bg.webp",
    "about-page":       "hero-about.webp",
    "about-page2":      "hero-about2.webp",
    "enquiry-background": "hero-enquire.webp",
}

# TypeCard images
CARD_MAP = {
    "weddings-arabic":         "weddings-arabic.webp",
    "weddings-indian":         "weddings-indian.webp",
    "weddings-iranian":        "weddings-iranian.webp",
    "weddings-westernwedding": "weddings-western.webp",
    "weddings-decoration":     "weddings-decoration.webp",
    "events-corporate":        "events-corporate.webp",
    "events-private":          "events-private.webp",
    "events-brand":            "events-brand.webp",
    "events-openingceremony":  "events-opening.webp",
    "events-birthdays":        "events-birthdays.webp",
    "events-anniversary":      "events-anniversary.webp",
    "events-babyshower":       "events-babyshower.webp",
    "events-proposals":        "events-proposals.webp",
    "events-product launches": "events-product-launches.webp",
}

def compress_image(src: Path, dest: Path, max_width: int = 1920):
    img = Image.open(src)
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
    if w > max_width:
        img = img.resize((max_width, int(h * max_width / w)), Image.LANCZOS)

    quality = 85
    while quality >= 65:
        buf = io.BytesIO()
        img.save(buf, 'WEBP', quality=quality, method=6)
        if buf.tell() <= MAX_BYTES:
            dest.write_bytes(buf.getvalue())
            print(f"  ✅ {buf.tell()//1024}KB @ q{quality}")
            return
        quality -= 5

    # Fallback: resize down
    img = img.resize((1280, int(img.height * 1280 / img.width)), Image.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, 'WEBP', quality=72, method=6)
    dest.write_bytes(buf.getvalue())
    print(f"  ✅ {buf.tell()//1024}KB (resized to 1280px)")

for src in SOURCE.iterdir():
    if src.suffix.lower() not in ('.jpg', '.jpeg', '.png', '.webp', '.heic'):
        continue

    stem = src.stem.lower().replace('_', '-').replace(' ', '-')

    # Check hero map
    if stem in HERO_MAP:
        dest = HEROES_DEST / HERO_MAP[stem]
        print(f"{src.name} → heroes/{HERO_MAP[stem]}")
        try:
            compress_image(src, dest)
        except Exception as e:
            print(f"  ❌ {e}")
        continue

    # Check card map (need to check original stem too for spaces)
    stem_orig = src.stem.lower()
    card_dest_name = CARD_MAP.get(stem) or CARD_MAP.get(stem_orig)
    if card_dest_name:
        dest = CARDS_DEST / card_dest_name
        print(f"{src.name} → type-cards/{card_dest_name}")
        try:
            compress_image(src, dest, max_width=800)
        except Exception as e:
            print(f"  ❌ {e}")
        continue

    print(f"⚠️  Skipped (no mapping): {src.name}")

print("\n── Heroes ──")
for f in sorted(HEROES_DEST.iterdir()):
    print(f"  {f.name}: {f.stat().st_size//1024}KB")

print("\n── Type cards ──")
for f in sorted(CARDS_DEST.iterdir()):
    print(f"  {f.name}: {f.stat().st_size//1024}KB")
