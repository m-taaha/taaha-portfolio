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
      className="
        relative
        h-full
        w-full
        overflow-hidden
      "
      initial="idle"
      whileHover="hover"
    >
      {/* ---------------- Blueprint ---------------- */}

      {blueprint && (
        <motion.div
          className="
            absolute
            inset-0
            z-10
          "
          variants={{
            idle: {
              y: -140,
              scale: 0.82,
              opacity: 0,
            },

            hover: {
              y: -20,
              scale: 1,
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <BlueprintCanvas blueprint={blueprint} />
        </motion.div>
      )}

      {/* ---------------- Browser ---------------- */}

      <motion.div
        className="
          absolute
          left-1/2
          bottom-0
          z-20
          w-full
          max-w-3xl
          -translate-x-1/2
        "
        variants={{
          idle: {
            y: -350,
            scale: 1,
            opacity: 1,
          },

          hover: {
            y: 90,
            scale: 0.9,
            opacity: 0.82,
          },
        }}
        transition={{
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <BrowserFrame imageSrc={system.image} altText={system.name} />
      </motion.div>
    </motion.div>
  );
}
