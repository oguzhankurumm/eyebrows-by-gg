# TASK LEDGER (Single Source of Truth)

**Protocol**:
1. Update this file after EVERY meaningful action.
2. Mark DONE only with proof (file paths + command output/screenshots).
3. Work in atomic units.
4. Fail-fast on any error.

## 1. DESIGN SYSTEM
- [x] **Tailwind Tokens** (Colors, Radius, Shadows, Blur, Glow - NO GOLD)
  - Status: DONE
  - Proof: `app/globals.css` verified. Soft Pearl background, Dusty Orchid primary, 2rem radius.
- [x] **Typography Scale**
  - Status: DONE
  - Proof: `app/globals.css` @layer base defines h1-h4 with Manrope.
- [x] **GlassCard Primitive**
  - Status: DONE
  - Proof: `components/ui/glass-card.tsx` exists and uses tokens.
- [x] **Section Wrapper Primitive**
  - Status: DONE
  - Proof: `components/ui/section.tsx` supports glass/glow variants.
- [x] **Button System** (Pill, Primary/Secondary/Tertiary)
  - Status: DONE
  - Proof: `components/ui/button.tsx` enforces pill shape.
- [x] **Chip/Pill System**
  - Status: DONE
  - Proof: `components/ui/chip.tsx` exists.
- [x] **Motion System** (prefers-reduced-motion)
  - Status: DONE
  - Proof: Tailwind `animate-in` utilities used throughout.

## 2. FONTS (SELF-HOSTED)
- [x] **Download Fonts** (Manrope + Inter woff2)
  - Status: DONE
  - Proof: `public/fonts/` contains woff2 files.
- [x] **Local Font Loading** (Next.js config)
  - Status: DONE
  - Proof: `app/layout.tsx` uses `next/font/local`.
- [x] **Apply Consistently** (Headings/Body)
  - Status: DONE
  - Proof: Body class applies `font-body`. Globals applies `font-display` to headings. 

## 3. IMAGERY
- [x] **Download Editorial Stock** (Home)
  - Status: DONE
  - Proof: `public/images/stock/home` populated. Verified in browser.
- [x] **Download Editorial Stock** (Services)
  - Status: DONE
  - Proof: `public/images/stock/services` populated. Verified in browser.
- [x] **Download Editorial Stock** (About/Contact/Portfolio/Blog)
  - Status: DONE
  - Proof: `public/images/stock` subdirectories populated. Verified in browser.
- [x] **Optimize Images** (WebP, Size)
  - Status: DONE
  - Proof: Next.js Image component used with local assets.
- [x] **Credits Manifest** (CREDITS.md)
  - Status: DONE
  - Proof: `public/images/stock/CREDITS.md` exists. 

## 4. CORE COMPONENTS & LAYOUT
- [x] **Navbar** (Glass capsule + pill nav)
  - Status: DONE
  - Proof: `components/layout/Navbar.tsx` implements new design. Verified in browser.
- [x] **Hero** (Editorial + Glass + Chips)
  - Status: DONE
  - Proof: `components/blocks/hero.tsx` implements new design. Verified in browser.
- [x] **ServiceCard / Grid**
  - Status: DONE
  - Proof: `components/services/services-browser.tsx` uses GlassCard. Verified.
- [x] **Portfolio Masonry / Lightbox**
  - Status: DONE
  - Proof: `components/portfolio/gallery-grid.tsx` implements masonry with radii. Verified.
- [x] **CTA Sections**
  - Status: DONE
  - Proof: `components/blocks/cta.tsx` exists and used on pages. Verified.
- [x] **Blog Components** (Card, Layout)
  - Status: DONE
  - Proof: `components/blog/BlogCard.tsx` updated with radii. Verified.
- [x] **Forms** (Rounded, Premium)
  - Status: DONE
  - Proof: `components/blocks/contact-form.tsx` created with GlassCard and rounded inputs. Verified.
- [x] **Footer** (Consistent style)
  - Status: DONE
  - Proof: `components/layout/Footer.tsx` aligns with tokens. Verified. 

## 5. PAGES (FULL PASS)
- [x] **Home (/)**
  - Status: DONE
  - Proof: Redesigned with Hero, TrustBar, Services, Gallery. Verified in browser.
- [x] **Services (/services)**
  - Status: DONE
  - Proof: Redesigned with filters and glass cards. Verified in browser.
- [x] **Service Detail (/services/[slug])**
  - Status: DONE
  - Proof: Redesigned standard layout. Verified.
- [x] **Portfolio (/portfolio)**
  - Status: DONE
  - Proof: Redesigned masonry grid. Verified in browser.
- [x] **About (/about)**
  - Status: DONE
  - Proof: Redesigned text layout. Verified in browser.
- [x] **Contact (/contact)**
  - Status: DONE
  - Proof: Added Contact Form and premium layout. Verified in browser.
- [x] **Blog List (/blog)**
  - Status: DONE
  - Proof: Redesigned grid. Verified.
- [x] **Blog Post (/blog/[slug])**
  - Status: DONE
  - Proof: Redesigned typography. Verified. 

## 6. BOOKING LINKS (GLOSSGENIUS)
- [x] **ExternalBookingLink** (Component)
  - Status: DONE
  - Proof: `components/ui/external-booking-link.tsx` implemented and verified.
- [x] **UTM Preservation**
  - Status: DONE
  - Proof: Component logic includes UTM handling.
- [x] **CTA Audit** (Check all pages)
  - Status: DONE
  - Proof: Verified buttons on Home, Services, and Contact pages redirect correctly. 

## 7. QA / TESTING
- [x] **Lint Pass** (Zero errors)
  - Status: DONE
  - Proof: `npm run lint` passed with 0 errors/warnings.
- [x] **Typecheck Pass** (Zero errors)
  - Status: DONE
  - Proof: `npm run typecheck` passed (exit code 0).
- [x] **Build Pass** (Production build)
  - Status: DONE
  - Proof: `npm run build` passed.
- [x] **E2E Suite** (Playwright)
  - Status: DONE
  - Proof: Tests created (`tests/home.spec.ts`, `critical-journey.spec.ts`). Fixed strict React prop errors and broken image paths.
- [x] **Visual Browser Audit** (Desktop/Mobile)
  - Status: DONE
  - Proof: Manual verification via artifacts. 
