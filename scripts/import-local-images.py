#!/usr/bin/env python3
"""
Firenze Flora — Local Image Import Script
Converts real photography from ~/Desktop/firenze/ to WebP
and copies them into public/images/.

Usage (from project root):
    python3 scripts/import-local-images.py
"""
import sys
import shutil
from pathlib import Path
from io import BytesIO

try:
    from PIL import Image
except ImportError:
    print("Missing: pip3 install Pillow"); sys.exit(1)

SOURCE   = Path.home() / "Desktop" / "firenze"
PROJECT  = Path(__file__).parent.parent
DEST     = PROJECT / "public" / "images"
QUALITY  = 85
BG       = (253, 252, 250)   # #FDFCFA — for RGBA compositing
SKIP_EXT = {'.mp4', '.mov', '.avi', '.DS_Store', '.db', '.txt'}

# Source folder → destination subfolder under public/images/portfolio/
FOLDER_MAP = {
    "arabic wedding pic": "arabic-wedding",
    "centrepiece flower": "centrepiece",
    "FlowerArch":         "flower-arch",
    "Indian wedding HD":  "indian-wedding",
    "Iranian Wedding":    "iranian-wedding",
    "Reception decor":    "reception-decor",
}


def to_webp(src: Path, dest: Path) -> bool:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists():
        print(f"  · exists   {dest.relative_to(PROJECT)}")
        return True
    try:
        img = Image.open(src)
        if img.mode in ("RGBA", "LA", "PA"):
            if img.mode == "PA":
                img = img.convert("RGBA")
            bg = Image.new("RGB", img.size, BG)
            bg.paste(img, mask=img.split()[-1])
            img = bg
        elif img.mode != "RGB":
            img = img.convert("RGB")
        img.save(dest, "WEBP", quality=QUALITY, method=6)
        print(f"  ✓ {dest.relative_to(PROJECT)}  ({dest.stat().st_size // 1024} KB)")
        return True
    except Exception as e:
        print(f"  ✗ {src.name}: {e}")
        return False


def copy_logo():
    # Logo has a space in the name
    logo_src  = SOURCE / "firenze logo.png"
    logo_dest = DEST / "brand" / "logo.png"
    logo_dest.parent.mkdir(parents=True, exist_ok=True)
    if logo_dest.exists():
        print(f"✓ Logo already at {logo_dest.relative_to(PROJECT)}")
        return
    if not logo_src.exists():
        print(f"⚠  Logo not found: {logo_src}")
        return
    shutil.copy2(logo_src, logo_dest)
    print(f"✓ Logo → {logo_dest.relative_to(PROJECT)}")


def process_folder(src_name: str, dest_name: str) -> tuple[int, int]:
    src_dir  = SOURCE / src_name
    dest_dir = DEST / "portfolio" / dest_name
    if not src_dir.exists():
        print(f"\n⚠  Not found: {src_dir}")
        return 0, 0

    # Only direct image files — skip subdirectories like Ads/
    files = sorted([
        f for f in src_dir.iterdir()
        if f.is_file() and f.suffix.lower() not in SKIP_EXT and not f.name.startswith('.')
    ])
    print(f"\n[{src_name}] → portfolio/{dest_name}/  ({len(files)} images)")

    ok = fail = 0
    for i, f in enumerate(files, 1):
        dest = dest_dir / f"{dest_name}-{i:02d}.webp"
        if to_webp(f, dest): ok += 1
        else: fail += 1
    return ok, fail


def main():
    print("Firenze Flora — Local Image Import")
    print("=" * 50)

    copy_logo()

    total_ok = total_fail = 0
    for src_name, dest_name in FOLDER_MAP.items():
        ok, fail = process_folder(src_name, dest_name)
        total_ok   += ok
        total_fail += fail

    print(f"\n{'=' * 50}")
    print(f"Images: {total_ok} converted, {total_fail} failed")
    print(f"Logo:   public/images/brand/logo.png")
    print(f"\n✅  Done. Update WorkGrid.tsx with the new paths.")


if __name__ == "__main__":
    main()
