"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export function Experience() {
  const pathname = usePathname();
  useEffect(() => {
    const keyboardInput = () => {
      document.documentElement.dataset.inputMode = "keyboard";
    };
    const pointerInput = () => {
      document.documentElement.dataset.inputMode = "pointer";
    };
    document.addEventListener("keydown", keyboardInput);
    document.addEventListener("pointerdown", pointerInput);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches)
      return () => {
        document.removeEventListener("keydown", keyboardInput);
        document.removeEventListener("pointerdown", pointerInput);
      };
    let cancelled = false;
    let stopScroll: (() => void) | undefined;
    // React Bits AnimatedContent informed the one-shot reveal pattern; WAAPI
    // keeps the same behavior without adding a second animation runtime.
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting || reduced.matches) return;
          entry.target.animate(
            [
              { transform: "translateY(20px)", opacity: 0.7 },
              { transform: "translateY(0)", opacity: 1 },
            ],
            {
              duration: 480,
              easing: "cubic-bezier(.23,1,.32,1)",
              fill: "none",
            },
          );
          observer.unobserve(entry.target);
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        ".process li,.artist-grid,.results-intro,.result-compare,.trust,.questions,.location,.booking .container,.service-card,.credential,.social-film",
      )
      .forEach((el) => observer.observe(el));
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      import("lenis").then(({ default: Lenis }) => {
        if (cancelled || reduced.matches) return;
        const lenis = new Lenis({
          autoRaf: true,
          lerp: 0.12,
          smoothWheel: true,
          syncTouch: false,
          anchors: { offset: -112 },
        });
        stopScroll = () => lenis.destroy();
      });
    }
    function preferenceChanged() {
      if (reduced.matches) {
        observer.disconnect();
        stopScroll?.();
        document.getAnimations().forEach((animation) => animation.cancel());
      }
    }
    reduced.addEventListener("change", preferenceChanged);
    return () => {
      document.removeEventListener("keydown", keyboardInput);
      document.removeEventListener("pointerdown", pointerInput);
      cancelled = true;
      observer.disconnect();
      stopScroll?.();
      reduced.removeEventListener("change", preferenceChanged);
    };
  }, [pathname]);
  return null;
}
