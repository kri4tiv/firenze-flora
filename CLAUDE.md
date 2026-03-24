# Firenze Flora — Claude Code Project Brain

> **Read this file completely before touching any code.**
> This is the single source of truth. Update `_session/SESSION.md` when you end a session.

---

## Project Identity

- **Client:** Firenze Flora — premium floral & event decor studio, Dubai
- **Goal:** Remake firenzeflora.com from -50/100 to 90+/100
- **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Vercel
- **Repo:** GitHub → Vercel auto-deploy
- **Domain:** TBD (placeholder domain on vercel.app for now)
- **Current site (reference only, do not copy):** https://firenzeflora.com

---

## Design System

### Palette (CSS variables in globals.css)
```
--cream: #F5F0E8
--cream-dark: #EDE6D8
--charcoal: #1C1C1A
--charcoal-light: #2E2E2C
--gold: #B8963E
--gold-light: #D4B062
--stone: #8C8279
--white: #FDFCFA
```

### Typography
- **Display / H1–H2:** Cormorant Garamond (serif, editorial luxury)
- **Body / UI:** DM Sans (geometric sans, clean)
- **Accent / labels:** Cormorant SC (small caps)
- Self-host all fonts as WOFF2 in /public/fonts/

### Motion Rules (Framer Motion baseline, GSAP only for 1 hero scroll sequence)
- Hover transitions: 150–220ms
- Element enters: 250–450ms  
- Page transitions: 450–700ms
- Always check `prefers-reduced-motion` — fallback to opacity-only
- NO heavy animations below the fold unless user has scrolled near them

### Image Strategy
- Format: AVIF + WebP + JPG fallback (use Next.js `<Image>`)
- Hero poster: 1920×1080 (16:9)
- Portfolio landscape: 1800×1200 (3:2)
- Portrait: 1600×2000 (4:5)
- All images lazy-loaded below fold
- Placeholders: use gradient shimmer (cream → cream-dark) until real media arrives

---

## Information Architecture (Final Decisions)

### Header Nav (lean, premium)
```
Logo | Services | Work | Stories | About | Contact | [Enquire →]
```

### Routes
| Route | Purpose |
|---|---|
| `/` | Hero video + brand statement + service preview + work teaser + enquire CTA |
| `/services` | Hub: Weddings card · Events card · Other Services card · Packages link |
| `/services/weddings` | Wedding decor detail + culture carousel + FAQ + CTA |
| `/services/events` | Private + Corporate + Other Decorations sections + CTA |
| `/services/other-services` | Housewarming, other niche services |
| `/work` | Curated portfolio grid (30–40 images MVP), lightbox |
| `/stories` | 6–12 editorial posts (replace /blog) |
| `/about` | Brand story + team |
| `/contact` | Address, map, phone, email |
| `/enquire` | Multi-step form (3 steps) + WhatsApp |
| `/packages` | Package ranges (premium tone, no cheap pricing) |

### De-emphasized (routable but NOT in nav)
- Church decor, Kosha decor, Winter Wonderland → footer "Legacy Services" link only

---

## SEO Rules
- Every page: unique `<title>` and `<meta description>`
- "Dubai" appears in title + H1 on all service pages
- People-first copy — no keyword-stuffing
- Descriptive filenames for all images
- `/blog` → 301 redirect to `/stories`

---

## Component Architecture

```
src/
  app/
    layout.tsx          ← root layout (fonts, globals, nav, footer)
    page.tsx            ← homepage
    services/
      page.tsx          ← services hub
      weddings/page.tsx
      events/page.tsx
      other-services/page.tsx
    work/page.tsx
    stories/
      page.tsx
      [slug]/page.tsx
    about/page.tsx
    contact/page.tsx
    enquire/page.tsx
    packages/page.tsx
  components/
    layout/
      Nav.tsx           ← sticky header, mobile hamburger
      Footer.tsx        ← links, WhatsApp, address, legacy section
    ui/
      Button.tsx        ← variants: primary, ghost, whatsapp
      Badge.tsx
      AnimatedText.tsx  ← staggered word/char reveal
    sections/
      Hero.tsx          ← video bg hero
      ServiceCards.tsx
      WorkGrid.tsx      ← masonry/grid portfolio preview
      TestimonialStrip.tsx
      EnquireCTA.tsx    ← sticky bottom CTA strip
    gallery/
      LightboxGallery.tsx ← zoom + keyboard nav
      WeddingCultureCarousel.tsx ← horizontal pick-scroll
    forms/
      EnquireForm.tsx   ← 3-step minimal form
```

---

## Placeholder Media Strategy

Until real media is provided:
- **Hero video:** Use a CSS-animated gradient (`cream → charcoal`) with a pulsing floral SVG overlay
- **Portfolio images:** Use `picsum.photos` with consistent seeds for stable placeholders
- **Team photos:** Gray placeholder boxes

When real media is provided, swap by replacing the `src` prop only — no structural changes needed.

---

## Token / Cost Optimization (Claude Code rules)

From the everything-claude-code setup:
- Default model: **sonnet** for all coding tasks
- Switch to **opus** only for: architecture decisions, complex debugging
- Use `/compact` at: after finishing a page, after finishing a component group
- Use `/clear` between unrelated tasks
- Keep MCP servers minimal — only enable what's needed

## Key Rules for This Project
1. **Never** commit placeholder images to git — add `public/images/**/*.jpg` to .gitignore, keep only SVG/WebP placeholders
2. **Always** use `next/image` — never raw `<img>` tags
3. **Always** test mobile (375px) before marking a component done
4. **Always** update `_session/SESSION.md` when ending a session

---

## Performance Targets
- LCP ≤ 2.5s
- CLS ≤ 0.1  
- INP: Good
- Lighthouse score: 90+ across all categories

---

## WhatsApp Integration
- Number: +971 [TBD — owner to provide]
- CTA text: "Chat on WhatsApp"
- Link format: `https://wa.me/971XXXXXXXXX?text=Hi%20Firenze%20Flora...`

---

## Session Continuity
- End every session by running: `node _session/save-session.js`
- This writes `_session/SESSION.md` with current progress
- Start next session by reading `_session/SESSION.md` first
