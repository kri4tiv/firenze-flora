#!/usr/bin/env python3
import io, sys
from pathlib import Path
from PIL import Image

SOURCE = Path("/Users/uchiha7/Desktop/firenze new")
DEST = Path("public/images/team")
DEST.mkdir(parents=True, exist_ok=True)

names = ["laxman", "ranbir", "sanjay", "gulrukh", "monila"]

for f in SOURCE.iterdir():
    name_lower = f.stem.lower().replace(" ", "-").replace("_", "-")
    if "pfp" not in name_lower:
        continue
    if f.suffix.lower() not in (".jpg", ".jpeg", ".png", ".webp", ".heic"):
        continue

    matched = None
    for name in names:
        if name in name_lower:
            matched = name
            break

    if not matched:
        print(f"No match for: {f.name}")
        continue

    dest_file = DEST / f"{matched}.webp"
    print(f"Processing: {f.name} -> {dest_file.name}")

    try:
        img = Image.open(f)
        if img.mode != "RGB":
            bg = Image.new("RGB", img.size, (15, 15, 15))
            if img.mode == "P":
                img = img.convert("RGBA")
            if img.mode in ("RGBA", "LA"):
                bg.paste(img, mask=img.split()[-1])
            else:
                bg.paste(img)
            img = bg

        w, h = img.size
        size = min(w, h)
        left = (w - size) // 2
        top = (h - size) // 2
        img = img.crop((left, top, left + size, top + size))
        img = img.resize((400, 400), Image.LANCZOS)

        buf = io.BytesIO()
        img.save(buf, "WEBP", quality=85, method=6)
        dest_file.write_bytes(buf.getvalue())
        print(f"  Saved: {dest_file} ({buf.tell() // 1024}KB)")

    except Exception as e:
        print(f"  ERROR: {e}")

print("\nTeam folder contents:")
for f in sorted(DEST.iterdir()):
    print(f"  {f.name}: {f.stat().st_size // 1024}KB")
