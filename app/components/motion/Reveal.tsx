"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

export function Reveal({ children, className }: RevealProps) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{
          y: "100%",
        }}
        whileInView={{
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
