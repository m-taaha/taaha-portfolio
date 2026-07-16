"use client";

import { motion } from "framer-motion";
import { NodeData } from "./blueprint";
import { BlueprintPacket } from "./BlueprintPacket";

interface Props {
  startNode: NodeData;
  endNode: NodeData;
  delay?: number;
}

export function BlueprintConnection({ startNode, endNode, delay = 0 }: Props) {
  const path = `
M ${startNode.x} ${startNode.y}
C
${startNode.x + 120} ${startNode.y},
${endNode.x - 120} ${endNode.y},
${endNode.x} ${endNode.y}
`;

  // Approximate midpoint of the bezier
  const packetX = (startNode.x + endNode.x) / 2;
  const packetY = (startNode.y + endNode.y) / 2;

  return (
    <>
      {/* Glow */}

      <motion.path
        d={path}
        fill="none"
        stroke="rgba(209,139,53,.10)"
        strokeWidth={8}
        strokeLinecap="round"
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
          duration: 0.65,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Main Line */}

      <motion.path
        d={path}
        fill="none"
        stroke="#d18b35"
        strokeWidth={2.4}
        strokeLinecap="round"
        variants={{
          idle: {
            pathLength: 0,
            opacity: 0,
          },
          hover: {
            pathLength: 1,
            opacity: 0.95,
          },
        }}
        transition={{
          duration: 0.65,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Packet */}

      <BlueprintPacket x={packetX} y={packetY} delay={delay + 0.4} />
    </>
  );
}
