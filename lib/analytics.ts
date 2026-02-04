type PlausibleArgs = [string, { props?: Record<string, string | number | boolean> } | undefined];

declare global {
  interface Window {
    plausible: (...args: PlausibleArgs) => void;
  }
}

export interface RedirectEvent {
  service?: string;
  destination: string;
  timestamp: string;
  placement?: string;
  page?: string;
  params: Record<string, string>;
}

export function trackEvent(eventName: string, props?: Record<string, string | number | boolean>) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props });
  }

  if (process.env.NODE_ENV === 'development') {
    console.group(`📊 [Analytics] ${eventName}`);
    console.log('Props:', props);
    console.groupEnd();
  }
}

export function trackRedirect(
  serviceSlug: string | undefined, 
  destinationUrl: string, 
  searchParams: URLSearchParams,
  context?: { placement?: string; page?: string }
) {
  // Extract all params into a record
  const params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  trackEvent('Book Click', {
    service: serviceSlug || 'Global',
    destination: destinationUrl,
    placement: context?.placement || 'Unknown',
    page: context?.page || 'Unknown',
    ...params
  });
}
