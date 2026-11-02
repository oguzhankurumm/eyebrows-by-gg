import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 border font-sans text-sm font-medium uppercase tracking-[.14em] no-underline transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-rose disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-rose border-rose text-white hover:bg-[#9d1148] hover:border-[#9d1148]",
        ghost: "bg-transparent border-ink text-ink hover:bg-ink hover:text-white",
        light: "bg-transparent border-[#6a6157] text-paper hover:bg-paper hover:text-ink",
      },
      size: { default: "px-6.5 py-4", sm: "px-4.5 py-3 text-xs", lg: "px-8 py-5" },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
