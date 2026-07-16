"use client";

import { motion } from "framer-motion";

import { TechNode as TechNodeType } from "@/app/config/techGraphs";

interface Props {
  node: TechNodeType;
}

export function TechNode({ node }: Props) {
  return (
    <motion.g
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.45,
      }}
    >
      {/* Glow */}

      <motion.circle
        cx={node.x}
        cy={node.y}
        r={30}
        fill="rgba(201,124,75,.06)"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Node */}

      <foreignObject x={node.x - 62} y={node.y - 18} width={124} height={36}>
        <div
          className="
            flex
            h-full
            w-full
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#18191d]/95
            text-[11px]
            font-medium
            uppercase
            tracking-[0.08em]
            text-white/90
            backdrop-blur-xl
          "
        >
          {node.label}
        </div>
      </foreignObject>
    </motion.g>
  );
}
