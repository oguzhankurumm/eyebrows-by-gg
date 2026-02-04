"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PortfolioItem {
  src: string;
  alt: string;
  category: string;
}

interface PortfolioMasonryProps {
  items: PortfolioItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function PortfolioMasonry({ items, columns = 3, className }: PortfolioMasonryProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const handleOpen = (index: number) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () => setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  const handleNext = () => setSelectedIndex((prev) => (prev !== null && prev < items.length - 1 ? prev + 1 : prev));

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <section className={cn("container py-12", className)}>
      <div className={cn(
        "grid gap-6 md:gap-8",
        columns === 2 && "grid-cols-2",
        columns === 3 && "grid-cols-2 md:grid-cols-3",
        columns === 4 && "grid-cols-2 md:grid-cols-4"
      )}>
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[2rem] bg-muted shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
            onClick={() => handleOpen(index)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {/* Glass Caption */}
            <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-sm rounded-2xl p-3 text-center">
                <p className="text-foreground text-sm font-medium font-serif">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PortfolioLightbox
        item={selectedItem}
        isOpen={selectedIndex !== null}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={selectedIndex !== null && selectedIndex > 0}
        hasNext={selectedIndex !== null && selectedIndex < items.length - 1}
      />
    </section>
  );
}

interface LightboxProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

function PortfolioLightbox({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasNext,
  hasPrev,
}: LightboxProps) {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-full h-auto p-0 border-none bg-transparent shadow-none overflow-hidden sm:max-w-4xl">
        <DialogTitle className="sr-only">{item.alt}</DialogTitle>
        <DialogDescription className="sr-only">Image of {item.category}</DialogDescription>

        <div className="relative flex flex-col items-center justify-center w-full h-full max-h-[90vh]">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-50 text-white hover:bg-black/20 rounded-full md:-right-12 md:top-0"
            onClick={onClose}
          >
            <X className="size-6" />
            <span className="sr-only">Close</span>
          </Button>

          <div className="relative w-full aspect-[3/4] md:aspect-[4/3] max-h-[70vh] bg-black/50 rounded-3xl overflow-hidden flex items-center justify-center">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />

            {hasPrev && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white hover:bg-black/20 rounded-full h-12 w-12 border border-white/10 backdrop-blur-sm transition-all"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
              >
                <ChevronLeft className="size-8" />
                <span className="sr-only">Previous</span>
              </Button>
            )}

            {hasNext && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white hover:bg-black/20 rounded-full h-12 w-12 border border-white/10 backdrop-blur-sm transition-all"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
              >
                <ChevronRight className="size-8" />
                <span className="sr-only">Next</span>
              </Button>
            )}
          </div>

          <div className="w-full bg-background/90 backdrop-blur-xl p-6 rounded-[2rem] mt-4 text-center border border-white/20 shadow-lg">
            <h3 className="font-serif text-xl font-medium">{item.category}</h3>
            <p className="text-muted-foreground text-sm">{item.alt}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
