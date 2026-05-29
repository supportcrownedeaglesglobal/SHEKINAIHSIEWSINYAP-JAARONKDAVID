# TASKS.md

Task tracking for the Shekinaih Siew Sin Yap & J Aaron K David website.

Format: tasks are grouped by status. Move items between sections as work progresses. Update `CHANGELOG.md` when a task is completed.

---

## Completed

### Repository Setup
- Connected repository to GitHub: `github.com/jjcheng9296/shekinaih-jaaronkdavid`
- Connected Vercel to `main` branch for auto-deployment
- Established `claude/` and `codex/` branch prefixes for AI agent separation
- Added `AGENTS.md` with full AI workflow governance
- Organised imported media into dated folders: `images/imported/` and `videos/imported/`
- Created `README.md`, `PROJECT_RULES.md`, `TASKS.md`

### Testimonial Section
- Restructured from generic star-card layout into editorial credibility archive
- Added: featured witness quote, community testimonies, humanitarian witness statements, international endorsements, recognition ledger
- Removed star-rating pattern entirely

### Awards Section
- Replaced emoji-style cards with formal archive-style recognition cards
- Each card is clickable and opens relevant award image in the lightbox
- Exquisite International Magazine card opens social-event video via video modal

### Co-Founder Name Treatment
- Gold metallic treatment applied to Shekinaih Siew Sin Yap across all identity surfaces
- Silver metallic treatment applied to J Aaron K David across all identity surfaces
- Full uppercase display applied to both names in hero, profile cards, and nav-level identity

### Personal IP Branding
- Visible identity updated from Crowned Eagles Global to `shekinaih-jaaronkdavid.com`
- Applied to: browser title, meta description, nav logo, hero subtitle, about ribbon, footer brand, footer contact, magazine article topbar

### Video Section
- Added editorial press-interview cover image as poster for Night Event video card and modal
- Removed Social Event video card — section now shows single Press Interview card, centered
- Fixed video modal src bug (was passing bare filename, now passes correct `videos/` path)
- Set `preload="none"` on video elements to prevent browser renderer freeze

### About Section
- Removed trust bar ticker (UNPKFC, World Book of Records, etc.)
- Updated eyebrow label to "The Founders"
- Updated headline to "Faith That Moves Nations"
- Added stats strip: 5+ International Awards, 3 Nations Recognised, 6yr Active Ministry, Lives Transformed
- Rewrote body copy to name Shekinaih and Aaron as primary subjects from the first sentence

### QR Code Section
- Downloaded and stored QR PNG files locally in `images/`
- Updated all four QR card images to use local PNG files (not external API)
- Updated all three "Connect Now" buttons to link to `https://t.me/HEAVEN_BROADCAST`

---

## Pending

### Missing Governance Files
- Create `BRAND.md` in this repository (currently only in the separate Astro project folder)
- Create `CLAUDE.md` in this repository (same situation)

### Mobile Audit
- Audit all sections at 375px and 390px viewport widths
- Verify hero text sizing on small screens
- Verify stats strip in About section wraps cleanly on mobile
- Verify QR grid collapses correctly on mobile
- Verify awards grid on mobile
- Verify testimonial archive cards on mobile

### Accessibility
- Audit all images for descriptive `alt` text
- Add `aria-label` to icon-only interactive elements
- Test full keyboard navigation through the lightbox
- Test full keyboard navigation through the video modal
- Verify color contrast ratios on muted text elements against background

### SEO and Metadata
- Add `og:image` Open Graph image tag
- Add `og:title` and `og:description` meta tags
- Add `twitter:card` and `twitter:image` tags
- Add canonical URL tag
- Add `<meta name="robots">` tag
- Confirm page title and meta description reflect personal IP identity

### Imported Media Review
Owner decision required before any of these are placed in HTML:
- `images/imported/2026-03-29/` — 5 photos (March 2026 batch, filenames generic)
- `images/imported/2026-05-24/` — 2 photos (May 2026 batch)
- `videos/imported/2026-05-24/` — 3 videos (May 2026 batch)

### Humanitarian Section Review
- Review `#humanitarian` section for editorial quality and tone
- Confirm section copy meets diplomatic-tier positioning standard
- Confirm section does not use generic charity or ministry language

### QR Code Validation
- Physically scan all 4 QR codes with a mobile device to verify destinations
- Confirm QR PNG resolution is suitable for print use if needed

---

## Experimental Ideas

Not approved for development. Listed for future consideration only.

- Timeline section: horizontal scroll or vertical milestone strip showing key recognition dates
- Ambient background motion: very low-opacity, no parallax, no distraction
- Inline PDF viewer for magazine article (replaces external link or download)
- Dedicated humanitarian works sub-page with richer narrative
- Audio ministry excerpt: optional, accessibility-friendly, opt-in only

---

## Future Roadmap

These are directional goals, not approved tasks. Each requires a separate decision before any work begins.

- Register and configure `shekinaih-jaaronkdavid.com` as the live domain
- Vercel custom domain configuration with HTTPS and redirect rules
- Consider migrating to Astro for component-based structure — requires full separate project planning
- Contact or inquiry form with a privacy-respecting backend
- Multilingual support for key audiences — requires full content planning before any technical work
- Press kit page or downloadable media pack for journalists and diplomatic contacts
