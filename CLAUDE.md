# CLAUDE.md — Project Intelligence

## Project snapshot

| Key | Value |
|---|---|
| **Site** | Shekinaih & Aaron — personal brand |
| **Domain** | shekinaih-aaron.com |
| **Owners** | Shekinaih Siew Sin Yap & J Aaron K David |
| **Organisation** | Crowned Eagles Global, Singapore |
| **Stack** | Astro · Tailwind CSS · @astrojs/sitemap · @astrojs/vercel |
| **Deploy** | Vercel (static output) |
| **Repo slug** | shekinaih-aaron |

---

## ⚠️ Mandatory: read BRAND.md first

**Before making ANY visual decision — colours, fonts, spacing, motion, components — read `BRAND.md` in full.**
Do not rely on memory. Do not approximate values. Use only what is defined there.

---

## ★ Name Styling Rules — ABSOLUTE, NO EXCEPTIONS

| Person | Case | Colour | Class |
|---|---|---|---|
| **SHEKINAIH SIEW SIN YAP** | FULL CAPS always | Gold `#E8B86D` with soft glow | `.name-s` |
| **J AARON K DAVID** | FULL CAPS always | Silver `#B8C4D8` | `.name-a` |

- Both names must **always** appear in FULL UPPERCASE.  
- `SHEKINAIH SIEW SIN YAP` → **gold** (`#E8B86D`), never white, never muted.  
- `J AARON K DAVID` → **silver** (`#B8C4D8`), never gold, never white.  
- When both names appear together the ampersand `&` is in `rgba(255,255,255,.2)`.  
- These rules apply everywhere: headings, captions, overlays, running copy, CTAs.  
- Never abbreviate either name. Never use first name only.

---

## Non-negotiables

These rules are absolute. No exceptions, no matter how "standard" or "clean" the alternative seems.

### Colour
- ❌ Never invent colours. Use only the palette in `BRAND.md §2`.
- ❌ Never apply `linear-gradient` backgrounds to cards or section backgrounds — only to CTAs and name treatments.
- ❌ Never use purple, violet, teal, or any colour not in the palette.

### Typography
- ❌ Never use generic system fonts (Inter, -apple-system, Arial, sans-serif) when a brand face is specified.
- ❌ Never use uppercase for section headlines or paragraph text — uppercase is reserved for eyebrow labels, buttons, and nav items only.
- ❌ Never invent font sizes — use the scale in `BRAND.md §3`.

### Borders & shadows
- ❌ Never use `border-left` accent strips as a decorative device (the pull-quote `border-left` is the only sanctioned exception).
- ❌ Never apply `backdrop-filter: blur()` as a default card style — it is reserved for the sticky nav and floating overlays only.
- ❌ Never apply purple-glow `box-shadow` to non-CTA elements.

### Motion
- ❌ Never use `transform: translateY()` for hover without the paired `box-shadow` defined in `BRAND.md §4`.
- ❌ Never add CSS transitions to elements where no interaction change is needed.

### Content
- ❌ Never put emojis in body copy or headings. Emojis are allowed only in badge labels (e.g. "⭐ Featured Testimonial") and only when they already exist in the design.
- ❌ Never use placeholder lorem ipsum in production components — leave a `<!-- TODO: copy -->` comment instead.

---

## Architecture notes

```
src/
  layouts/
    Base.astro      ← html shell, fonts, noise overlay, nav, footer
    Section.astro   ← section wrapper with max-width + padding
  components/
    Nav.astro
    Hero.astro
    About.astro
    Profiles.astro
    Awards.astro
    Testimonials.astro
    QRLinks.astro
    Footer.astro
  pages/
    index.astro
    magazine.astro  ← formatted magazine article sub-page
  styles/
    global.css      ← :root tokens, reset, base classes
    animations.css  ← fade-up / IntersectionObserver utilities
public/
  fonts/            ← if self-hosting (optional)
  images/
BRAND.md
CLAUDE.md
```

---

## QR link destinations (real, decoded)

| Card | Destination |
|---|---|
| Watch Breakthrough Testimonies | https://www.crownedeaglesglobal.org/2026-broadcast-from-heaven |
| Danielyn & Florence's Breakthroughs | https://www.crownedeaglesglobal.org/florence-s-testimony |
| Join Heaven Broadcast | https://t.me/HEAVEN_BROADCAST |
| Join Billionaire Destiny Group | https://chat.whatsapp.com/GYFfVRVMRjOKpuyN8IjQEk?mode=ac_t |

---

## Featured testimonial

- **JT Foxx** — World's #1 Business Coach & Investor
- YouTube embed: `https://www.youtube.com/embed/3liK5Nyp1OE?rel=0&modestbranding=1`

---

## Deployment checklist

- [ ] `npm run build` passes with zero errors
- [ ] Lighthouse mobile score ≥ 90 on Performance, Accessibility, SEO
- [ ] `sitemap.xml` generated in `dist/`
- [ ] All four QR card links point to correct destinations
- [ ] `© 2026 Crowned Eagles Global` in footer
- [ ] `og:image`, `og:title`, `og:description` meta tags present
- [ ] Domain `shekinaih-aaron.com` pointed to Vercel via CNAME/A records
