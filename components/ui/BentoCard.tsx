"use client";

import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  hover?: boolean;
}

export function BentoCard({
  children,
  className = "",
  style,
  delay = 0,
  hover = true,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={
        hover
          ? {
              y: -3,
              transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
            }
          : undefined
      }
      className={className}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        padding: 28,
        position: "relative",
        overflow: "hidden",
        transition:
          "background 0.55s cubic-bezier(0.4,0,0.2,1), border-color 0.55s cubic-bezier(0.4,0,0.2,1)",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
