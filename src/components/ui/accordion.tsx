"use client";
import * as React from "react";
import { Accordion as A } from "radix-ui";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = A.Root;

export function AccordionItem({ className, ...p }: React.ComponentProps<typeof A.Item>) {
  return <A.Item className={cn("border-t border-ink py-1", className)} {...p} />;
}

export function AccordionTrigger({ className, children, ...p }: React.ComponentProps<typeof A.Trigger>) {
  return (
    <A.Header className="m-0">
      <A.Trigger
        className={cn(
          "group flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left font-serif text-[22px] leading-tight font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose",
          className,
        )}
        {...p}
      >
        {children}
        <Plus className="size-5 shrink-0 text-rose transition-transform duration-200 group-data-[state=open]:rotate-45" aria-hidden />
      </A.Trigger>
    </A.Header>
  );
}

export function AccordionContent({ className, children, ...p }: React.ComponentProps<typeof A.Content>) {
  return (
    <A.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...p}>
      <div className={cn("max-w-[68ch] pb-5", className)}>{children}</div>
    </A.Content>
  );
}
