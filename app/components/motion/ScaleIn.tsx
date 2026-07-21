"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  className?: string;
}

export function ScaleIn({ children, className }: ScaleInProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
