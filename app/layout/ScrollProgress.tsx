"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.2,
  });

  return (
    <>
      {/* Glow */}

      <motion.div
        className="
          fixed
          top-0
          left-0
          z-[999]
          h-1
          w-full
          origin-left
          bg-brand-primary/30
          blur-md
        "
        style={{ scaleX }}
      />

      {/* Main Bar */}

      <motion.div
        className="
          fixed
          top-0
          left-0
          z-[1000]
          h-[3px]
          w-full
          origin-left
          rounded-r-full
          bg-brand-primary
          shadow-[0_0_20px_rgba(209,139,53,.65)]
        "
        style={{ scaleX }}
      />
    </>
  );
}
