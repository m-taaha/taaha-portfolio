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
          scale: 0.94,
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
      {/* Ambient Glow */}

      <motion.circle
        cx={node.x}
        cy={node.y}
        r={52}
        fill="rgba(201,124,75,.05)"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Ring */}

      <motion.circle
        cx={node.x}
        cy={node.y}
        r={38}
        fill="rgba(201,124,75,.03)"
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 4.5,
          delay: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Node */}

      <foreignObject x={node.x - 82} y={node.y - 22} width={164} height={44}>
        <motion.div
          className="
            relative
            flex
            h-full
            w-full
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-brand-primary/30
            bg-[#17181b]/95
            backdrop-blur-xl
          "
          animate={{
            boxShadow: [
              "0 0 14px rgba(201,124,75,.08)",
              "0 0 26px rgba(201,124,75,.18)",
              "0 0 14px rgba(201,124,75,.08)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner Highlight */}

          <div
            className="
              absolute
              inset-x-3
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/12
              to-transparent
            "
          />

          {/* Label */}

          <span
            className="
              relative
              text-[12px]
              font-medium
              uppercase
              tracking-[0.08em]
              text-white/92
            "
          >
            {node.label}
          </span>
        </motion.div>
      </foreignObject>
    </motion.g>
  );
}
