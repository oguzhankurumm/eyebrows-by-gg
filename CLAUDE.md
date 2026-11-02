# Eyebrows by GG: current working instructions

## Repository and authority

Work in `/home/kdz/Desktop/Projects/eyebrowsbygg-handoff/web`, the Git repository. The parent directory is a handoff folder, not a Git repository. `../docs` is a symlink to this repository's docs. Read `AGENTS.md` and installed Next.js documentation before changing framework behavior.

The user approved rewritten copy and metadata on November 2, 2026. `../PROMPT.md` was updated; `docs/current-brief.md` preserves the same decision in Git. Old verbatim-copy/title/description/schema rules and the shade-library/magazine-cover designs are superseded. Do not restore legacy.css, HeroWindow, SmoothScroll, Marquee, ScrollWords or ServiceMenu.

## Current product and visual requirements

- Slogan: **Let’s touch your beauty**.
- Preserve the rounded beauty-studio direction: Sora + Manrope, five color tokens in globals.css, rich service/artist/video sections, mobile bottom navigation and reachable booking.
- Exact artist facts supplied by the owner and matched to Instagram: 28 years of eyebrow threading experience; shape expert; licensed PMU artist in CT; AAM Gold Certified in NJ; makeup artist. Do not turn this into 28 years of PMU experience.
- Active profile and portfolio imagery comes from the studio's own published Instagram media. Every selected item has a source link and provenance ledger. Retained earlier AI files are not the active artist portrait. Do not invent or relabel treatment results.
- No invented prices, customer quotes, review counts, certifications, medical promises or appointment lengths. Source decisions and completed content items are recorded in docs/todo-content.md.
- The user approved the current GlossGenius menu as the sole price/duration authority. All 28 listings are in src/data/booking-menu.json. Keep old prices only in the internal historical archive. Microblading has no separate current listing. Dead legacy targets are documented in docs/content-parity.md.

## Stack and behavior

Next.js 16.4.4 App Router, React 19, TypeScript, npm, static export with trailing slashes. Keep deployment configuration. `npm run build` prepares local responsive images, then produces `out/`. `next start` is not the serving path for static export; use a static server for production QA.

GlossGenius: https://eyebrowsbygg.glossgenius.com/services. Contact form validates and prepares a `mailto:` message; it does not submit to a server. Phone (203) 385-2243; info@eyebrowsbygg.com; 972 Boston Post Rd, Milford CT 06461. Hours Monday–Friday 10am–6:30pm; Saturday 10am–4pm, Sunday closed.

Lenis loads for fine-pointer desktops only. Touch scrolling remains native. Reduced-motion disables smoothing and authored motion. Before/after uses an accessible native range and original composite photo. Mobile has four navigation destinations plus a separate booking action; keep safe-area and footer clearance.

## Original-site preservation

All 90 original URLs remain with rewritten marketing copy and metadata. The user explicitly rejected the public Original website reference section; it is removed from every route. Complete handoff/live bodies and 365 source FAQ entries remain in the internal audit archive, not on the public website. Do not claim that all old copy still ships publicly. Current services, artist, contact, hours, policy and reviews use the approved current sources.

- `src/data/pages.json`: current rewritten content/metadata.
- `src/data/source-pages.json`: sanitized retained source bodies and source hashes.
- `docs/content-parity.md` and `docs/audit/content-coverage.json`: per-route proof.
- `docs/competitive-swot.md`: nearby competitor analysis and resulting changes.
- `docs/assets.md`, `docs/audit/media-provenance.json`: media origins.
- `docs/tools-and-skills.md`: actual skill/resource use, failures and adaptations.

`npm run sync:source` retrieves live WordPress pages/posts, sanitizes bodies and updates the proof. It needs network access and the parent handoff source JSON. It removes scripts/styles/booking shortcodes, not informational paragraphs. Never render raw fetched HTML without the sanitizer. Do not silently turn dead references into invented URLs.

## Required verification

Run `npm run lint`, `npm run typecheck`, `npm run build`, `npm run verify:export`, `npm run verify:source`. Verify 375/768/1440px, menu/Escape/focus, filters, range keyboard control, native FAQ, form errors/mailto preparation, video playback and reduced motion. Browser QA results live in docs/audit/browser-results.json; captures live in ignored .impeccable/review/. Wait for lazy images to load before capturing. Desktop emulation does not prove actual iPhone hardware behavior.

Read DESIGN.md and .impeccable/design.json for the final built system. A fresh independent finish review is required before handoff after material visual changes. No external messages, Instagram publication or account modifications are authorized by this website task.

## Deployment boundary

The user reported the previous uncommitted working tree at https://eyebrowsbygg.vercel.app, scope `oguzhans-projects-852075c5`. The user explicitly authorized committing, pushing and publishing this release on November 2, 2026, after the source-panel and treatment-picker corrections. That authorization covers this release. Future production deployments require appropriate new authorization; do not infer it from an earlier release.

When approved: run `npm run build`, inspect `out/`, then deploy from `out/` with `vercel deploy --prod --yes --scope oguzhans-projects-852075c5`. Preserve public/vercel.json. If routes change, update sitemap generation and verify the exported sitemap and robots. Never publish a failing build.

## Booking and current source updates

BookingDialog previews public menu values, then opens GlossGenius in a separate secure window with a manual new-tab fallback. GlossGenius CSP blocks cross-origin iframe embedding; do not replace this flow with a broken iframe or proxy bypass. Native dialog focus/Escape/return behavior is required. Current cancellation policy: 30% for no-shows or cancellations within 48 hours. Google Maps hours differ from booking availability; use public hours for location. Reviews require attribution, individual source/profile links and dated snapshot language. See docs/booking-integration.md.

## Latest feedback: source panel and picker

Never reintroduce the public Original website reference panel. It was explicitly rejected. The preserved source component was moved to docs/archive/SourceReference.tsx.txt; source data stays internal. The treatment picker is an inline expandable native-radio list, not a native popup select. Verify real pointer and keyboard interactions with normal motion; programmatic selectOption alone did not cover the reported bug.

GitHub remote: https://github.com/oguzhankurumm/eyebrows-by-gg. The existing remote main has independent history. This release is pushed to redesign-studio-2026-11-02, preserving that history. Production deployment targets the user-specified eyebrowsbygg project in oguzhans-projects-852075c5, not the older repository homepage URL.

Current release published successfully: https://eyebrowsbygg.vercel.app, deployment dpl_BxFu64zGEJS7a1XghCigyaie61DG, source commit49f72ea. See docs/release.md for checks and scope limits. Future changes are not automatically covered by this release’s authorization.
