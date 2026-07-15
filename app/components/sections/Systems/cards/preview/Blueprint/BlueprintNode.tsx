"use client";

import { motion } from "framer-motion";
import { NodeData } from "./blueprint";

interface Props {
  node: NodeData;
}

export function BlueprintNode({ node }: Props) {
  return (
    <motion.g
      variants={{
        idle: {
          opacity: 0,
          scale: 0.9,
        },
        hover: {
          opacity: 1,
          scale: 1,
        },
      }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Glow */}

      <circle cx={node.x} cy={node.y} r={82} fill="rgba(209,139,53,.06)" />

      {/* Pill */}

      <foreignObject x={node.x - 105} y={node.y - 28} width={210} height={56}>
        <div
          className="
            flex
            h-full
            w-full
            items-center
            justify-center
            rounded-full
            border
            border-brand-primary/40
            bg-[#151516]/95
            px-8
            py-3
            text-[17px]
            font-semibold
            tracking-[0.02em]
            text-white
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(209,139,53,.15)]
          "
        >
          {node.label}
        </div>
      </foreignObject>
    </motion.g>
  );
}
