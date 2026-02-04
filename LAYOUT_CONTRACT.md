# LAYOUT CONTRACT (SINGLE SOURCE OF TRUTH)
This contract defines the structural system for all pages and components. It is LAW.

## 1) MAX-WIDTH SYSTEM
All layout widths must be one of the following:

### A. Full‑bleed
- **Use for:** background bands, ambient glows, edge-to-edge imagery only.
- **Implementation:** `Section` with `container={false}`; add internal content wrappers only if explicitly required by this contract.
- **Content rule:** Any readable text or interactive content must still sit inside a Width band below.

### B. Wide
- **Use for:** image‑heavy galleries, large multi‑column grids, wide marketing bands.
- **Implementation:** `Section` with `width="wide"` → `.container-wide` (`max-w-[1500px]`).

### C. Content (Default)
- **Use for:** all primary page content, hero layouts, service grids, forms, blog index, footer content.
- **Implementation:** `Section` default width → `max-w-7xl`.

### D. Narrow
- **Use for:** long‑form reading, single‑column editorial, legal text.
- **Implementation:** `Section` with `width="narrow"` → `max-w-4xl`.

## 2) WIDTH ASSIGNMENTS BY SECTION TYPE
Use only these width bands for each section type:
- **Global Header / Navbar:** Content width.
- **Global Footer:** Content width.
- **Page Hero (text + media):** Content width.
- **Page Intro (headline + short lead):** Narrow.
- **Services / Pricing grids:** Content width.
- **Portfolio gallery grids:** Wide.
- **Trust / reassurance blocks:** Content width (narrow if single-column).
- **Blog index grid:** Content width.
- **Blog article body:** Narrow.
- **Contact / Forms:** Content width (narrow for single-column form blocks).

## 3) HORIZONTAL PADDING RULES
These apply to all containers:
- **Mobile:** `px-4`
- **Tablet:** `md:px-6`
- **Desktop:** `lg:px-8`

No component may override container padding directly.

## 4) VERTICAL SPACING RHYTHM
Use only the Section spacing tokens:
- **Default:** `py-16 md:py-24 lg:py-32`
- **Compact:** `py-10 md:py-16`
- **None:** `py-0`

Sections must not invent their own arbitrary `py-*` values unless explicitly required for a full‑bleed band.

## 5) ALIGNMENT RULES
- **Header, hero, body, footer** must align to the same content grid.
- **Cards and CTAs** align to parent grids; no manual left/right offsets.
- **Text blocks** align to grid; no manual `mx-auto max-w-*` outside of the width bands.

## 6) GRID SYSTEM
- **Desktop (≥1024px):** 12‑column grid, `gap-8` preferred.
- **Tablet (≥768px):** 8‑column grid, `gap-6`.
- **Mobile:** 4‑column grid, `gap-4`.

Use consistent `gap-*` values (`gap-4`, `gap-6`, `gap-8`, `gap-12`).

## 7) FORBIDDEN PATTERNS
The following are not allowed anywhere in the codebase:
- Random `max-w-*` values per component without a width band.
- Mixed container widths on the same page section.
- Components defining their own width (`container`, `max-w-*`, `w-[...]`, `min-w-*`, `%` widths).
- Inline width styles (`style={{ width: ... }}`).
- Nested containers (`Section` + inner `.container`).

## 8) ENFORCEMENT
- All layout changes must comply with this contract.
- Any violation must be logged in `LAYOUT_VIOLATIONS.md` with proof and fix plan.
