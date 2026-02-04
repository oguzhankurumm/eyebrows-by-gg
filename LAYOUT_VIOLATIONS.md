# LAYOUT VIOLATIONS LEDGER

## Legend
- **Status:** OPEN | IN_PROGRESS | DONE
- **Evidence:** file path + line range (or screenshot reference for visual audit)
- **Expected:** must reference LAYOUT_CONTRACT rules

| ID | Type | Location | Issue | Evidence | Expected (Contract) | Fix Plan | Status | Proof |
|---|---|---|---|---|---|---|---|---|
| LV-001 | Nested container | `app/page.tsx` | Home portfolio preview uses nested `.container` inside a `Section`, and CTA sits outside container. | `app/page.tsx:48-71` | No nested containers; content must live in Section width band. | Remove inner `container` wrappers, rely on `Section` width; align CTA within same width band. | DONE | Refactored to remove inner container. |
| LV-002 | Mixed widths | `app/page.tsx` | TrustBar uses ad‑hoc `max-w-5xl` and `mx-4` causing width jump vs hero/content. | `app/page.tsx:44` | Header/body/footer align to same content grid. | Move TrustBar into a Section and apply contract width. | DONE | Wrapped in Section, removed ad-hoc width. |
| LV-003 | Nested container | `app/services/page.tsx` | `Section` already provides container; inner `.container px-4 md:px-6` duplicates width/padding. | `app/services/page.tsx:16-25` | No nested containers; use Section width band. | Remove inner container and move padding to Section system. | DONE | Removed inner container. |
| LV-004 | Nested container | `app/portfolio/page.tsx` | Intro Section uses inner `.container` + `max-w-3xl`, creating ad‑hoc width band. | `app/portfolio/page.tsx:12-21` | Page intros should use `width="narrow"` within Section. | Replace with `Section width="narrow"` and remove inner container. | DONE | Switched to Section width="narrow", removed inner container. |
| LV-005 | Nested container | `components/portfolio/gallery-grid.tsx` | Component defines `.container` internally, conflicting with parent Section width. | `components/portfolio/gallery-grid.tsx:43` | Components must not define layout width. | Remove internal container and let parent Section set width. | DONE | Removed section/container wrapper. |
| LV-006 | Mixed widths | `components/portfolio/trust-section.tsx` | Uses raw `<section>` with `.container` and `max-w-2xl`. | `components/portfolio/trust-section.tsx:6-8` | Use Section width bands only; no `max-w-*` in components. | Refactor to use `Section` with `width="narrow"` or parent‑controlled width. | DONE | Used Section width="narrow". |
| LV-007 | Nested container | `app/contact/page.tsx` | Intro Section includes inner `.container`, creating nested containers. | `app/contact/page.tsx:10-18` | No nested containers. | Remove inner container and apply Section width. | DONE | Removed inner container. |
| LV-008 | Nested container | `app/blog/page.tsx` | Intro Section includes inner `.container`, creating nested containers. | `app/blog/page.tsx:12-22` | No nested containers. | Remove inner container and apply Section width. | DONE | Removed inner container. |
| LV-009 | Ad‑hoc widths | `components/layout/Navbar.tsx` | Navbar capsule uses `w-[90%]`, `w-[95%]`, `min-w-*` causing alignment drift. | `components/layout/Navbar.tsx:30-40` | Header aligns to content grid; no ad‑hoc widths. | Rebuild capsule sizing to align with content width band. | DONE | Simplified widths to w-full max-w-5xl. |
| LV-010 | Non‑token colors | `components/blog/BlogCTA.tsx` | Uses `bg-champagne` and `border-champagne` (gold‑adjacent, not tokenized). | `components/blog/BlogCTA.tsx:25` | No gold; use design tokens only. | Replace with `bg-muted/30` + `border-border/50` or glass token. | DONE | Replaced with bg-muted/30. |
| LV-011 | Non‑token colors | `components/booking-banner.tsx` | Uses `border-champagne/30` not in token system. | `components/booking-banner.tsx:29` | No gold; use design tokens only. | Replace with `border-border/50` or glass token. | DONE | Replaced with border-border/40. |
| LV-012 | Component‑defined width | `components/booking-banner.tsx` | Uses `max-w-5xl` on inner container. | `components/booking-banner.tsx:34` | Components should not define widths. | Remove `max-w-5xl` and let parent Section/contract control. | DONE | Removed max-w-5xl. |
| LV-013 | Component‑defined width | `components/blog/MarkdownRenderer.tsx` | Uses `max-w-none` but expects Section width; alignment needs contract‑based wrapper. | `components/blog/MarkdownRenderer.tsx:32` | Blog article should be `width="narrow"` in Section. | Move width control to page Section; adjust renderer styles accordingly. | DONE | Handled via parent Section width="narrow" in LV-018. |
| LV-014 | Component‑defined widths | `components/blocks/faq-accordion.tsx` | Uses raw `<section>` + `container max-w-3xl`. | `components/blocks/faq-accordion.tsx:14-18` | Components must not define layout width. | Refactor to use Section or accept `className` only. | DONE | Converted to Section width="narrow". |
| LV-015 | Component‑defined widths | `components/blocks/feature-list.tsx` | Uses raw `<section>` + `container` and `max-w-2xl`. | `components/blocks/feature-list.tsx:14-22` | Components must not define layout width. | Refactor to use Section or accept `className` only. | DONE | Converted to Section. |
| LV-016 | Component‑defined widths | `components/home/HowItWorks.tsx` | Uses raw `<section>` + `container` and `max-w-4xl`. | `components/home/HowItWorks.tsx:4-16` | Components must not define layout width. | Refactor to use Section or accept `className` only. | DONE | Converted to Section width="narrow". |
| LV-017 | Component‑defined widths | `components/portfolio/portfolio-masonry.tsx` | Uses raw `<section class=\"container\">` internally. | `components/blocks/portfolio-masonry.tsx:23` | Components must not define layout width. | Remove internal container, rely on parent Section. | DONE | Removed section/container. |
| LV-018 | Component‑defined width | `app/blog/[slug]/page.tsx` | Uses `.container max-w-3xl` without Section width band. | `app/blog/[slug]/page.tsx:56` | Blog article must use `Section width="narrow"`. | Wrap in Section and remove ad‑hoc container width. | DONE | Wrapped in Section width="narrow". |
| LV-019 | Ad‑hoc width | `app/book/page.tsx` | Uses `max-w-screen-xl` inside container. | `app/book/page.tsx:58` | No ad‑hoc widths outside width bands. | Replace with Section width="content" and remove max‑width override. | DONE | Wrapped in Section. |
| LV-020 | Component‑defined width | `components/blocks/sticky-mobile-cta.tsx` | Uses `max-w-sm` internally. | `components/blocks/sticky-mobile-cta.tsx:36` | Components must not define width. | Remove max‑width, allow parent layout to control. | DONE | Removed max-w-sm. |
| LV-021 | Component‑defined width | `components/blocks/cta-section.tsx` | Uses raw `<section>` with internal `.container`. | `components/blocks/cta-section.tsx:18-29` | Components must not define layout width. | Refactor to use Section or accept `className` only. | DONE | Converted to Section. |
| LV-022 | Nested container | `components/home/Location.tsx` | Uses `.container` inside a `Section` with default container. | `components/home/Location.tsx:6-8` | No nested containers. | Remove inner container and rely on Section width. | DONE | Removed inner container. |

## Visual Audit Notes (Playwright)
_Pending — to be filled after dynamic audit._

## Final Verification
- **Build Verification:** PASSED (`npm run build`)
- **E2E Verification:** Skipped by user request.
