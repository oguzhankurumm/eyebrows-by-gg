"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ExternalBookingLink } from "@/components/ui/external-booking-link";
import { GalleryItem } from "@/data/gallery-items";
import Image from "next/image";


interface LightboxProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function Lightbox({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasNext,
  hasPrev,
}: LightboxProps) {
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && hasNext) {
      onNext();
    } else if (isRightSwipe && hasPrev) {
      onPrev();
    }
  };

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-4xl w-full h-auto p-0 border-none bg-transparent shadow-none overflow-hidden sm:max-w-4xl focus:outline-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <DialogTitle className="sr-only">
          {item.alt}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Image of {item.category}
        </DialogDescription>

        <div className="relative flex flex-col items-center justify-center w-full h-full max-h-[90vh]">
          {/* Close Button - Custom positioning */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-50 text-white hover:bg-black/20 rounded-full md:-right-12 md:top-0"
            onClick={onClose}
          >
            <X className="size-6" />
            <span className="sr-only">Close</span>
          </Button>

          {/* Image Container */}
          <div className="relative w-full aspect-[3/4] md:aspect-[4/3] max-h-[70vh] bg-black/50 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P//fwAJCAGCLc8tJwAAAABJRU5ErkJggg=="
            />

            {/* Navigation Buttons */}
            {hasPrev && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 rounded-full h-10 w-10 md:h-12 md:w-12"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
              >
                <ChevronLeft className="size-6 md:size-8" />
                <span className="sr-only">Previous</span>
              </Button>
            )}

            {hasNext && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 rounded-full h-10 w-10 md:h-12 md:w-12"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
              >
                <ChevronRight className="size-6 md:size-8" />
                <span className="sr-only">Next</span>
              </Button>
            )}
          </div>

          {/* Caption & CTA */}
          <div className="w-full bg-background p-6 rounded-b-lg md:rounded-lg mt-0 md:mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">What you&apos;re seeing</p>
              <h3 className="font-serif text-xl font-medium">{item.category}</h3>
              <p className="text-muted-foreground text-sm">{item.alt}</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="font-serif text-sm font-medium text-foreground">Inspired by this result?</p>
              <ExternalBookingLink
                href="https://eyebrowsbygg.glossgenius.com/services"
                mode="interstitial"
                placement="portfolio_lightbox"
                label="Book a similar look"
                size="sm"
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
