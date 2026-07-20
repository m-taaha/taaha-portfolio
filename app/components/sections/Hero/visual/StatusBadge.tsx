"use client";

import { motion } from "framer-motion";

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <motion.div
      variants={{
        rest: {
          scale: 1,
        },
        hover: {
          scale: 1.03,
        },
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-border-subtle
        px-3
        py-1
      "
    >
      <div className="h-2 w-2 rounded-full bg-green-500" />

      <span className="text-sm text-text-secondary">{status}</span>
    </motion.div>
  );
}
