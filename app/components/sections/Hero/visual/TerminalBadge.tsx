"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalBadgeProps {
  className?: string;
}

export function TerminalBadge({ className }: TerminalBadgeProps) {
  return (
    <motion.div
      animate={{
        y: [0, 8, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        `
        absolute
        rounded-2xl
        border
        border-border-subtle
        bg-surface-primary
        p-4
        shadow-xl
        `,
        className,
      )}
    >
      <div className="font-mono text-xs space-y-2">
        <p className="text-text-secondary">$ npm run dev</p>

        <p className="text-green-400">✓ Portfolio running...</p>
      </div>
    </motion.div>
  );
}
