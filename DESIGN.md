# Design: shade library

Dark espresso field, one heavy grotesk, whole fields of flat colour, GG's real photographs at scale. No serif, no cream, no hairlines, no gradients, no shadows at rest.

## Tokens
- Ground `#1a1211` (espresso), ink `#f6eeea`, accent lip `#ff4d74` (text on light `#c4123f`), walnut `#4b2d24`, ash `#e8dcd3`, blush `#ffc9c9`.
- Inner pages flip to a light ground `#ede4dc` with espresso ink; heroes stay espresso.
- Type: Schibsted Grotesk only. Display 800, tracking -0.045 to -0.07em, leading .82-.95, max 6rem (inner) / 13rem (pinned title). Body 400, 17-19px, 66ch.
- Buttons: square, 2px edge, sentence case, accent fill. One shape everywhere.

## Signature moves
1. Hero window: GG's photo opens from a portrait window to full bleed on scroll (`--p`, motion useScroll); real before/after columns drift beside it.
2. Pinned poster: "Our Portfolio" holds while eight real client photos pass (`position: sticky`, difference blend).
3. Live thing: before/after slider on real client pairs (native range input, keyboard accessible).
4. Services as giant type with a cursor-following photo preview; prices verbatim.
5. Closing band is one word, "Book", and the whole band is the link.

## Stack
Next.js 16 static export, Tailwind v4, Radix (accordion, dialog), react-hook-form + zod (contact), motion, lenis, shadcn-style primitives in `src/components/ui`.

## Rules kept
Copy, URLs, titles, descriptions, canonicals, JSON-LD identical to the old site (90/90 verified). Reduced motion respected (hero opens, marquee stops, smooth scroll off).
