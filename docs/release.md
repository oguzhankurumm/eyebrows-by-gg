# Production release — November 2, 2026

Status: **READY**, confirmed by Vercel deployment output and `vercel inspect`.

- Production: https://eyebrowsbygg.vercel.app
- Immutable deployment: https://eyebrowsbygg-jw4tchhg1-oguzhans-projects-852075c5.vercel.app
- Deployment ID: `dpl_BxFu64zGEJS7a1XghCigyaie61DG`
- Project: `eyebrowsbygg` / `prj_vOFvDHePixQZOCTsNeiAjOdoBjKv`
- Scope: `oguzhans-projects-852075c5`
- Published source commit: `49f72ea40d90f9723b491d8a3229f09ee73ead34`
- GitHub branch: https://github.com/oguzhankurumm/eyebrows-by-gg/tree/redesign-studio-2026-11-02

The GitHub repository's existing main has independent history. This release was pushed to the new redesign branch; no force push or remote-history replacement was used. The production project is the user-specified eyebrowsbygg project, rather than the older repository homepage URL.

## Included corrections

The public Original website reference panel is removed from every route. Historical bodies remain in the internal audit archive. The booking picker uses a stable expandable radio list; pointer, arrow-key selection and focus cycling pass at 375/768/1440 with normal and reduced motion. GlossGenius opens in a secure separate window after the on-site preview, with a new-tab fallback.

The release also includes the rounded Sora/Manrope studio design, verified studio/Instagram photographs and silent films, owner-supplied credentials, the 28-item current menu, four attributed Google Maps review excerpts, verified location/hours, responsive image variants and updated SEO.

## Checks before publishing

- `npm run lint` — pass.
- `npm run typecheck` — pass.
- `npm run build` — pass, 95 generated pages/endpoints.
- `npm run verify:export` — pass, 90 routes and 3,275 local links/assets, headings, metadata, JSON-LD and AA contrast.
- `npm run verify:source` — pass, 90 archived original bodies, all retained routes, no public source panel.
- Browser: 30 representative route/width combinations; no overflow, broken images or JavaScript errors. Picker regression: six motion/width combinations pass.
- Independent full finish review: ship. Design documentation and machine-readable sidecar completed.

After the final build, `out/` was inspected for the linked project identity, representative pages, assets, sitemap, robots and deployment config. Environment files were excluded from the upload; private CLI state is outside the public export. Production deployment command, run from `out/`:

```
vercel deploy --prod --yes --scope oguzhans-projects-852075c5
```

Production status and aliases were verified through Vercel metadata. No post-deploy HTTP/browser smoke test was run. Local Chromium checks do not prove actual iPhone/Safari hardware behavior. No appointment, payment or external email was submitted.

This record is a documentation-only commit after publishing; it does not alter the deployed website artifact. Future changes need their own appropriate release authorization.
