# Snaarplock — Design Guide

> Design system and visual direction for the Snaarplock homepage.
> Light mode. Clean but lively. Security product with personality.
> Reference this alongside `content.md` when building.

---

## Brand Identity

**Product name:** Snaarplock
**Category:** Password manager / digital vault
**Tone:** Confident, clear, trustworthy — but not corporate or cold.
  Think: "the smart friend who works in security" not "enterprise compliance software."
**Mode:** Light mode only
**Vibe:** Crisp whites, bold type, breathing room, strategic pops of brand color.
  Lively but never chaotic. Structured but never boring.

---

## Color System

### Primary Brand Color
```
Brand Blue:   #244FFC
```

### Full Palette

```
/* Backgrounds */
--color-bg-base:        #FFFFFF       /* Page background */
--color-bg-soft:        #F4F6FF       /* Section alternates, subtle fills */
--color-bg-muted:       #EEF1FD       /* Cards on white, input fills */
--color-bg-invert:      #0D1333       /* Dark sections (footer, contrast CTA) */

/* Brand */
--color-brand:          #244FFC       /* Primary actions, accents, highlights */
--color-brand-hover:    #1A3FE0       /* Hover state for brand elements */
--color-brand-light:    #E8EDFF       /* Brand tint backgrounds */
--color-brand-mid:      #7B9AFD       /* Lighter brand for decorative use */

/* Text */
--color-text-primary:   #0D1333       /* Headlines, strong body */
--color-text-secondary: #4A5273       /* Body copy, descriptions */
--color-text-muted:     #8B93B3       /* Captions, placeholders, metadata */
--color-text-invert:    #FFFFFF       /* Text on dark backgrounds */

/* Borders */
--color-border:         #E2E6F3       /* Default borders */
--color-border-strong:  #C8CEEA       /* Emphasis borders */

/* Semantic */
--color-success:        #12B76A       /* Positive states, check marks */
--color-success-light:  #ECFDF5       /* Success backgrounds */
--color-danger:         #F04438       /* Errors, warnings, "not included" marks */
--color-danger-light:   #FEF3F2       /* Danger backgrounds */
--color-gold:           #F79009       /* Stars, highlights, "pro" badges */
--color-gold-light:     #FFFAEB       /* Gold tint backgrounds */
```

---

## Typography

### Font Stack

**Primary (all UI):** [Geist](https://vercel.com/font) — clean, modern, geometric sans-serif with personality.
  Fallback: `'DM Sans', 'Inter', system-ui, sans-serif`

**Accent / Editorial (headlines only — use sparingly):** [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) — italic only, for the "em" styled words in headlines.
  Fallback: `Georgia, serif`

> **Why Geist?** It has the crispness of Inter but with more distinctive letterforms — wider apertures, slightly quirky terminal shapes — that prevent the "generic SaaS" look. It's especially strong at large display sizes and reads beautifully at small UI sizes.

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap" rel="stylesheet">
```
*(Swap for Geist via npm/self-host, or use DM Sans as web fallback)*

### Type Scale

```
/* Display */
--text-display-xl:   72px / line-height 1.06 / weight 500 / letter-spacing -2.5px
--text-display-lg:   56px / line-height 1.08 / weight 500 / letter-spacing -2px
--text-display-md:   44px / line-height 1.1  / weight 500 / letter-spacing -1.5px
--text-display-sm:   34px / line-height 1.15 / weight 500 / letter-spacing -1px

/* Body */
--text-xl:           20px / line-height 1.6  / weight 300
--text-lg:           18px / line-height 1.65 / weight 300
--text-md:           16px / line-height 1.7  / weight 400
--text-sm:           14px / line-height 1.65 / weight 400
--text-xs:           13px / line-height 1.5  / weight 400
--text-2xs:          11px / line-height 1.4  / weight 600 / letter-spacing 1.5px / uppercase

/* Labels */
--text-label:        12px / weight 600 / letter-spacing 1.5px / uppercase
```

### Typographic Rules

- Headlines use `weight: 500`, never 700 — heavy weight reads corporate.
- Italic serif em (`<em>`) inside headlines for the "lively" word — use the Instrument Serif italic only here.
- Eyebrow labels: `--text-label` style, brand blue color, uppercase, before every section headline.
- Body text: always `--color-text-secondary` (#4A5273), never pure black.
- Max line width for body paragraphs: `52ch` (prevents long uncomfortable lines).

---

## Spacing System

```
--space-1:    4px
--space-2:    8px
--space-3:    12px
--space-4:    16px
--space-5:    20px
--space-6:    24px
--space-8:    32px
--space-10:   40px
--space-12:   48px
--space-16:   64px
--space-20:   80px
--space-24:   96px
--space-32:   128px
```

**Section vertical padding:** `120px` top and bottom (desktop), `80px` (mobile).
**Container max-width:** `1120px`, centered, `60px` horizontal padding.

---

## Border Radius

```
--radius-sm:   6px   /* Tags, pills, chips */
--radius-md:   10px  /* Buttons, inputs, small cards */
--radius-lg:   16px  /* Feature cards, price cards */
--radius-xl:   24px  /* Large section cards, CTA banner */
--radius-full: 100px /* Badges, avatar circles, step numbers */
```

---

## Shadows

Flat-leaning design — shadows are used sparingly for elevation only, not decoration.

```
--shadow-sm:   0 1px 3px rgba(13,19,51,0.06), 0 1px 2px rgba(13,19,51,0.04)
--shadow-md:   0 4px 16px rgba(13,19,51,0.08), 0 2px 6px rgba(13,19,51,0.04)
--shadow-lg:   0 12px 40px rgba(13,19,51,0.10), 0 4px 12px rgba(13,19,51,0.06)
--shadow-brand: 0 8px 32px rgba(36,79,252,0.20) /* Buttons, hero elements */
```

---

## Buttons

### Primary Button
```
Background:    --color-brand (#244FFC)
Text:          #FFFFFF, font-weight 600, font-size 15px
Padding:       14px 28px
Border-radius: --radius-md
Box-shadow:    --shadow-brand
Hover:         --color-brand-hover, transform translateY(-1px)
Active:        transform scale(0.98)
```

### Secondary / Outline Button
```
Background:    transparent
Border:        1.5px solid --color-border-strong
Text:          --color-text-primary, font-weight 500, font-size 15px
Padding:       13px 26px
Border-radius: --radius-md
Hover:         background --color-bg-muted
```

### Ghost Button (nav)
```
Background:    transparent
Text:          --color-text-secondary, font-size 14px, weight 400
No border
Hover:         --color-text-primary
```

---

## Section Backgrounds (Alternating Rhythm)

Follow this pattern to create visual breathing room between sections:

| Section | Background | Notes |
|---------|-----------|-------|
| Nav (fixed) | `#FFFFFF` with blur | Border-bottom on scroll |
| Hero | `--color-bg-base` (#FFFFFF) | Large radial glow in brand color, very faint |
| Trusted Brand | `--color-bg-soft` (#F4F6FF) | Thin strip |
| Problem | `--color-bg-base` (#FFFFFF) | |
| Features | `--color-bg-soft` (#F4F6FF) | |
| Getting Started | `--color-bg-base` (#FFFFFF) | |
| Comparison | `--color-bg-soft` (#F4F6FF) | |
| Security | `--color-bg-base` (#FFFFFF) | Consider a large abstract decorative shape |
| Pricing | `--color-bg-invert` (#0D1333) | **Dark section** — high contrast, brand accents pop |
| Testimonials | `--color-bg-base` (#FFFFFF) | |
| CTA Banner | `--color-brand` (#244FFC) | Full-bleed brand color |
| Footer | `--color-bg-invert` (#0D1333) | Matches pricing dark |

---

## Component Specs

### Section Eyebrow Label
```
Font:          --text-label (12px, uppercase, 600, 1.5px letter-spacing)
Color:         --color-brand
Margin-bottom: 16px
```

### Section Headline
```
Font-size:     --text-display-md (44px) or --text-display-lg (56px)
Weight:        500
Letter-spacing: -1.5px to -2px
Color:         --color-text-primary
Margin-bottom: 16px
Max-width:     600px (left-aligned) or unconstrained (centered)

Italic serif word (em tag):
  Font-family: Instrument Serif, italic
  Color:       --color-brand (on white sections)
               #FFFFFF (on dark/brand sections)
```

### Feature Card
```
Background:    --color-bg-base
Border:        1px solid --color-border
Border-radius: --radius-lg
Padding:       32px 28px
Hover:         box-shadow --shadow-md, border-color --color-border-strong

Icon container:
  Size:        44×44px
  Background:  --color-brand-light (#E8EDFF)
  Border-radius: --radius-md
  Icon stroke:  --color-brand, 1.8px, 22×22px

Feature tag / chip:
  Font-size:   11px, 600, uppercase, 0.5px letter-spacing
  Padding:     3px 10px
  Border-radius: --radius-full
  Default:     bg --color-brand-light, color --color-brand
  Pro:         bg --color-gold-light, color --color-gold, border --color-gold at 20% opacity
```

### Problem Card
```
Background:    --color-bg-soft
Border:        1px solid --color-border
Border-left:   3px solid --color-danger
Border-radius: --radius-lg
Padding:       20px 22px

Icon container:
  Size:        36×36px
  Background:  --color-danger-light
  Icon stroke:  --color-danger
```

### Comparison Table
```
Container:     Border 1px solid --color-border, --radius-xl, overflow hidden

Header row:
  Background:  --color-bg-soft
  Font:        --text-label style
  Border-bottom: 1px solid --color-border

"Snaarplock" column header:
  Color:       --color-brand
  Background:  rgba(36,79,252,0.04)

Data rows:
  Hover:       background --color-bg-soft (0.5)
  Border-bottom: 1px solid --color-border

Check (yes):
  Circle bg:   --color-success-light
  Icon stroke: --color-success

Cross (no):
  Circle bg:   --color-danger-light
  Icon stroke: --color-danger

"Snaarplock" column cells:
  Background:  rgba(36,79,252,0.03)
  Left/right border: 1px solid rgba(36,79,252,0.12)
```

### Price Card
```
Background:    --color-bg-soft
Border:        1px solid --color-border
Border-radius: --radius-xl
Padding:       32px 28px

Featured / Pro card:
  Border:      2px solid --color-brand
  Background:  #FFFFFF
  Box-shadow:  --shadow-lg

Featured badge:
  Position:    absolute, top -14px, centered
  Background:  --color-brand
  Text:        #FFFFFF, 11px, 700
  Padding:     5px 16px
  Border-radius: --radius-full

Plan amount:
  Font-size:   48px, weight 600, letter-spacing -2px
  Color:       --color-text-primary (on light) / #FFFFFF (on dark pricing section)

Feature list item checkmark:
  Icon stroke: --color-success
  Text:        --color-text-secondary
Strikethrough item:
  Text:        --color-text-muted, text-decoration line-through
```

### Testimonial Card
```
Background:    --color-bg-soft
Border:        1px solid --color-border
Border-radius: --radius-lg
Padding:       28px 24px
Hover:         border-color --color-border-strong, box-shadow --shadow-sm

Stars: color --color-gold

Quote text:
  Font-size:   15px, weight 300
  Color:       --color-text-primary
  Line-height: 1.75

Avatar circle:
  Size:        38×38px, border-radius 50%
  Background:  --color-brand-light
  Text:        --color-brand, font-size 13px, weight 600
```

### Step Item (How it works)
```
Padding:       24px 20px
Border-radius: --radius-lg
Border:        1px solid transparent
Hover / Active:
  Background:  --color-bg-soft
  Border-color: --color-border

Step number circle:
  Size:        36×36px, border-radius 50%
  Border:      1.5px solid --color-border-strong
  Color:       --color-text-muted
  Active state:
    Background: --color-brand
    Color:      #FFFFFF
    Border-color: --color-brand
```

---

## Decorative / Liveness Rules

These are what separate the design from "generic SaaS template" — use them deliberately.

### 1. Hero Radial Glow
Behind the hero headline, place a very faint radial gradient:
```css
background: radial-gradient(ellipse 800px 500px at 50% -100px, rgba(36,79,252,0.07) 0%, transparent 70%);
```
Do not use this effect elsewhere. One is enough.

### 2. Brand Dot / Accent Line
The logo shield mark and step-number circles use the brand color as fills. Keep these crisp and flat — no glow effects.

### 3. Section Dividers
No visible horizontal rules between sections. Rhythm is established purely through background color alternation and generous vertical spacing.

### 4. Animated Badge Dot
In the hero announcement badge, the green live-indicator dot pulses via CSS:
```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.4); }
}
```
Keep animation subtle. This is the only looping animation on the page.

### 5. Card Hover Motion
Feature cards, testimonial cards, and pricing cards all lift slightly on hover:
```css
transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
hover: transform translateY(-2px); box-shadow: --shadow-md;
```

### 6. Button Press Feedback
All CTA buttons have active state:
```css
active: transform scale(0.97);
```

### 7. Stats Numbers
The 4 stats in the Problem section use the display-xl type scale (72px) with the brand color on the number and regular weight on the label. Let the contrast do the work.

### 8. CTA Banner (Full Blue)
The pre-footer CTA is full-bleed `--color-brand`. Text is white. The headline uses the italic serif `<em>` trick but in white. This is the most saturated surface on the page — keep it clean with just headline, subline, and two buttons. No other decoration.

### 9. Pricing Section (Dark)
The pricing section uses `--color-bg-invert` (#0D1333). Text inverts to white. The Pro card floats above the others with a white background and brand border — high contrast pop on dark. This is intentional.

---

## Grid & Layout

```
Max container:   1120px
Gutter:          60px (desktop), 24px (mobile)
Column system:   12-column CSS Grid or Flexbox

Common layouts:
  2-column:      grid-template-columns: 1fr 1fr  (gap: 80px)
  3-column:      grid-template-columns: repeat(3, 1fr)  (gap: 20px)
  4-column:      grid-template-columns: repeat(4, 1fr)  (gap: 0, border-divided)
  Feature grid:  repeat(3, 1fr) with 1px border dividers between cells
```

---

## Iconography

- Style: **Outline**, 1.8px stroke, rounded linecaps and joins
- Library: [Lucide Icons](https://lucide.dev) or [Tabler Icons](https://tabler-icons.io) (outline only)
- Size: 22×22px inside icon containers, 18×18px inside badges
- Color: Always inherits from the icon container context — never hardcoded

**Do not use:** filled icons, emoji, or decorative icon illustrations in the main UI.

---

## Navigation Behaviour

- Fixed to top at all times
- On scroll past 60px: add `backdrop-filter: blur(16px)` and `border-bottom: 1px solid --color-border`
- Logo: shield mark SVG + wordmark
- Nav links: `--color-text-secondary`, hover `--color-text-primary`
- Mobile: hamburger → slide-down drawer

---

## Responsive Breakpoints

```
--bp-mobile:   < 640px
--bp-tablet:   640px – 1024px
--bp-desktop:  > 1024px
```

**Key responsive rules:**
- Hero headline: 72px → 48px → 36px
- 3-column grids → 2-column → 1-column
- Section padding: 120px → 80px → 60px
- Nav links hidden on mobile, hamburger shown
- Comparison table: horizontally scrollable on mobile with sticky first column

---

## Accessibility

- Minimum contrast: 4.5:1 for body text, 3:1 for large text (WCAG 2.1 AA)
- All interactive elements have `:focus-visible` ring: `outline: 2px solid --color-brand; outline-offset: 3px`
- No animation for users with `prefers-reduced-motion: reduce` — wrap all transitions in media query
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<h1>`–`<h6>` in order
- All icons: `aria-hidden="true"` (decorative) or have `aria-label` (interactive)
- Images: always have descriptive `alt` attributes

---

## What to Avoid

❌ Purple gradients or purple of any kind — there is only one brand color family (#244FFC blue)
❌ Dark mode — this is a light-mode-only product homepage
❌ Inter or Roboto — too generic
❌ Heavy font weights (700, 800) in headlines — use 500
❌ Glassmorphism, frosted glass cards — keep surfaces flat and solid
❌ Full-bleed background images in most sections — let typography and color do the work
❌ More than 2 typefaces loaded
❌ Drop shadows on icons, text, or logos
❌ Animation on scroll for every element — reserve motion for 2–3 key moments only

---

*End of design guide.*
