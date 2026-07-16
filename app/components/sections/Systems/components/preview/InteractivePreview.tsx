"use client";

import { motion } from "framer-motion";

import { BrowserFrame } from "./BrowserFrame";
import { BlueprintCanvas } from "./Blueprint/BlueprintCanvas";
import { architectures } from "./Blueprint/blueprint";

import { System } from "@/app/config/systems";

interface Props {
  system: System;
}

export function InteractivePreview({ system }: Props) {
  const blueprint = architectures[system.id];

  return (
    <motion.div
      initial="idle"
      whileHover="hover"
      className="
        relative
        h-full
        min-h-[700px]
        overflow-hidden
        bg-surface-secondary
      "
      style={{
        perspective: 1800,
      }}
    >
      {/* Ambient Glow */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(201,124,75,.10),transparent_70%)]
        "
      />

      {/* Blueprint */}

      {blueprint && (
        <motion.div
          className="
            absolute
            inset-0
            z-10
          "
          variants={{
            idle: {
              opacity: 0,
              y: -120,
              scale: 0.96,
            },

            hover: {
              opacity: 1,
              y: -10,
              scale: 1,
            },
          }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <BlueprintCanvas blueprint={blueprint} />
        </motion.div>
      )}

      {/* Browser */}

      <motion.div
        className="
          absolute
          left-1/2
          bottom-0
          z-20
          w-full
          px-8
          -translate-x-1/2
        "
        style={{
          transformOrigin: "bottom center",
        }}
        variants={{
          idle: {
            y: -360,
            rotateX: 0,
            opacity: 1,
          },

          hover: {
            y: 90,
            rotateX: 7,
            opacity: 0.9,
          },
        }}
        transition={{
          duration: 1.05,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <BrowserFrame imageSrc={system.image} altText={system.name} />
      </motion.div>
    </motion.div>
  );
}
