import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "frosted" | "neo"
    hoverEffect?: boolean
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, variant = "default", hoverEffect = true, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative overflow-hidden transition-all duration-300",
                    "rounded-[2rem] md:rounded-[2.5rem]", // High radius enforcement form design system

                    variant === "default" && "glass", // Uses glboal .glass utility

                    variant === "frosted" && "bg-white/30 backdrop-blur-md border border-white/20 shadow-sm dark:bg-black/20 dark:border-white/5",

                    variant === "neo" && "bg-secondary/50 backdrop-blur-3xl border border-white/10 shadow-inner",

                    hoverEffect && "hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-white/60 dark:hover:border-white/20",

                    className
                )}
                {...props}
            >
                {/* Shine effect on hover could go here */}
                {children}
            </div>
        )
    }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
