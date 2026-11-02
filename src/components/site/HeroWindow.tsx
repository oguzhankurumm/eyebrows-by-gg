"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { BOOK } from "@/lib/site";

const LEFT = ["2023_07_portfolio-2", "2023_10_portfolio-17", "2023_07_portfolio-13", "2023_10_portfolio-20"];
const RIGHT = ["2023_10_portfolio-22", "2023_07_portfolio-12", "2023_10_portfolio-18", "2023_07_portfolio-4"];

export function HeroWindow() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useTransform(scrollYProgress, [0, 0.5], [0, 1], { clamp: true });
  const fade = useTransform(scrollYProgress, [0, 0.22], [1, 0], { clamp: true });
  const colL = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const colR = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  const colFade = useTransform(scrollYProgress, [0, 0.3], [1, 0], { clamp: true });
  const lift = useTransform(scrollYProgress, [0, 0.22], [0, -40], { clamp: true });
  return (
    <motion.section ref={ref} className="hero" style={{ ["--p" as string]: p }} aria-label="Eyebrows by GG">
      <div className="hero-stage">
        <motion.div className="hero-cols" aria-hidden="true" style={{ opacity: colFade }}>
          <motion.div className="hero-col" style={{ y: colL }}>{LEFT.concat(LEFT).map((f, i) => <img key={i} src={`/assets/img/${f}.webp`} alt="" loading="lazy" />)}</motion.div>
          <motion.div className="hero-col hero-col-r" style={{ y: colR }}>{RIGHT.concat(RIGHT).map((f, i) => <img key={i} src={`/assets/img/${f}.webp`} alt="" loading="lazy" />)}</motion.div>
        </motion.div>
        <div className="hero-pic">
          <img src="/assets/img/gg-cover.webp" alt="Gonul Gonenc (GG), licensed tattoo artist and owner of Eyebrows by GG" width={2752} height={1536} fetchPriority="high" />
        </div>
        <div className="hero-copy">
          <motion.h1 style={{ opacity: fade, y: lift }}>Let&apos;s Touch<br />Your Beauty</motion.h1>
          <motion.p className="hero-sub" style={{ opacity: fade, y: lift }}>
            Microblading, nano brows, powder ombré, and threading — every appointment starts with a quiet consultation, never a template.
          </motion.p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={BOOK} rel="noopener">Book Your Consultation</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
