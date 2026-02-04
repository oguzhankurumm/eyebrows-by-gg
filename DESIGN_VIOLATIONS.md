# DESIGN VIOLATIONS LEDGER

| ID | Location | Issue | Violation Type | Fix Plan | Status |
|----|----------|-------|----------------|----------|--------|
| 1 | `components/portfolio/gallery-grid.tsx` | Used `rounded-md` on image container. | Radius Token | Replace with `rounded-[2rem]` or `rounded-3xl` | DONE (Fixed) |
| 2 | `components/ui/input.tsx` | Used `rounded-md`. | Radius Token | Replace with `rounded-full` | DONE (Fixed) |
| 3 | `components/ui/textarea.tsx` | Used `rounded-md`. | Radius Token | Replace with `rounded-2xl` | DONE (Fixed) |
| 4 | `components/ui/select.tsx` | Used `rounded-md` on trigger. | Radius Token | Replace with `rounded-full` | DONE (Fixed) |
| 5 | `components/ui/button.tsx` | `rounded-md` exists in deprecated `square` variant. | Radius Token | Deprecate `square` or force `rounded-2xl` as minimum. | DONE (Fixed) |
| 6 | `components/ui/popover.tsx` | Used `rounded-md`. | Radius Token | Replace with `rounded-2xl` | DONE (Fixed) |
| 7 | `components/email/BookingConfirmationTemplate.tsx` | Used hex color code. | Color Token | Replace with variable/token if possible or justify. | DONE (Fixed) |
| 8 | Global Typography | Headings using system serif instead of Manrope/Instrument. | Typography | Verify `app/layout.tsx` and `app/globals.css` font vars. | DONE (Fixed) |
| 9 | `lib/services.ts` / Images | Broken image paths causing 404s/placeholders. | Imagery | Reconcile paths with `public/images` structure. | DONE (Fixed) |
| 10 | Global Ambient | Missing ambient glow/glass layers on flat pages. | Ambient System | Add `GlassCard` and radial gradients. | DONE (Fixed) |
| 11 | `/contact` | Missing Contact Form. | Component Rule | Add premium contact form. | DONE (Fixed) |
