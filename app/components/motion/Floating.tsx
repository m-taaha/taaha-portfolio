"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FloatingProps {
  children: ReactNode;
  className?: string;
}

export function Floating({ children, className }: FloatingProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
