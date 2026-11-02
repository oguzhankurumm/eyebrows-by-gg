---
name: Eyebrows by GG
description: Rounded, image-led brow and beauty studio in Milford.
colors:
  background: "#f7f5fb"
  surface: "#e8e0f4"
  text: "#211c2e"
  accent: "#6341a5"
  muted: "#655b73"
typography:
  display:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(2.625rem, 1rem + 4.4vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  hero:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(48px, 5.8vw, 84px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.16
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(1.25rem, 1rem + 0.6vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.2vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.7
  lead:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.45vw, 1.375rem)"
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  control: "16px"
  card: "28px"
  section: "40px"
  field: "12px"
  pill: "99px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "6": "24px"
  "8": "32px"
  "12": "48px"
  "16": "64px"
  "24": "96px"
  "32": "128px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.text}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "16px 24px"
  button-inverse:
    backgroundColor: "{colors.background}"
    textColor: "{colors.accent}"
    rounded: "{rounded.control}"
    padding: "16px 24px"
  field:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
  treatment-filter:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  treatment-filter-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
  navigation-link:
    textColor: "{colors.text}"
    rounded: "{rounded.field}"
    padding: "10px 16px"
  treatment-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
---

# Design System: Eyebrows by GG

## Overview

**Creative North Star: "The Personal Beauty Studio"**

A personal beauty studio expressed through lilac-white space, lavender panels, violet actions and generous curved photography. Sora gives the studio a confident voice; Manrope keeps treatment information and booking controls approachable. The exact brand slogan is “Let’s touch your beauty”.

This is the implemented rounded studio world, selected through user feedback and extracted from the current code. Original client photographs and published studio Instagram media provide the visual detail. The historical seed is unverified and is not current direction authority; there is no approved comp or qualitycard.

**Key Characteristics:**
- Rounded image-led sections and treatment cards.
- Interactive finish previews, treatment filters and real before/after comparison.
- Four mobile destinations with a separate booking action.
- Purposeful arrival, reveal and interaction motion with reduced-motion support.

## Colors

Violet actions sit on a cool, quiet lilac foundation. The frontmatter records the five CSS roles exactly; color mixes are derived state and depth treatments, not extra brand colors. The sidecar’s synthesized OKLCH tonal ramps are panel previews only; they do not introduce production palette roles.

### Primary
- **Studio violet (accent):** booking actions, selected filters, comparison controls and large invitation panels.

### Neutral
- **Lilac white (background):** page ground, inset fields, floating previews and inverse text.
- **Soft lavender (surface):** cards, control groups, muted panels and navigation selection backgrounds.
- **Deep plum (text):** reading, headings and primary-action hover.
- **Muted plum (muted):** descriptions, captions and supporting information.

**The Five Roles Rule.** Use background for the page and inset controls, surface for grouping, text for primary reading, accent for actions and selected states, and muted for supporting copy. Derived transparencies remain attached to these roles.

## Typography

**Display Font:** Sora, sans-serif; locally loaded at 600 and 700.
**Body Font:** Manrope, sans-serif; locally loaded at 400, 600 and 700.

The pairing is geometric and confident in headings, open and calm in reading. The frontmatter contains the global ramp; component overrides provide tighter treatment and navigation labels.

- **Display:** global h1; homepage hero uses the distinct hero role at 700, limited to 10.5ch on desktop and 11ch on mobile.
- **Hero responsive:** at 1100px and below, clamp(44px, 5.9vw, 64px); at 640px and below, clamp(39px, 10.1vw, 60px), line-height 1.1 and tracking -0.04em; at 1600px and above, 88px.
- **Headline:** section h2; use balanced wrapping and the observed 17ch limit on section headings.
- **Title:** global h3; treatment card headings override to 20px desktop and 16px mobile.
- **Body:** readable paragraphs, generally limited to 68ch.
- **Lead:** introductory reading, generally limited to 46ch; homepage lead uses 37ch.
- **Label:** bold sentence-case actions. Small text uses the CSS small role (0.875rem), with explicit component overrides for compact metadata. Inputs resolve to 16px.

**The Two Voices Rule.** Use Sora for display and headings, and Manrope for reading and controls. Preserve the slogan’s curly apostrophe.

## Layout

The main container is min(90%, 1320px), centered. Sections use clamp(64px, 7vw, 112px) vertical padding. At 640px and below, the container becomes calc(100% - 36px) and section padding is 64px. The spacing frontmatter mirrors the declared CSS scale; components also use contextual intermediate values.

The desktop hero pairs 1.05fr text with 1fr imagery, a 4% gap and a floating finish preview. The final portrait heights are 590px desktop, 550px at 900px and below, and 390px at 640px and below. At the mobile breakpoint the hero stacks. Treatment cards form three desktop columns, two at 900px and below, and remain two compact columns at 640px and below. Films form four columns then two at 900px. Reviews become a single column on mobile.

Breakpoints in the source are max-width 1100px, 900px and 640px, with a min-width 1600px hero adjustment. The sticky header reserves 96px desktop and 76px mobile. Below 900px navigation uses a menu toggle. At 640px and below, a fixed rounded bottom dock contains a four-link navigation (Home, Treatments, Results, Visit) plus a separate Book action. Its final grid is 4fr 1fr, with four equal destination columns. Keep safe-area inset handling and the mobile scroll padding (100px top, 108px bottom).

## Elevation & Depth

Tonal grouping carries most of the structure. Soft shadows distinguish floating controls and the dialog; actionable cards and buttons gain depth on hover. These are diffuse palette-derived shadows, not hard offsets.

### Shadow Vocabulary
- **Primary action hover:** 0 10px 24px color-mix(in srgb, var(--accent) 16%, transparent).
- **Floating finish preview:** 0 16px 40px color-mix(in srgb, var(--text) 12%, transparent).
- **Treatment card hover:** 0 18px 40px color-mix(in srgb, var(--text) 9%, transparent).
- **Mobile navigation:** 0 8px 36px color-mix(in srgb, var(--text) 18%, transparent).
- **Comparison handle:** 0 4px 12px color-mix(in srgb, var(--text) 16%, transparent).
- **Booking dialog:** 0 24px 80px #211c2e33; backdrop #211c2e99.

**The Purposeful Lift Rule.** Use soft elevation for floating previews, mobile navigation and the booking dialog; use hover lift to acknowledge actionable cards and buttons.

## Shapes

Controls use the control radius, image-led cards the card radius, and broad panels the section radius. Fields and inset images have smaller corners; filters are pills. Small circular arrow controls and avatars provide a compact counterpoint. These are roles rather than a single universal shape: the portrait uses 36px, the booking dialog 32px, and mobile cards commonly tighten to 20px or 24px. The mobile booking dialog becomes a full-width bottom sheet with 28px top corners.

## Components

### Buttons

Confident, rounded and tactile. Primary actions use accent with background-colored text; secondary actions use surface with text. Inverse actions on accent panels use background with accent text. Standard buttons have a 56px minimum height. Primary hover changes to text and lifts 3px; secondary hover mixes 14% accent into surface and lifts 2px. Active scale is 0.97. Hover arrow translation is 4px. The hero secondary action is transparent rather than filled.

Visible focus is a 3px accent outline with 5px offset, reversed to background on dark panels and the footer. Touch/coarse-pointer styles suppress hover lift and shadow.

### Filters and finish selector

Pill controls use surface at rest and accent/background when aria-pressed is true. Keep a 44px minimum height. Finish selection updates the small photograph, treatment name, descriptive text and link; treatment filters change the visible card set. These controls are real buttons with exposed selected state.

### Cards / Containers

Treatment cards clip image and copy inside a surface-colored rounded shell, with 24px desktop copy padding and 16px mobile copy padding. Desktop image ratio is 1.45, mobile 1.1. Hover lifts the card 7px, scales the image to 1.055 and rotates the arrow 45 degrees. Credentials, review cards and film cards reuse the rounded tonal grouping with their own density. Film videos keep a 9:16 aspect ratio and native controls.

### Inputs / Fields

Contact fields use background inside the surface form, a 1px muted border, field radius, and minimum height 52px. Invalid fields use a 2px accent border plus visible error text; disabled submission uses opacity 0.6 and a wait cursor. This form validates and opens the visitor’s email app; it does not imply server submission.

### Navigation

Desktop navigation uses Manrope 14px/600, rounded link padding and surface hover/current states. The mobile dock uses 11px/600 labels, 54px minimum-height tabs, lavender/accent active state and a violet Book action. Navigation destinations expose aria-current; booking remains an action outside the destination nav. Preserve icon plus text labels and SVG icons.

### Appointment preview

Use a native dialog with Escape dismissal, contained Tab navigation and focus returned to its trigger. Desktop width is calc(100% - 40px), capped at 560px; content padding is 40px. On mobile it becomes a bottom sheet with safe-area content padding. A stable inline native-radio list sits inside expandable details, with a 220px scrollable fieldset. Selected services preview menu price and duration; no appointment is reserved here. Continue opens a separate secure GlossGenius window; retain status feedback and the manual new-tab fallback because cross-origin framing is blocked.

### Original result comparison

The paired original images share a 2:1 comparison stage. A native range input controls the reveal; visible Before/After labels and the circular handle communicate the interaction. Keep keyboard operation, focus-within outline, and touch-action pan-y. Never substitute unrelated or synthetic results.

### Motion and accessibility

The CSS easing is cubic-bezier(0.16, 1, 0.3, 1). Button feedback lasts 0.25s; treatment-card feedback 0.4s and image scale 0.8s. Hero text/photo/preview arrival spans 0.8–1.1s; finish swaps use 0.4s. The intersection observer reveals selected sections once over 480ms using cubic-bezier(.23,1,.32,1), translating 20px to zero and opacity 0.7 to 1. The booking dialog fades in over 0.3s.

Reduced-motion preference removes CSS animations/transitions, hover transforms and smooth scrolling; the runtime also cancels reveal animations and Lenis when the preference changes. Desktop fine-pointer smooth-wheel enhancement uses Lenis lerp 0.12 with syncTouch false. Keyboard input suppresses transition/animation on finish images, service cards, navigation and FAQ answers.

## Do's and Don'ts

### Do:
- **Do** use the five semantic palette roles and the two locally loaded font families.
- **Do** preserve the exact slogan “Let’s touch your beauty”.
- **Do** use original client and published studio media with provenance; preserve truthful before/after pairing.
- **Do** keep visible keyboard focus, native controls, safe-area spacing and reduced-motion behavior.
- **Do** preserve four mobile destinations and the separate booking action.
- **Do** keep historical original-site reference material internal.

### Don't:
- **Don’t** restore the rejected shade-library or magazine-cover direction.
- **Don’t** invent synthetic treatment results, reviews, credentials or current prices.
- **Don’t** replace the inline booking radio list with a browser select popup.
- **Don’t** iframe or proxy GlossGenius; preserve the separate secure booking window and manual new-tab fallback.
- **Don’t** apply desktop hover lifts or smooth-wheel behavior to touch interaction.
