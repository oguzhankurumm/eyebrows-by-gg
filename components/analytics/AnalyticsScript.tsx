'use client';

import Script from 'next/script';

export function AnalyticsScript() {
  return (
    <Script
      defer
      data-domain="eyebrowsbygg.com"
      src="https://plausible.io/js/script.tagged-events.js"
      strategy="afterInteractive"
    />
  );
}
