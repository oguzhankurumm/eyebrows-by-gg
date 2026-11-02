# Eyebrows by GG redesign

## Phase 0 audit

The active Git repository is `web/`. Next.js 16.4.4 App Router, React 19, TypeScript, npm with package-lock, Tailwind 4. Static export with trailing slashes produces `web/out`; retain next.config.ts and existing deployment assumptions. The sibling Python generator and root HTML are historical handoff material, not the active application. No docs/previous-brief.md exists.

90 English routes: homepage, about, contact, services index and nine service routes, portfolio/photo gallery, seven area pages and their index, blog index, and educational/policy pages. JSON carries WordPress HTML, metadata and schema. Existing routing and local WebP portfolio images are reusable. GlossGenius handles appointments. Contact form validates input and opens mailto; it has no server endpoint. Preserve that behavior and explain it accurately.

Known facts: Gonul Gonenc (GG), brow/permanent makeup studio, 972 Boston Post Rd, Milford CT 06461; (203) 385-2243; info@eyebrowsbygg.com; Monday–Saturday 10am–8pm, Sunday closed. Sources: src/lib/site.ts, supplied content and CLIENT-QUESTIONS.md. No external research is needed to add facts.

## Why the rejected design fails

- Espresso, hot pink, blush and alternate inner-page colors compete; tokens and component hardcoded colors disagree.
- Extra-heavy grotesk typography and enormous pinned portfolio text overwhelm intimate facial work, particularly on phones.
- Marquees, smooth scrolling, scroll-word animation and pinned photography distract from selecting a service and booking.
- Long repetitive copy, inconsistent service names and conflicting prices make simple decisions difficult.
- Testimonials, medical claims and artist history lack independent evidence; WordPress shortcodes and inherited schema leak stale assumptions.

## Chosen direction

**The artist's edit.** A premium editorial portrait of one Milford artist, with unevenly sized photographs and restrained lavender-stone fields. The artist leads; actual brow results provide proof. No stock photography, promotional noise, repeated icon cards, or continuous scroll animation.

Five tokens only: background #F4F3F6; surface #E3DFEA; text #292633; accent #51425F; muted #665F70. Text and muted text must meet 4.5:1 on both light surfaces; background on accent must meet 4.5:1. Automated contrast calculations recorded in verification.

Prata display, Manrope body, self-hosted with swap. Display 44–96px, section 34–64px, lead 20–24px, body 16–18px, supporting 14px. Spacing: 4/8/12/16/24/32/48/64/96/128px. Controls radius 4px, image corners square; no repeated card containers or shadows. Page gutters 20px mobile, 6vw desktop, maximum content width 1320px. Visible focus, native details FAQ, ordinary document scrolling and reduced-motion support.

Homepage argument: brows should suit you (artist and result photographs); choose your finish (complete services); inspect the actual work (interactive original/result comparison); know what to expect (process); know your artist (GG); proof with no invented ratings (transparent review placeholder); resolve questions; find studio and book. Secondary pages share this vocabulary, with readable topic-specific copy replacing every inherited paragraph.

Taste direction: uneven-photographs, seed 518559780. Keep its asymmetric image composition and menu pricing. Override olive/bone and Sentient because brief calls for two Google/self-hosted font families and a cool mineral identity. Use only supplied photography; omit dealt desert/road atmosphere. No fabricated reviews, statistics, product recommendations, clinical promises, or exact healing instructions. Interactive feature: keyboard-accessible comparison of one supplied composite photograph, without fabricating a result.

## Explicit assumptions

- Current request replaces older fidelity rules in PRODUCT.md/PLAN.md: all visible copy and metadata are rewritten; all 90 URLs remain.
- User explicitly authorized existing AI portraits, then requested no visible AI label. They may appear as artist imagery, never as client-result evidence.
- Root ./docs is a symlink to web/docs so requested documents are accessible from handoff root and tracked in the actual Git repository.
- Baseline had extensive uncommitted application work. A baseline snapshot commit preserves it before redesign commits.
- Repository price conflicts remain unresolved. Uncontested menu prices are labeled as supplied prices; microblading/combo prices use explicit confirmation placeholders. Missing durations remain placeholders. GlossGenius supplies current availability and checkout details.
- Existing customer quotations have no source URLs. Replace with a clearly marked review placeholder rather than manufacture proof.
- Appointment suitability, preparation, healing and medical issues belong to an artist/clinician conversation. Rewrite educational routes as topic-specific consultation guides without adding clinical facts.
- No deployment is requested. No new runtime dependencies are necessary. Existing image tooling may create responsive WebP variants at build time; font files and licenses are committed.
- The audit itself changed no application code. Implementation proceeds without questions, as requested.

## Workflow and checks

Commit audit, shell/tokens, homepage and pages, copy cleanup, responsive/accessibility/SEO, then final validation. Run npm run lint, npm run typecheck, npm run build; render at 375/768/1440px; inspect navigation, comparison, form validation, FAQ, all exported internal links, headings, metadata and local assets. Independent finish review and design documentation follow Impeccable guidance.

## Copy and implementation pass

All 90 data records now contain rewritten titles, descriptions and plain structured copy. Old HTML, shortcodes, ratings, unsupported case counts and treatment promises are removed. Archived educational URLs are retained as concise topic-specific conversation guides; no fabricated clinical advice or product rankings. Policies are paraphrased from the supplied cancellation page. The homepage has six confirmed-price treatments; all nine service pages remain accessible from the service index. Unknown duration appears on seven service pages; the permanent-makeup overview has treatment-dependent pricing.

Removed unused scroll effects, UI wrappers, WordPress parsing and their direct dependencies. Responsive images use the sharp package already bundled with Next.js to create local 320/640/960/1440px variants, served through a custom next/image loader compatible with static export. No runtime dependency was added. Google Fonts Prata and Manrope are committed locally with OFL licenses and display=swap. AI source portraits are recorded in an internal asset ledger; no on-page AI label, per user direction.
