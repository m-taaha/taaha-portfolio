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
      {/* Ambient breathing glow */}

      <motion.circle
        cx={node.x}
        cy={node.y}
        r={62}
        fill="rgba(209,139,53,.05)"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.8, 0.45],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Node */}

      <foreignObject x={node.x - 90} y={node.y - 24} width={180} height={48}>
        <motion.div
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
            px-6
            text-[15px]
            font-semibold
            tracking-wide
            text-white
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(209,139,53,.15)]
          "
          animate={{
            boxShadow: [
              "0 0 18px rgba(209,139,53,.10)",
              "0 0 34px rgba(209,139,53,.28)",
              "0 0 18px rgba(209,139,53,.10)",
            ],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {node.label}
        </motion.div>
      </foreignObject>
    </motion.g>
  );
}
