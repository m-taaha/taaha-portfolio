"use client";

import { motion } from "framer-motion";
import { NodeData } from "./blueprint";

interface Props {
  startNode: NodeData;
  endNode: NodeData;
}

export function BlueprintConnection({ startNode, endNode }: Props) {
  const path = `
M ${startNode.x} ${startNode.y}
C
${startNode.x + 120} ${startNode.y},
${endNode.x - 120} ${endNode.y},
${endNode.x} ${endNode.y}
`;

  return (
    <>
      {/* glow */}

      <motion.path
        d={path}
        fill="none"
        stroke="rgba(209,139,53,.10)"
        strokeWidth={8}
        strokeLinecap="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{}}
        variants={{
          idle: {
            pathLength: 0,
            opacity: 0,
          },

          hover: {
            pathLength: 1,
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* line */}

      <motion.path
        d={path}
        fill="none"
        stroke="#d18b35"
        strokeWidth={2.4}
        strokeLinecap="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        variants={{
          idle: {
            pathLength: 0,
            opacity: 0,
          },

          hover: {
            pathLength: 1,
            opacity: 0.9,
          },
        }}
        transition={{
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </>
  );
}
