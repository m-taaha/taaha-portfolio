"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechCardProps {
  icon: React.ReactNode;
  label: string;
  subtitle: string;
  className?: string;
}

export function TechCard({ icon, label, subtitle, className }: TechCardProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        `
        absolute
        rounded-2xl
        border
        border-border-subtle
        bg-surface-primary/80
        backdrop-blur-xl
        px-3
        py-3
        shadow-xl
        `,
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div className="text-2xl">{icon}</div>

        <div>
          <p className="text-sm font-semibold">{label}</p>
          <p className="text-xs text-text-secondary">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}
