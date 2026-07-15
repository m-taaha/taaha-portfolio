"use client";

import { motion } from "framer-motion";

interface Props {
  x: number;
  y: number;
  delay?: number;
}

export function BlueprintPacket({ x, y, delay = 0 }: Props) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={5}
      fill="#d18b35"
      filter="url(#packetGlow)"
      variants={{
        idle: {
          opacity: 0,
          scale: 0,
        },

        hover: {
          opacity: [0, 1, 1, 0],
          scale: [0, 1, 1, 0],
        },
      }}
      transition={{
        duration: 0.9,
        delay,
        repeat: Infinity,
        repeatDelay: 2.5,
        ease: "linear",
      }}
    />
  );
}
