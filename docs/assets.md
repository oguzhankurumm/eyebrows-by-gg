# Asset provenance

No stock hotlinks or newly generated images. Active media comes from the supplied portfolio and the studio’s published Instagram account.

- `public/assets/img/2023_*_portfolio-*.webp`: original client photographs, previously copied from the matching `site/assets/orig` portfolio files. Retain their composites, proportions and treatment detail. No synthetic client result is created.
- `gg-cover.webp`: supplied AI recreation, matching `site/assets/gg/gg-cover.png`.
- `gg-portrait.webp`: supplied AI recreation, matching `site/assets/gg/gg-portrait.png`.
- Original generation prompts were not included in the handoff. User explicitly authorized these existing AI images without visible labels on November 2, 2026.
- `public/assets/photos/*-{320,640,960,1440}.webp`: responsive size/encoding variants of the corresponding supplied image. `scripts/prepare-images.mjs` records dimensions and generates missing variants using Next.js's installed sharp package. No retouching or compositing.
- Sora and Manrope: Google Fonts font files from fonts.gstatic.com, with upstream OFL licenses in `src/assets/fonts`. Fonts are self-hosted via next/font/local with swap.
- Site icon: original minimal vector of two brow lines, authored for this redesign.

Image provenance sidecars record these origins. No public AI label is rendered, per user instruction. Portfolio publication consent remains a studio responsibility, as identified in the supplied CLIENT-QUESTIONS.md.

## Final active media selection

The later request identified the first image selections as wrong. Active artist images now use `gg-instagram.webp`, retrieved from the official account's published profile image. This establishes the published identity source, not how the photo was originally produced. Earlier AI source files are retained to honor the no-deletion instruction, but are not the active artist portrait or OG image.

Seven business-related Instagram posters are served locally; four corresponding films have controls, posters, no preload/autoplay and no audio. Personal pinned posts were excluded. Exact source URLs, SHA-256 hashes and video processing are in docs/audit/media-provenance.json. Henna tinting has no verified matching client photograph; its active service illustration is a clean typographic graphic. Threading imagery now maps to a post explicitly captioned as threading. No nano-brow result is labeled as threading.
