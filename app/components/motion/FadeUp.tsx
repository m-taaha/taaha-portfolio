"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
}

export function FadeUp({ children, className }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={{
        hidden: {
          opacity: 0,
          y: 32,
        },

        show: {
          opacity: 1,
          y: 0,

          transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
