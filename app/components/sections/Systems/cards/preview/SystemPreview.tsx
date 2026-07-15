"use client";

import { motion } from "framer-motion";

import { BrowserFrame } from "./BrowserFrame";
import { BlueprintCanvas } from "./Blueprint/BlueprintCanvas";
import { architectures } from "./Blueprint/blueprint";

import { System } from "@/app/config/systems";

interface Props {
  system: System;
}

export function SystemPreview({ system }: Props) {
  const blueprint = architectures[system.id];

  return (
    <motion.div
      initial="idle"
      whileHover="hover"
      className="
        relative
        flex
        h-full
        min-h-[720px]
        overflow-hidden
        bg-gradient-to-br
        from-surface-secondary
        to-[#171717]
      "
    >
      {/* ---------------- Blueprint ---------------- */}

      {blueprint && (
        <motion.div
          variants={{
            idle: {
              opacity: 0,
              y: -80,
            },
            hover: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="
            absolute
            left-0
            right-0
            top-8
            h-[280px]
            z-10
          "
        >
          <BlueprintCanvas blueprint={blueprint} />
        </motion.div>
      )}

      {/* ---------------- Browser ---------------- */}

      <motion.div
        variants={{
          idle: {
            y: 0,
            scale: 1,
          },
          hover: {
            y: 110,
            scale: 0.96,
            transition: {
              type: "spring",
              stiffness: 90,
              damping: 18,
            },
          },
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-20
          w-full
          max-w-xl
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <BrowserFrame imageSrc={system.image} altText={system.name} />
      </motion.div>
    </motion.div>
  );
}
