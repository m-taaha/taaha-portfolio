"use client"
import { motion } from "framer-motion";


export function HeroStatus() {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-brand-primary/30
        bg-brand-primary/10
        px-4
        py-2
        text-sm
        text-brand-primary
      "
    >
      <motion.div
        className="h-2 w-2 rounded-full bg-green-500"
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

      <span>Available for Software Engineering Internships</span>
    </div>
  );
}
