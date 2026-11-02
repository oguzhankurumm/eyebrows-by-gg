"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ScrollWords({ words }: { words: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-48%"]);
  return (
    <div ref={ref} className="words">
      <motion.p style={{ x }}>{words.join("   ·   ")}</motion.p>
    </div>
  );
}
