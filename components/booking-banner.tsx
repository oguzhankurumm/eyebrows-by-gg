"use client";

import * as React from "react";
import { X } from "lucide-react";
import { ExternalBookingLink } from "@/components/ui/external-booking-link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BookingBannerProps {
  href: string;
  title?: string;
  isFixed?: boolean;
  className?: string;
}

export function BookingBanner({
  href,
  title = "Ready for your best look?",
  isFixed = false,
  className,
}: BookingBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "w-full bg-background/95 backdrop-blur-md border-t border-champagne/30 py-4 px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50",
        isFixed && "fixed bottom-0 left-0 right-0 animate-in slide-in-from-bottom-10 duration-500 fade-in",
        className
      )}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl">
        <div className="flex items-start md:items-center justify-between w-full sm:w-auto gap-4">
            <div className="flex flex-col gap-0.5">
                <h3 className="font-serif text-xl font-medium text-foreground tracking-wide">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground font-sans flex items-center gap-1">
                   Secure booking via GlossGenius
                </p>
            </div>
            
            {isFixed && (
              <Button 
                variant="ghost" 
                size="icon-xs" 
                className="sm:hidden text-muted-foreground hover:text-foreground -mt-1 -mr-2"
                onClick={() => setIsVisible(false)}
              >
                <X className="size-4" />
              </Button>
            )}
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
            <ExternalBookingLink 
                href={href} 
                mode="direct"
                placement="booking_banner"
                showMicrocopy={false} 
                size="lg"
                className="w-full sm:w-auto shadow-none hover:shadow-md"
            />
             {isFixed && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden sm:inline-flex text-muted-foreground hover:text-foreground"
                onClick={() => setIsVisible(false)}
              >
                <X className="size-4" />
              </Button>
            )}
        </div>
      </div>
    </div>
  );
}
