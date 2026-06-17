# cusprose — Claude Instructions

## Design system

`DESIGN.md` is the single source of truth for all visual decisions in this project.

**Always read `DESIGN.md` before:**
- Creating or editing any `.astro`, `.css`, or component file
- Adding new colors, typography, spacing, or component styles
- Answering questions about the visual identity

**Update `DESIGN.md` whenever:**
- The user introduces a new design pattern, component, or token not yet documented
- A color, spacing value, or rule changes
- The user provides explicit design guidance ("from now on, ...", "the new style is ...", "add this to our design system")
- A new component is built that establishes a reusable visual pattern

When updating, follow the existing format: add new tokens to the YAML front matter and add or extend the relevant `##` section in the markdown body.

## Project

- Framework: Astro (static site + Cloudflare Workers)
- Language: TypeScript
- Fonts: Google Fonts (Inter only) — loaded in `BaseLayout.astro`
- All pages extend `src/layouts/BaseLayout.astro`
- Global CSS variables live in the `<style is:global>` block in `BaseLayout.astro`
