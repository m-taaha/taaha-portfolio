"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerProps {
  children: ReactNode;

  className?: string;

  delay?: number;

  staggerChildren?: number;
}

export function Stagger({
  children,
  className,
  delay = 0,
  staggerChildren = 0.12,
}: StaggerProps) {
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
        hidden: {},

        show: {
          transition: {
            delayChildren: delay,

            staggerChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
