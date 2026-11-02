# Booking integration

## Verified constraint

On November 2, 2026 the public GlossGenius services response included this Content-Security-Policy directive:

```
frame-ancestors 'self' https://*.glossgenius.com https://*.glossgenius-staging.com
```

The website origin is not allowed to frame the booking service. Shipping an iframe would produce a blocked panel. The marketing page mentions booking widgets, but no usable authorized embed for this account was exposed. No reverse proxy or policy bypass is used.

## Implemented flow

Existing booking links remain normal links for progressive enhancement. With JavaScript, an accessible native dialog with an inline native-radio treatment list previews the verified 28-service menu. It states that selection must be confirmed in GlossGenius and that no reservation occurs on this website. A direct user action opens a centered booking window on desktop; mobile browsers may open a tab. The original site stays open. The new window's opener is cleared before navigation. Browsers that block the popup get a clear status and a manual new-tab link.

The dialog supports keyboard focus containment, Escape, close-button dismissal, backdrop dismissal and return focus to its triggering link. Its mobile layout is a rounded bottom sheet. Its entrance is opacity-only, keeping picker geometry stable; reduced motion removes that animation. The treatment list remains open during selection, avoiding the reported browser dropdown dismissal. No account, payment, appointment or external message is created by this code.

Current menu snapshots contain only public names, prices, durations and deposit amounts. No raw SSR account payload, token or private identifier is committed. Local treatment preview is not represented as a transmitted booking selection; the observed booking flow uses its own origin state.

## Sources

[GlossGenius public services](https://eyebrowsbygg.glossgenius.com/services), [GlossGenius online-booking overview](https://glossgenius.com/online-booking), [MDN window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open), [Google Maps attribution guidance](https://developers.google.com/maps/documentation/places/web-service/policies).

The Google Maps panel and selected review excerpts identify the source and link to the original business/reviews. Review selection is disclosed and no self-serving aggregateRating markup is emitted.
