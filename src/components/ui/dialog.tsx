"use client";
import * as React from "react";
import { Dialog as D } from "radix-ui";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Dialog = D.Root;
export const DialogTrigger = D.Trigger;
export const DialogClose = D.Close;
export const DialogTitle = D.Title;
export const DialogDescription = D.Description;

export function DialogContent({
  className, children, overlayClassName, hideClose, ...p
}: React.ComponentProps<typeof D.Content> & { overlayClassName?: string; hideClose?: boolean }) {
  return (
    <D.Portal>
      <D.Overlay className={cn("fixed inset-0 z-[100] bg-[rgba(10,8,6,.94)] data-[state=open]:animate-in data-[state=open]:fade-in-0", overlayClassName)} />
      <D.Content className={cn("fixed z-[101] focus:outline-none", className)} {...p}>
        {children}
        {!hideClose && (
          <D.Close aria-label="Close" className="absolute right-3 top-3 grid size-11 cursor-pointer place-items-center border border-white/30 bg-black/40 text-white hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-rose">
            <X className="size-5" aria-hidden />
          </D.Close>
        )}
      </D.Content>
    </D.Portal>
  );
}
