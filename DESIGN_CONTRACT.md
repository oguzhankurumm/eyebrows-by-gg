# DESIGN CONTRACT & SOURCE OF TRUTH (v1.0)
**Theme**: "Ethereal Confidence" (2026 Premium Beauty)
**Strict Enforcement**: NO Gold, High Radius, Glassmorphism, Editorial Typography.

## 1. COLOR TOKENS (HSL)
All colors must use these tokens. No hex codes allowed in components.

### Base / Neutrals
- **Background**: `bg-background` (Soft Pearl: `hsl(30 20% 99%)`)
- **Foreground**: `text-foreground` (Anthracite: `hsl(260 10% 15%)`)
- **Card**: `bg-card` (Pure White: `hsl(0 0% 100%)`)
- **Muted**: `bg-muted` (`hsl(30 5% 94%)`) / `text-muted-foreground` (`hsl(260 5% 50%)`)
- **Border**: `border-border` (`hsl(260 5% 92%)`)

### Brand
- **Primary**: `bg-primary` (Dusty Orchid: `hsl(330 25% 55%)`)
- **Accent**: `bg-accent` (Faint Berry Mist: `hsl(330 30% 96%)`)
- **Secondary**: `bg-secondary` (Warm Grey: `hsl(30 10% 96%)`)

### Forbidden Colors
- ❌ GOLD / YELLOW / BRASS
- ❌ PURE BLACK (`#000000`)
- ❌ NEON PINK/GREEN

## 2. RADIUS TOKENS (Rounded)
Everything must appear soft and organic.

- **Standard Cards**: `rounded-[2rem]` (32px) or `rounded-3xl`
- **Buttons/Actions**: `rounded-full` (Pill shape mandatory)
- **Images**: `rounded-[2.5rem]` or matches container.
- **Inputs**: `rounded-full` or `rounded-2xl` minimum.
- ❌ No small radius (`rounded-md`, `rounded-sm`) on main UI elements.
- ❌ No mixed radius (e.g., top-left 0, top-right 20px) unless distinct layout reason.

## 3. GLASSMORPHISM (The Lens)
Use the `GlassCard` or `Section(variant="glass")` primitives.

- **Class**: `glass` / `glass-panel`
- **Properties**: `bg-white/70 backdrop-blur-xl border-white/40 shadow-xl`
- **Glows**: `bg-primary/20 blur-[100px]` (Ambient Bloom)

## 4. TYPOGRAPHY (Editorial)
Self-hosted only.

- **Headings**: `Manrope` (`font-display`)
  - `h1`: `text-5xl md:text-7xl font-semibold tracking-tight`
  - `h2`: `text-4xl md:text-5xl font-medium`
  - `h3`: `text-2xl md:text-3xl font-medium`
- **Body**: `Inter` (`font-body`)
  - `text-base` or `text-lg`
  - `text-muted-foreground` for subtext.
- ❌ No Google Fonts imports (verify `layout.tsx`).
- ❌ No serif override unless specific "italic" accent span.

## 5. SPACING RHYTHM
- **Section Padding**: `py-24` or `py-32` (Breathing room)
- **Grid Gap**: `gap-6` or `gap-12`
- **Container**: `container` or `container-wide`

## 6. COMPONENT RULES

### Navbar
- **Shape**: Floating Capsule (Glass)
- **Position**: `fixed top-6 left-0 right-0 z-50`
- **Links**: Pill-shaped hover states

### Buttons
- **Shape**: `rounded-full` (ALWAYS)
- **Height**: `h-11` (Default), `h-14` (Large)
- **Micro-interaction**: `hover:scale-105 active:scale-95`

### Cards
- **Hover**: Lift effect (`hover:-translate-y-1`)
- **Border**: Subtle (`border-border/40`)

## 7. IMAGERY & MEDIA
- **Style**: Editorial, Natural, "Old Money" aesthetic.
- **Treatment**: High radius masking.
- **Tone**: Warm/Neutral.

---
**ENFORCEMENT SCRIPT**:
1. Search code for `#` (Hex) -> Fail if not in allowlist.
2. Search code for `rounded-md`, `rounded-sm` -> Flag for review.
3. Check for `style={{}}` inline overrides.
