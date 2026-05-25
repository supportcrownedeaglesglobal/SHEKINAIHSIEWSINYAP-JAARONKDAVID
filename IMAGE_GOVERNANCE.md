# IMAGE_GOVERNANCE.md

# Image Replacement & Media Governance Rules

---

## Rule Zero

Never replace images based on vague descriptions like:

* "this image"
* "that photo"
* "left image"
* "second picture"
* "hero photo maybe"
* "the one above"

All image modifications must use:

* exact filename
  and/or
* exact HTML element `id`

---

## Required Workflow

1. **Identify the exact image filename**
   Example: `inside-room-networking-01.jpg`

2. **Identify the exact section**
   Example: `<section id="inside-the-room">`

3. **Identify the exact image element**
   Example: `<img id="inside-room-hero-image">`

4. **Replace ONLY the specified image.**

---

## Preservation Rules

When replacing an image, preserve ALL of the following:

* existing layout
* spacing
* overlays
* aspect ratio behavior
* responsiveness
* section hierarchy
* cinematic styling
* `object-fit` and `object-position` values
* `loading` attribute intent
* `alt` text narrative quality

Do NOT:

* redesign surrounding sections
* modify unrelated CSS
* alter typography
* change page structure
* replace multiple images unless each is explicitly instructed

When uncertain:

* ask for clarification
* show current image reference
* confirm intended replacement target first

---

## Naming Conventions

All production images must follow structured naming.

**Preferred naming pattern:**

```
[event/context]-[description]-[sequence].jpg
```

**Good examples:**

* `hero-global-room-01.jpg`
* `inside-room-networking-01.jpg`
* `editorial-stage-presence-01.jpg`
* `gls2025-group-photo-01.jpg`
* `international-recognition-01.jpg`
* `manila-up-2025-shekinaih-award-portrait.jpg`
* `manila-up-2025-aaron-transformational-leadership-award-portrait.jpg`

**Avoid generic filenames:**

* `IMG_8827.jpg`
* `final-v2.jpg`
* `screenshot-final.png`
* `image1.jpg`
* `photo_2026-05-25_18-52-08.jpg` ← staging only, rename before production placement

---

## HTML Markup Standard

Every important visual section must have:

* unique `section id`
* unique `img id`
* stable, descriptive image path

**Standard pattern:**

```html
<section id="inside-the-room">
  <img
    id="inside-room-hero-image"
    src="images/us-mega-success-2025/inside-room-networking-01.jpg"
    alt="[descriptive alt text — never empty]"
    loading="lazy"
  />
</section>
```

---

## Staging vs Production

| Location | Status | Commit? |
|---|---|---|
| `images/imported/` | Staging — not approved | No |
| `images/manila-up-2025/` | Curated production assets | Yes, when named correctly |
| `images/us-mega-success-2025/` | Curated production assets | Yes, when named correctly |
| Root `images/` (generic `photo_*.jpg`) | Staging — rename before use | No |

---

## Narrative Quality Standard

All image replacement tasks must preserve:

* narrative consistency
* cinematic editorial quality
* the documentary/editorial tone of the section
* the credibility and dignity of Shekinaih Siew Sin Yap and J Aaron K David

Images placed near names or identity copy must reflect:

* professional setting
* authoritative presence
* intentional composition
* appropriate formal context
