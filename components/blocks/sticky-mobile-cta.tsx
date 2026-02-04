"use client";

import * as React from "react";
import { X } from "lucide-react";
import { ExternalBookingLink } from "@/components/ui/external-booking-link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StickyMobileCTAProps {
  label: string;
  href: string;
  subtext?: string;
  className?: string;
}

export function StickyMobileCTA({ label, href, subtext, className }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = React.useState(false); // Default hidden to prevent flash
  
  React.useEffect(() => {
    // Check session storage on mount
    const dismissed = sessionStorage.getItem("sticky-cta-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("sticky-cta-dismissed", "true");
  };

  return (
    <div className={cn("fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border z-50 md:hidden animate-in slide-in-from-bottom-10 fade-in duration-500", className)}>
      <div className="relative max-w-sm mx-auto">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute -top-12 right-0 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm text-muted-foreground hover:text-foreground"
          onClick={handleDismiss}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <ExternalBookingLink 
          href={href} 
          mode="direct"
          placement="sticky_mobile"
          label={label}
          microcopyText={subtext}
          showMicrocopy={!!subtext}
          className="w-full shadow-lg"
        />
      </div>
    </div>
  );
}
