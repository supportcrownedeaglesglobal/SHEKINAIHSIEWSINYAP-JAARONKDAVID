# AGENTS.md

# AI Governance & Editing Rules

This repository is a premium editorial-style personal branding and international credibility website for:

* Shekinaih Siew Sin Yap
* J Aaron K David

The visual and narrative direction is:

* cinematic
* documentary/editorial
* premium
* internationally presentable
* emotionally controlled
* authoritative
* elegant
* high-trust
* long-term archival quality

This is NOT:

* an influencer website
* an event promotion site
* a flashy luxury flex page
* a startup landing page
* a celebrity fan page
* a crypto-style marketing page

---

# Core Narrative Direction

The website should communicate:

* international visibility
* leadership presence
* relationship network
* public-facing credibility
* global exposure
* strategic positioning
* cross-border recognition
* rooms of influence
* trusted leadership environments

Mega Success 2025 and similar events are context only.
They are NOT the primary brand.

The focus is:

* credibility
* positioning
* public image
* authority
* documentary-style storytelling

---

# Editing Workflow Rules

Before editing:

1. Audit existing structure first.
2. Explain understanding first.
3. Identify exact files affected.
4. Identify exact sections affected.
5. Minimize scope creep.
6. Preserve established design language.

Never:

* rewrite the entire website unnecessarily
* redesign unrelated sections
* modify production structure casually
* change visual identity without instruction
* replace global typography systems
* change global spacing systems recklessly

---

# Branch Rules

Never work directly on:
main

Always create feature branches first.

Examples:

* claude/editorial-polish
* claude/video-cinematic-update
* codex/archive-restructure
* claude/mobile-readability-pass

Never auto-merge into main.
Never auto-push production deployments.

---

# Git Safety Rules

Never run automatically:

* git push
* git commit
* git merge
* git rebase
* git reset --hard

unless explicitly instructed.

Always summarize changes before commit.

---

# Design System Rules

Maintain:

* dark navy cinematic foundation
* premium gold accents
* editorial spacing rhythm
* restrained luxury styling
* elegant typography hierarchy
* immersive but controlled motion

Avoid:

* excessive animation
* flashy transitions
* cheap influencer aesthetics
* oversaturated gold
* social-media-style layouts
* aggressive marketing language

---

## Title & Heading Color Rules — MANDATORY

All major titles, section headings, achievement award names, and headline elements across ALL pages must use:

* **Color:** `#E8B86D` (brand gold — `var(--gold2)`)
* **Glow:** `filter:drop-shadow(0 2px 18px rgba(232,184,109,.25))`

This applies to every page in the project including but not limited to:

* `index.html` — all `.display-title`, `.award-name`, `.cert-name`, `.video-title`, `.testi-channel-title`
* `events.html` — `.hero-title`, `.featured-name`, `.card-name`, `.upcoming-title`
* `us-megasuccess2025.html` — chapter titles, section display headings
* `magazine-article.html` — article body headings
* `hollywood-walk-of-fame-2025.html`, `manila-up-gala.html` — all section h2/h3 titles

**Do NOT leave major headings as white (`#fff`) or muted grey.**

When adding any new section, page, or component:

1. Apply `color:#E8B86D` to all `h1`, `h2`, `h3` display-level headings.
2. Add subtle glow: `filter:drop-shadow(0 2px 18px rgba(232,184,109,.25))`
3. Exception: body-copy inline `<strong>` highlights may use `rgba(255,255,255,.88)` for contrast.
4. Exception: SHEKINAIH SIEW SIN YAP gold and J AARON K DAVID silver name rules remain as defined above — do not override name colors.

Motion should feel:

* subtle
* cinematic
* calm
* premium
* atmospheric

---

# Media Rules

Large raw media files must NOT be committed into GitHub.

Large videos should be:

* externally hosted
  or
* optimized before production use

Raw Telegram exports belong only in staging folders.

Production repositories should contain:

* curated
* optimized
* intentional assets only

---

# Video Integration Rules

Videos should:

* support narrative flow
* feel cinematic
* enhance credibility
* improve immersion
* strengthen documentary realism

Videos should NOT:

* autoplay loudly
* dominate every section
* feel like TikTok/Reels
* feel like event hype content

---

# Code Rules

Prefer:

* semantic HTML
* lightweight CSS
* minimal JavaScript
* responsive-first structure
* accessibility improvements
* maintainable structure

Avoid:

* unnecessary frameworks
* unnecessary dependencies
* bloated animation libraries
* overengineering

---

# Response Rules for AI Agents

Before editing:

* explain intended approach
* explain risks
* explain files affected

After editing:

* summarize changes
* summarize visual impact
* summarize technical impact
* explain how credibility/storytelling improved

Never claim tasks are completed without verification.

When uncertain:

* ask
* preserve
* avoid destructive changes

Stability and narrative consistency are more important than aggressive redesign.
SHEKINAIH SIEW SIN YAP (golden code) and J AARON K DAVID (silver fonts) always

---

## Required Reading Before Editing

Before making changes, future AI agents must read:

- `BRAND.md`
- `CLAUDE.md`
- `PROJECT_RULES.md`
- `IMAGE_GOVERNANCE.md`
- `CHANGELOG.md`
- this `AGENTS.md`

If any of these files are missing, state that clearly before editing and continue with the most conservative interpretation of the existing website.

---

## Name Styling Rules — ABSOLUTE, NO EXCEPTIONS

| Person | Case | Colour |
|---|---|---|
| **SHEKINAIH SIEW SIN YAP** | FULL CAPS always | Gold `#E8B86D` with soft glow |
| **J AARON K DAVID** | FULL CAPS always | Silver `#B8C4D8` |

- Both names must **always** appear in FULL UPPERCASE.
- `SHEKINAIH SIEW SIN YAP` → **gold** (`#E8B86D`), never white, never muted.
- `J AARON K DAVID` → **silver** (`#B8C4D8`), never gold, never white.
- When both names appear together the ampersand `&` is in `rgba(255,255,255,.2)`.
- These rules apply everywhere: headings, captions, overlays, running copy, CTAs.
- Never abbreviate either name. Never use first name only.

---

## Name Hierarchy & Editorial Subject Rule — ABSOLUTE, NO EXCEPTIONS

**SHEKINAIH SIEW SIN YAP is the primary subject of the site and ALWAYS takes first position.**

Ordering rules (apply to every page, every section, every caption, every line):

1. **SHEKINAIH SIEW SIN YAP appears FIRST** whenever both names are written — in headings, body copy, photo captions, alt text, meta descriptions, sponsor lines, lower-thirds, and metadata.
2. **J AARON K DAVID appears SECOND**, never before SHEKINAIH SIEW SIN YAP.
3. Exceptions are not permitted, even where the existing visual flow (e.g. left-to-right photo positioning) would suggest otherwise. The text order must remain SHEKINAIH first.

Editorial framing rules:

- All write-ups frame **SHEKINAIH SIEW SIN YAP as the lead protagonist**. J AARON K DAVID is the second-named co-subject, never the lead.
- Every paragraph about an encounter, event, recognition, or relationship must reinforce SHEKINAIH SIEW SIN YAP's positioning, credibility, and stature first.
- **Other guests, celebrities, dignitaries, and figures appear only to establish the calibre of the circles SHEKINAIH SIEW SIN YAP and J AARON K DAVID are received within** — they are credentials of association, not subjects of the page.
- Never let the page tilt into being "about" the celebrity, host, or honoree being met. The page is always about SHEKINAIH SIEW SIN YAP and J AARON K DAVID.
- Body text grammar should keep SHEKINAIH SIEW SIN YAP (and AARON) as the grammatical subjects of sentences whenever possible.

---

## Image Selection & Cropping Rules — ABSOLUTE, NO EXCEPTIONS

**Never use an image — source file or rendered — that crops a subject's head, face, or body.**

This rule applies to every image of SHEKINAIH SIEW SIN YAP, J AARON K DAVID, their guests, dignitaries, ministers, family, or anyone else appearing on this site.

### Mandatory pre-flight check before any image is placed

Before referencing any new `<img src="…">` in HTML, the agent MUST:

1. **Open the source file and inspect it visually** (e.g. via `Read` on the image path).
2. **Confirm the subject's full head and full body silhouette are present** within the image frame. Tops of heads must not be sliced off. Faces must not be partially out of frame. Feet/legs must not be cut except where a posed mid-thigh-up portrait was the photographer's deliberate intent.
3. **If the source file is itself cropped at the top, bottom, or sides**, it is disqualified — pick a different file from the same shoot folder. Never attempt to "rescue" a cropped source via CSS `object-fit` or `object-position`; CSS cannot uncrop pixels that were never captured.
4. **If no full-body / full-face alternative exists in the folder**, ask the user before proceeding rather than silently using a cropped image.

### CSS rules that follow from this

- `object-fit: cover` is **forbidden** on any image of a person. Use `width:100%; height:auto` and a masonry/natural-aspect layout instead.
- Aspect-ratio constraints (`aspect-ratio: 4/3` etc.) on portrait or full-body photos are **forbidden** unless paired with `object-fit: contain` and a neutral letterbox.
- Fixed-height image wrappers with `overflow:hidden` around portraits are **forbidden**.

### Why this matters

These photographs document the subjects' presence at significant international events. Cropping a head off a red-carpet photograph diminishes the dignity of the recognition and the subject. This is not a stylistic preference — it is a hard rule.

---

## Visual-First Storytelling — Reduce Text Walls

**Where a section is reaching three or more paragraphs of body copy, replace some of that text with a visual device.**

Preferred substitutes:

- **Photo strip** — three to six related images with a single one-sentence caption beneath, rather than three paragraphs of explanation
- **Stat callouts** — a quantity + descriptor pair (e.g. *"5 Nations · 30+ Years · 10+ Recognitions"*) where the prose was repeating numbers
- **Pull-quote** — a single italic line from the subject or a third-party recognition, set large, replacing a long paragraph of summary
- **Editorial lede** — one italic sentence at the top of the section that captures the entire point of what follows
- **Infographic / GIF** — when a concept benefits from motion or diagrammatic explanation, use the **HyperFrames plugin** (`/plugin install hyperframes@claude-plugins-official`) to generate a composition rather than describing it in text

Rules of thumb:

- A category section should rarely exceed **two short paragraphs** of body prose.
- A keyword band (Cinzel uppercase, gold) is preferred over a sentence enumerating the same themes.
- If you find yourself listing four or more nouns in a sentence, ask whether a photo strip or a keyword band would carry the meaning more elegantly.

---

## Handover Notes For Future Agents

This project rewards restraint. When in doubt, preserve the existing editorial identity, slow the interaction down, and make the work feel honorable rather than commercial.

The goal is not to make the site louder. The goal is to make the recognition, testimony, humanitarian service, and spiritual calling feel more legible, credible, and dignified.

**When in any doubt about an image: open it, look at it, and choose a better one. Never use an image that crops a person.**
