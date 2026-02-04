export function buildExternalLink(destination: string, currentSearchParams: Readonly<URLSearchParams> | null): string {
  try {
    const isRelative = destination.startsWith('/');
    const base = isRelative ? 'http://dummy.com' : undefined;
    const url = new URL(destination, base);

    if (currentSearchParams) {
      currentSearchParams.forEach((value, key) => {
        // Preserve all params, or filter for UTMs if stricter control is needed.
        // For now, preserving all is standard for marketing continuity.
        if (!url.searchParams.has(key)) {
          url.searchParams.set(key, value);
        }
      });
    }

    return isRelative ? url.pathname + url.search : url.toString();
  } catch {
    console.error('Invalid destination URL:', destination);
    return destination;
  }
}
