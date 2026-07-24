"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ResumeButton() {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Link
        href="/resume.pdf"
        target="_blank"
        className="
          group
          relative
          inline-flex
          items-center
          justify-center
          overflow-hidden
          rounded-full

          focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-brand-primary
focus-visible:ring-offset-2
focus-visible:ring-offset-bg-primary

          border
          border-border-subtle
          bg-surface-primary
          px-6
          py-2.5
          text-sm
          font-medium
          text-text-primary
          transition-all
          duration-300
          ease-out
          hover:-translate-y-px
          hover:border-brand-primary/40
          hover:shadow-[0_0_28px_rgba(201,124,75,0.18)]
        "
      >
        {/* Background Glow */}

        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-brand-primary/5
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        {/* Label */}

        <span
          className="
            relative
            z-10
            transition-colors
            duration-300
            group-hover:text-brand-primary
          "
        >
          Resume
        </span>
      </Link>
    </motion.div>
  );
}
