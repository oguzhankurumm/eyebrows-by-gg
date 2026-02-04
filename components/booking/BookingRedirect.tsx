'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { services } from '@/lib/services';
import { trackRedirect } from '@/lib/analytics';
import { buildExternalLink } from '@/lib/links';

// Default booking URL if no specific service is selected
const DEFAULT_BOOKING_URL = 'https://eyebrowsbygg.glossgenius.com/services';

function RedirectContent() {
  const searchParams = useSearchParams();
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Animation for "Redirecting..."
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const serviceSlug = searchParams.get('service');
    const placement = searchParams.get('placement') || undefined;
    const sourcePage = searchParams.get('sourcePage') || undefined;
    
    const service = services.find(s => s.slug === serviceSlug);
    
    // Determine destination URL
    // If a service is found, use its specific URL, otherwise use default
    // Check if 'destination' param is provided to override
    const explicitDestination = searchParams.get('destination');
    const baseUrl = explicitDestination || service?.glossgeniusUrl || DEFAULT_BOOKING_URL;
    
    // Build the final URL with preserved parameters
    // We pass the current searchParams to preserve UTMs
    const destinationUrl = buildExternalLink(baseUrl, searchParams);

    // Track the redirect event
    trackRedirect(serviceSlug || undefined, destinationUrl, searchParams, { placement, page: sourcePage });

    // Execute redirect with a small delay for UX
    const timer = setTimeout(() => {
      window.location.href = destinationUrl;
    }, 400); // Reduced to 400ms for snappier experience while maintaining context

    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center px-4 animate-in fade-in duration-500">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
        <Loader2 className="h-16 w-16 text-primary animate-spin relative z-10" />
      </div>
      
      <div className="space-y-2 max-w-md">
        <h1 className="text-2xl font-serif font-bold tracking-tight">
          Opening Booking{dots}
        </h1>
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4 text-green-600" />
          Securely connecting you to GlossGenius.
        </p>
      </div>

      <p className="text-xs text-muted-foreground/60 pt-8">
        If you are not automatically redirected,{' '}
        <a 
          href={DEFAULT_BOOKING_URL} 
          className="underline hover:text-primary transition-colors"
        >
          click here
        </a>
      </p>
    </div>
  );
}

export function BookingRedirect() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-muted-foreground" /></div>}>
      <RedirectContent />
    </Suspense>
  );
}
