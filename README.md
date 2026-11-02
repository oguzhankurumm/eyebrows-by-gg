# Eyebrows by GG

Rounded brow and beauty-studio website built with Next.js 16, React, TypeScript and Tailwind. Static export preserves 90 existing URLs. Local self-hosted fonts, responsive WebP photographs, original Instagram portfolio films and GlossGenius booking.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The contact form prepares an email in the visitor's email app; it does not submit to a backend.

## Verify and export

```sh
npm run lint
npm run typecheck
npm run build
npm run verify:export
npm run verify:source
python3 -m http.server 4178 --directory out
```

`npm run build` produces `out/` and creates missing responsive image variants. `verify:export` checks all routes, links/assets, metadata, headings, schema and AA contrast. `verify:source` checks the complete internal original-text archive, retention of all 90 routes and absence of the rejected public source panel. It does not assert word-for-word public coverage. The source proof uses Python's standard library and the original handoff baseline at ../site/data/pages.json. It checks the internal archive, not public old-copy coverage.

`npm run sync:source` refreshes the internal live-source archive and the coverage report. It requires network access and the handoff's `../site/data/pages.json`; ordinary builds do not fetch the old site or Instagram. See CLAUDE.md before changing content or deployment.

## Handoff

- [Current brief](docs/current-brief.md)
- [Redesign plan](docs/redesign-plan.md)
- [Competitive SWOT](docs/competitive-swot.md)
- [Original content proof](docs/content-parity.md)
- [Missing content](docs/todo-content.md)
- [Media provenance](docs/assets.md)
- [Tools and skills](docs/tools-and-skills.md)
- [Design system](DESIGN.md)

Production deployment needs fresh explicit user approval. This repository's Vercel configuration is preserved; do not deploy a failing build.
