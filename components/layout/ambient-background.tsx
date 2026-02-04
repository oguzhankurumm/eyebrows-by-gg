"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-background">
            {/* Primary Glow - Top Left */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.4, 0.3],
                    x: [0, 20, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-accent blur-[120px] rounded-full opacity-30"
            />

            {/* Secondary Glow - Bottom Right */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                    x: [0, -30, 0],
                    y: [0, -40, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-primary/5 blur-[100px] rounded-full opacity-20"
            />

            {/* Subtle Grain Overlay (Optional texturing) */}
            <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay" />
        </div>
    );
}
