"use client";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export interface Shot { src: string; alt: string; w: number; h: number }

export function PortfolioGrid({ shots }: { shots: Shot[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + shots.length) % shots.length)),
    [shots.length],
  );
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, step]);
  const cur = open === null ? null : shots[open];
  return (
    <>
      <div className="sheet">
        {shots.map((s, i) => (
          <button key={s.src} type="button" aria-label={`Open photo ${i + 1} of ${shots.length}: ${s.alt}`} onClick={() => setOpen(i)}>
            <img src={s.src} alt={s.alt} width={s.w} height={s.h} loading="lazy" />
          </button>
        ))}
      </div>
      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="inset-0 flex items-center justify-center p-4" aria-describedby={undefined}>
          <DialogTitle className="sr-only">{cur?.alt ?? "Photo"}</DialogTitle>
          <DialogDescription className="sr-only">Use left and right arrow keys to browse photos.</DialogDescription>
          {cur && <img src={cur.src} alt={cur.alt} className="max-h-[92vh] max-w-full object-contain" />}
          <button type="button" aria-label="Previous photo" onClick={() => step(-1)} className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 cursor-pointer place-items-center border border-white/30 bg-black/40 text-white"><ChevronLeft aria-hidden /></button>
          <button type="button" aria-label="Next photo" onClick={() => step(1)} className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 cursor-pointer place-items-center border border-white/30 bg-black/40 text-white"><ChevronRight aria-hidden /></button>
        </DialogContent>
      </Dialog>
    </>
  );
}
