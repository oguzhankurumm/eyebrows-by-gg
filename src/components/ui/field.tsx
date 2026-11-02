import * as React from "react";
import { Label as L } from "radix-ui";
import { cn } from "@/lib/utils";

const base =
  "w-full border border-[#bfb3a1] bg-white/60 px-4 py-3 font-sans text-base text-ink placeholder:text-[#8a8071] focus-visible:border-rose focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-rose aria-invalid:border-destructive";

export function Label({ className, ...p }: React.ComponentProps<typeof L.Root>) {
  return <L.Root className={cn("mb-1.5 block text-xs font-medium uppercase tracking-[.2em] text-[#6f665b]", className)} {...p} />;
}
export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  function Input({ className, ...p }, ref) { return <input ref={ref} className={cn(base, className)} {...p} />; },
);
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  function Textarea({ className, ...p }, ref) { return <textarea ref={ref} className={cn(base, "min-h-32", className)} {...p} />; },
);
export const Select = React.forwardRef<HTMLSelectElement, React.ComponentProps<"select">>(
  function Select({ className, ...p }, ref) { return <select ref={ref} className={cn(base, className)} {...p} />; },
);
