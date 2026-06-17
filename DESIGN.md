---
name: cusprose
colors:
  # Background gradient — pastel tricolor
  grad-lavender: "#e8d4e4"
  grad-peach: "#f5d5c0"
  grad-sage: "#d4e0c8"

  # Tarot card surfaces — deeper variants of gradient
  card-lavender: "#d9cceb"
  card-peach: "#f2c9a8"
  card-sage: "#c8ddb9"

  # Text
  ink: "#16183a"
  ink-soft: "#6e6e8f"

  # Accent
  gold: "#d9a441"

  # Glassmorphism surfaces
  surface: "rgba(255,255,255,0.55)"
  surface-border: "rgba(255,255,255,0.7)"

typography:
  base:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(15px, 0.95rem + 0.2vw, 18px)"
    lineHeight: 1.6
  logo:
    fontSize: "1.4rem"
    fontWeight: 600
    letterSpacing: "-0.01em"
  feature-title:
    fontSize: "1.65rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  eyebrow:
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.18em"
    textTransform: "uppercase"
  nav-link:
    fontSize: "0.95rem"
    fontWeight: 400
  card-name:
    fontSize: "0.95rem"
    fontWeight: 500
  card-keywords:
    fontSize: "0.65rem"
    fontWeight: 500
    letterSpacing: "0.18em"
    textTransform: "uppercase"
  footer-heading:
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.16em"
    textTransform: "uppercase"

rounded:
  card: "14px"
  feature: "20px"
  pill: "999px"

spacing:
  container: "1240px"
  pad-x: "clamp(1.25rem, 4vw, 4rem)"
  section-gap: "6rem"
  footer-pad: "3.5rem 0 2.5rem"

components:
  tarot-card:
    width: "168px"
    height: "256px"
    borderRadius: "{rounded.card}"
    padding: "1.1rem 1rem"
    backgroundColor: "{colors.card-lavender} | {colors.card-peach} | {colors.card-sage}"
    color: "{colors.ink}"
    boxShadow: "0 24px 48px -16px rgba(22,24,58,0.22), 0 4px 12px -4px rgba(22,24,58,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)"
  feature-card:
    borderRadius: "{rounded.feature}"
    padding: "2rem 1.75rem"
    minHeight: "240px"
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.surface-border}"
    backdropFilter: "blur(8px)"
  nav-cta:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    padding: "0.7rem 1.25rem"
    borderRadius: "{rounded.pill}"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.12em"
  footer:
    backgroundColor: "{colors.surface}"
    backdropFilter: "blur(10px)"
    borderTop: "1px solid {colors.surface-border}"
    marginTop: "{spacing.section-gap}"
    padding: "{spacing.footer-pad}"
---

## Overview

Cusprose is a modern divination platform — "Daily divination for the modern soul. East meets West." The visual identity fuses cosmic softness with editorial clarity: pastel gradients meet geometric precision, glassmorphism surfaces float over a star-speckled background, and gold accents mark moments of meaning.

The palette and typography prioritize legibility and calm. Nothing competes with the content; every UI element recedes gracefully so the mystical subject matter can breathe.

## Colors

Three pastel hues form the brand — lavender, peach, and sage — used both as the page gradient and as card surface tints. The deeper card variants (`card-*`) are saturated versions of the gradient colors, giving tarot cards physical presence.

- **Ink** (`#16183a`): deep navy-indigo for all primary text. Warmer than pure black, grounding without harshness.
- **Ink-soft** (`#6e6e8f`): muted purple-grey for secondary text, captions, labels.
- **Gold** (`#d9a441`): used sparingly — logo dot, card glyphs, star icons. It marks significance.
- **Surface / Surface-border**: white at low opacity for glassmorphism cards and footer. Always paired with `backdrop-filter: blur(...)`.

Never use pure black (`#000`) or pure white (`#fff`) for backgrounds or body text — the palette is intentionally warm and soft.

## Typography

Inter is the sole typeface. No serifs, no display fonts — the copy carries the mysticism; the type stays neutral.

Key conventions:
- **Eyebrow labels** (section tags, card keywords): `0.65–0.72rem`, `font-weight: 500–600`, `letter-spacing: 0.16–0.22em`, always `text-transform: uppercase`.
- **Feature titles**: `1.65rem`, `font-weight: 500`, tight `line-height: 1.15`, slight negative tracking `-0.01em`.
- **Logo**: `1.4rem`, `font-weight: 600`. The gold dot is the only brand decoration.
- Body text uses fluid sizing: `clamp(15px, 0.95rem + 0.2vw, 18px)` with `line-height: 1.6`.

## Layout

- Max container width: `1240px`, centered, with responsive horizontal padding `clamp(1.25rem, 4vw, 4rem)`.
- Sections are separated by generous vertical rhythm (`6rem` margin-top before the footer).
- The body background is a fixed `linear-gradient(135deg, lavender → peach → sage)` at `100% 100%` with a layer of tiny radial white dots (sparkles) tiled at `400px × 400px` — do not replace this pattern; it is load-bearing for the aesthetic.

## Elevation & Depth

Glassmorphism is the primary elevation pattern:
- **Level 1** (feature cards, footer): `background: rgba(255,255,255,0.45–0.55)` + `backdrop-filter: blur(8–10px)` + `border: 1px solid rgba(255,255,255,0.7)`.
- **Level 2** (tarot cards): deeper pastel fill + multi-layer box-shadow `0 24px 48px -16px rgba(22,24,58,0.22)` + inner white ring `inset 0 0 0 1px rgba(255,255,255,0.5)`.

Avoid hard drop shadows with dark solid colors — they break the soft atmosphere.

## Shapes

- **Cards**: `border-radius: 14px` — compact rounding that reads as card-like.
- **Feature cards / containers**: `border-radius: 20px` — softer, editorial feel.
- **Buttons / pills**: `border-radius: 999px` — full pill for CTAs (nav "SIGN IN" button).

## Components

### TarotCard
168 × 256 px portrait cards. Three color variants (lavender / peach / sage). Each displays a Roman numeral eyebrow, a centered SVG glyph in gold, and a footer with name + keyword label. Box shadow creates physical card depth; inner white ring mimics paper edge.

### FeatureCard
Glassmorphism article block. Min-height 240px so a grid of cards stays visually even. Structure: `tag` eyebrow → `title` (large, multi-line) → `meta` small descriptor. Flex column with `gap: 1rem`.

### Nav
Full-width top bar with logo left, link list center, CTA pill right. Links fade to `opacity: 0.7` at rest; active page gets `font-weight: 600` + full opacity. Nav collapses link list below `900px`.

### Footer
Three-column link grid + brand block. Glassmorphism surface, `border-top` separator. Bottom bar holds copyright and legal links, right-aligned.

## Do's and Don'ts

**Do:**
- Use `{colors.gold}` only for accent moments (logo dot, card glyphs, star decorations).
- Keep all text in `{colors.ink}` or `{colors.ink-soft}` — no additional text colors.
- Maintain glassmorphism pairing: surface color + `backdrop-filter` + border always appear together.
- Use uppercase + wide letter-spacing for all category/eyebrow labels.
- Preserve the sparkle-dot background pattern on `<body>` — it is part of the brand.

**Don't:**
- Don't add new typefaces or weights outside of Inter 400 / 500 / 600.
- Don't use border-radius values other than `14px`, `20px`, or `999px` for components.
- Don't use solid opaque backgrounds on cards — always glassmorphism or the defined pastel card colors.
- Don't introduce drop shadows with dark colors; use the multi-layer rgba shadow pattern defined in TarotCard.
