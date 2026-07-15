"use client";

import { motion } from "framer-motion";

interface Props {
  x: number;
  y: number;
  delay?: number;
}

export function BlueprintPacket({ x, y, delay = 0 }: Props) {
  return (
    <>
      {/* Glow */}

      <motion.circle
        cx={x}
        cy={y}
        r={8}
        fill="rgba(209,139,53,.18)"
        animate={{
          scale: [0.6, 1.4, 0.6],
          opacity: [0, 0.9, 0],
        }}
        transition={{
          duration: 0.9,
          delay,
          repeat: Infinity,
          repeatDelay: 2.4,
          ease: "linear",
        }}
      />

      {/* Core */}

      <motion.circle
        cx={x}
        cy={y}
        r={2.6}
        fill="#d18b35"
        animate={{
          scale: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 0.9,
          delay,
          repeat: Infinity,
          repeatDelay: 2.4,
          ease: "linear",
        }}
      />
    </>
  );
}
