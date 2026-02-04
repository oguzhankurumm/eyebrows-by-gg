import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "default" | "glass" | "elevated" | "glow"
    spacing?: "default" | "compact" | "none"
    container?: boolean
    width?: "default" | "wide" | "narrow"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, variant = "default", spacing = "default", container = true, width = "default", children, ...props }, ref) => {

        const variants = {
            default: "bg-transparent",
            glass: "glass relative overflow-hidden",
            elevated: "bg-card shadow-lg relative z-10",
            glow: "relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-radial before:from-primary/5 before:to-transparent before:-z-10",
        }

        const spacings = {
            default: "py-16 md:py-24 lg:py-32",
            compact: "py-10 md:py-16",
            none: "py-0",
        }

        // Width classes to be applied to the inner container
        const widthClasses = {
            default: "container max-w-7xl mx-auto px-4 md:px-8",
            wide: "container-wide", // Defined in globals.css
            narrow: "container max-w-4xl mx-auto px-4 md:px-8",
        }

        return (
            <section
                ref={ref}
                className={cn(
                    variants[variant],
                    spacings[spacing],
                    className
                )}
                {...props}
            >
                {variant === 'glow' && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
                )}

                {container ? (
                    <div className={widthClasses[width]}>
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        )
    }
)
Section.displayName = "Section"

export { Section }
