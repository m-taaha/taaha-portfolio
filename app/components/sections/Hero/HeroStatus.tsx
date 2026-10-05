"use client"
import { motion } from "framer-motion";


export function HeroStatus() {
  return (
    <div
      className="
        os-pill
        max-w-full
        text-left
        items-center
        gap-2.5
        text-xs sm:text-sm
      "
    >
      <motion.div
        className="h-2 w-2 shrink-0 rounded-full bg-success shadow-[0_0_10px_rgba(59,165,93,.55)]"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [1, 0.6, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <span className="min-w-0 leading-5">
        Available for Software Engineering Internships
      </span>
    </div>
  );
}
