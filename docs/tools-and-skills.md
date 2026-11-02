# Tools and skills used

## Installed globally

- `npx skills add google/skills --global --yes --agent codex` completed. Google's catalog lists 180 skills. Applied `finding-google-skills` to select documentation guidance; `retrieving-developer-knowledge` requires a credential unavailable here. No Google Cloud service or analytics account was created. Google's official [web.dev video guidance](https://web.dev/articles/lazy-loading-video) was read directly: videos ship with posters, controls, `preload="none"` and no autoplay.
- [Instagram skills](https://github.com/sergebulaev/instagram-skills) installed at `/home/kdz/.codex/skills/instagram-skills`, including its nine nested skills. Applied audience-insights provenance rules and humanizer guidance to the short portfolio descriptions. This package is a marketing/read workflow, not a downloader. Actual read-only profile/media retrieval used the connected Composio ScrapeCreators tools. No posts, messages or account settings were changed.
- [Emil Kowalski skills](https://github.com/emilkowalski/skills): `emil-design-eng`, `mobile-native`, `apple-design`, `animation-performance` installed globally. Applied direct range tracking, brief response motion, transform-only reveals, coarse-pointer behavior, 16px form fields and reduced-motion handling.
- [Apple HIG skill](https://github.com/ykswang/apple-hig-skill) installed globally at `/home/kdz/.codex/skills/apple-hig`. Read iOS and tab-bar references. Four stable navigation destinations are separate from the booking action. Labels, current states and safe areas remain available on each page. This is a responsive website, not a native iOS app.
- Previously applied frontend-design, design-taste-frontend, Impeccable, copywriting and 21st-ui-build.

New global skills are available on subsequent Codex turns. Some unrelated pre-existing skills have malformed frontmatter; they were not edited.

## Requested resources and concrete decisions

| Resource | Use and result |
| --- | --- |
| [Godly](https://godly.website/) / [Recent](https://recent.design/) | Godly redirects to Recent. Reviewed the current design gallery as a reference for confident scale, image-led sections and clear interaction hierarchy. No third-party artwork copied. |
| [Fontshare](https://www.fontshare.com/) | Retrieved Satoshi's live CSS and compared its role with the approved system. Retained Sora + Manrope because the user explicitly asked to preserve them and cap font families at two. No unused third font shipped. |
| [Realtime Colors](https://www.realtimecolors.com/?colors=211c2e-f7f5fb-6341a5-e8e0f4-655b73) | Used the five-role palette preview model; automated WCAG calculations verify every shipping text/surface pair. Minimum ratio 4.97:1. |
| [React Bits](https://reactbits.dev/) | Retrieved AnimatedContent and Magnet source for behavior review. Adapted the one-shot AnimatedContent pattern to native WAAPI in Experience.tsx, preserving visible content and avoiding the GSAP dependency. No claim that a full React Bits package is installed. |
| [Lenis](https://github.com/darkroomengineering/lenis) | Added its small runtime at the user's request. Dynamically loaded for fine-pointer desktop use; ordinary touch scrolling remains native. Anchor offsets and cleanup are configured; reduced motion prevents setup. |
| [Squoosh](https://squoosh.app/) | Actually encoded the published Instagram profile image and seven portfolio posters with Squoosh CLI. Node 24's WASM/fetch path failed; an isolated Node 16 CLI run succeeded. Profile JPEG 60.97 KB became WebP 24.96 KB. No old Node runtime was added to the project. Responsive image variants still use existing sharp tooling. |
| [21st.dev](https://21st.dev/) | Searched Animated Navigation Tabs and Bento Grid Hero. Code retrieval was blocked by the account's 2/day free quota. Components were authored locally; no paid code or registry dependency was installed. |

## Media handling

Seven work-related Instagram posts and the published profile image were selected from a twelve-post response. Personal birthday/travel photographs were excluded. This is a curated website selection, not a claim to have archived the entire Instagram account. Four original portfolio videos are stored locally, resized to 540px wide, encoded for progressive loading and made silent. Every video has its original public post link, where the published audio remains available. No testimonial quote, clinical result claim or engagement statistic was invented.

The account biography matches the owner-provided 28 years of eyebrow threading, shape expert, licensed PMU artist CT, AAM Gold Certified NJ and makeup artist. A published profile image is provenance, not proof of how it was produced.
