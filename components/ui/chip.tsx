import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const chipVariants = cva(
    "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                glass: "bg-white/20 backdrop-blur-md border border-white/30 text-foreground hover:bg-white/30",
                primary: "bg-primary/10 text-primary hover:bg-primary/20",
                accent: "bg-accent text-accent-foreground hover:bg-accent/80",
            },
            size: {
                default: "h-8 px-4 py-1",
                sm: "h-6 px-3 text-xs",
                lg: "h-10 px-6 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ChipProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
    active?: boolean
}

function Chip({ className, variant, size, active, ...props }: ChipProps) {
    return (
        <div
            className={cn(
                chipVariants({ variant, size }),
                active && "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
                className
            )}
            {...props}
        />
    )
}

export { Chip, chipVariants }
