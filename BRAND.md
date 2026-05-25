# BRAND.md — Shekinaih & Aaron Personal Brand
> ⚠️ Every Claude session MUST read this file before making any visual decision.

---

## 1. Identity

| Field | Value |
|---|---|
| **Site name** | Shekinaih & Aaron |
| **Full names** | Shekinaih Siew Sin Yap & J Aaron K David |
| **Domain** | shekinaih-aaron.com |
| **Tagline** | *Faith. Legacy. Impact.* |
| **Category** | Personal brand — faith leaders, speakers, humanitarian ambassadors |
| **Origin** | Singapore |
| **Organisation** | Crowned Eagles Global (www.crownedeaglesglobal.org) |

---

## 2. Colour Palette

```
--ink:     #08091A   /* page background — near-black navy */
--ink2:    #12152B   /* section alt background */
--gold:    #C8923A   /* primary accent */
--gold2:   #E8B86D   /* gold highlight / shimmer */
--cream:   #F6F1E9   /* light surface */
--warm:    #EDE5D8   /* warm off-white */
--white:   #FFFFFF
--muted:   #8A8EA8   /* subdued text */
--border:  rgba(255,255,255,0.08)
```

### Metallic name gradients
```css
/* Shekinaih — gold metallic */
.name-gold {
  background: linear-gradient(135deg,#E8C96A 0%,#C8923A 28%,#FFE08A 55%,#D4790A 75%,#F0C060 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* J Aaron — silver metallic */
.name-silver {
  background: linear-gradient(135deg,#C8C8C8 0%,#EFEFEF 30%,#929292 55%,#D8D8D8 78%,#ABABAB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 3. Typography

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display / Hero | Cormorant Garamond | 600–700 | `clamp(44px,6.5vw,92px)` at hero size |
| Section titles | Cormorant Garamond | 600 | `clamp(34px,4.8vw,66px)` |
| Labels / Eyebrows | Cinzel | 500 | `10px`, `letter-spacing:4px`, uppercase |
| Buttons / Nav | Cinzel | 600 | `11px`, `letter-spacing:2px`, uppercase |
| Body copy | DM Sans | 300–400 | `clamp(14px,1.1vw,16px)`, `line-height:1.9` |
| Pull quotes / italic | Playfair Display | 400 italic | borders with gold left rule |

### Google Fonts import string
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Cinzel:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,700;1,400;1,600&display=swap" rel="stylesheet"/>
```

---

## 4. Motion & Effects

- **Scroll reveal:** `IntersectionObserver` fade-up with `translateY(24px)→0`, `opacity:0→1`, `duration:0.7s ease-out`
- **Delay utilities:** `.d1`=0.1s, `.d2`=0.2s, `.d3`=0.3s, `.d4`=0.4s
- **Hover on cards:** `translateY(-6px)` + `box-shadow:0 24px 80px rgba(0,0,0,0.4)` — always paired, never translateY alone
- **Noise texture overlay:** SVG fractalNoise at `opacity:0.4` on `body::before`

---

## 5. Component Patterns

### Eyebrow label
```html
<p class="eyebrow">Section Label</p>
<!-- font: Cinzel 10px / letter-spacing:4px / color:var(--gold) -->
```

### Gold CTA button
```html
<a class="btn-primary">Call To Action</a>
<!-- font: Cinzel 11px / bg: gradient(--gold,--gold2) / color:--ink / radius:100px -->
```

### Ghost button
```html
<a class="btn-ghost">Secondary Action</a>
<!-- border:1px solid rgba(255,255,255,0.18) / color:rgba(255,255,255,0.8) -->
```

### Pull quote
```html
<blockquote class="about-quote">
  <!-- Playfair Display italic / border-left:3px solid var(--gold) / padding-left:24px -->
</blockquote>
```

### Tag pill
```html
<span class="tag">Label</span>
<!-- border:1px solid rgba(200,146,58,0.3) / color:var(--gold2) / bg:rgba(200,146,58,0.06) -->
```

---

## 6. Layout

- Max content width: `1200px`
- Section padding: `110px 0` (desktop) / `72px 0` (mobile ≤768px)
- Side padding: `clamp(24px,5vw,60px)`
- Breakpoints: `768px` (stack grids), `900px` (collapse nav links)

---

## 7. Voice & Tone

- **Elevated** — editorial, not corporate
- **Faith-forward** — language that honours their spiritual identity without being insular
- **Precise** — no filler phrases, no hype adjectives
- **Warm authority** — speaks to hearts as much as minds
