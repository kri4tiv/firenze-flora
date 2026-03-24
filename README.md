# Firenze Flora — New Website

Premium floral & event decor studio, Dubai. Built with Next.js 14, Tailwind CSS, Framer Motion.

**Target:** 90+/100 — replacing firenzeflora.com

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build & Deploy

```bash
npm run build
npm start
```

Deploy: Push to `main` → Vercel auto-deploys.

---

## Project Structure

```
src/
  app/              ← All page routes (Next.js App Router)
  components/
    layout/         ← Nav, Footer
    sections/       ← Hero, ServiceCards, WorkGrid, EnquireCTA
    gallery/        ← LightboxGallery, WeddingCultureCarousel
    forms/          ← EnquireForm (3-step)
    ui/             ← Button, Badge, AnimatedText
  styles/           ← globals.css (design tokens)
  lib/              ← utils (cn helper)
public/
  images/           ← Placeholder shimmer until real media provided
  fonts/            ← Self-hosted WOFF2 (add when ready)
_session/           ← Session logs (never commit sensitive info)
```

## Adding Real Media

1. **Hero video:** Place `hero.mp4` and `hero.webm` in `/public/videos/`
   Then uncomment the `<video>` tag in `src/components/sections/Hero.tsx`

2. **Portfolio images:** Place images in `/public/images/portfolio/`
   Format: `1.jpg`, `2.jpg`... matching the IDs in `WorkGrid.tsx`
   Then switch from picsum to `/images/portfolio/` src

3. **Team photos:** Place in `/public/images/team/`

## Session Continuity

End every session:
```bash
node _session/save-session.js "What you completed"
git add . && git commit -m "wip: [description]"
```

Start next session: read `_session/SESSION.md` then `CLAUDE.md`

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14 (App Router) | Framework |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Animations |
| Embla Carousel | 8 | Wedding culture carousel |
| yet-another-react-lightbox | 3 | Portfolio lightbox |
| React Hook Form + Zod | — | Form validation |

## Design Tokens

| Token | Value |
|---|---|
| `--cream` | `#F5F0E8` |
| `--cream-dark` | `#EDE6D8` |
| `--charcoal` | `#1C1C1A` |
| `--gold` | `#B8963E` |
| `--stone` | `#8C8279` |
| Display font | Cormorant Garamond |
| Body font | DM Sans |
| Accent font | Cormorant SC |

---

## Pages

| Route | Status |
|---|---|
| `/` | ✅ Scaffolded |
| `/services` | ✅ Scaffolded |
| `/services/weddings` | ✅ Scaffolded |
| `/services/events` | ✅ Scaffolded |
| `/services/other-services` | ✅ Scaffolded |
| `/work` | ✅ Scaffolded |
| `/stories` | ✅ Scaffolded |
| `/about` | ✅ Scaffolded |
| `/contact` | ✅ Scaffolded |
| `/enquire` | ✅ Scaffolded |
| `/packages` | ✅ Scaffolded |

---

## To Do (Claude Code)

See `_session/SESSION.md` for current next steps.
