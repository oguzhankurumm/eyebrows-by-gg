# Asset provenance

No stock hotlinks or new generated images. Sources are the supplied repository assets.

- `public/assets/img/2023_*_portfolio-*.webp`: original client photographs, previously copied from the matching `site/assets/orig` portfolio files. Retain their composites, proportions and treatment detail. No synthetic client result is created.
- `gg-cover.webp`: supplied AI recreation, matching `site/assets/gg/gg-cover.png`.
- `gg-portrait.webp`: supplied AI recreation, matching `site/assets/gg/gg-portrait.png`.
- Original generation prompts were not included in the handoff. User explicitly authorized these existing AI images without visible labels on November 2, 2026.
- `public/assets/photos/*-{320,640,960,1440}.webp`: responsive size/encoding variants of the corresponding supplied image. `scripts/prepare-images.mjs` records dimensions and generates missing variants using Next.js's installed sharp package. No retouching or compositing.
- Prata and Manrope: Google Fonts font files from fonts.gstatic.com, with upstream OFL licenses in `src/assets/fonts`. Fonts are self-hosted via next/font/local with swap.
- Site icon: original minimal vector of two brow lines, authored for this redesign.

Image provenance sidecars record these origins. No public AI label is rendered, per user instruction. Portfolio publication consent remains a studio responsibility, as identified in the supplied CLIENT-QUESTIONS.md.
