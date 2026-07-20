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
        y: [0, 5, 0],
      }}
      whileHover={{
        scale: 1.03,
        rotate: -1,
      }}
      transition={{
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.2,
        },
        rotate: {
          duration: 0.2,
        },
      }}
      className={cn(
        `
        absolute
        rounded-2xl
        border
        border-border-subtle
        bg-surface-primary/90
        backdrop-blur-xl
        px-4
        py-3
        shadow-xl
        `,
        className,
      )}
    >
      <div className="space-y-3 min-w-[170px]">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />

          <p className="text-xs font-medium text-text-primary">System Status</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">Portfolio</span>

          <span className="text-xs font-medium text-green-500">Online</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">Build</span>

          <span className="text-xs font-medium">Production</span>
        </div>
      </div>
    </motion.div>
  );
}
