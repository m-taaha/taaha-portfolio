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

  const packetX = (startNode.x + endNode.x) / 2;
  const packetY = (startNode.y + endNode.y) / 2;

  return (
    <>
      {/* Ambient Cable */}

      <motion.path
        d={path}
        fill="none"
        stroke="rgba(255,255,255,.045)"
        strokeWidth={9}
        strokeLinecap="round"
        variants={{
          idle: {
            opacity: 0,
            pathLength: 0,
          },

          hover: {
            opacity: 1,
            pathLength: 1,
          },
        }}
        transition={{
          duration: 0.65,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Glow */}

      <motion.path
        d={path}
        fill="none"
        stroke="rgba(209,139,53,.16)"
        strokeWidth={5}
        strokeLinecap="round"
        variants={{
          idle: {
            opacity: 0,
            pathLength: 0,
          },

          hover: {
            opacity: 1,
            pathLength: 1,
          },
        }}
        transition={{
          duration: 0.65,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Main Wire */}

      <motion.path
        d={path}
        fill="none"
        stroke="#d18b35"
        strokeWidth={1.8}
        strokeLinecap="round"
        variants={{
          idle: {
            opacity: 0,
            pathLength: 0,
          },

          hover: {
            opacity: 0.95,
            pathLength: 1,
          },
        }}
        transition={{
          duration: 0.65,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Animated Signal */}

      <motion.path
        d={path}
        fill="none"
        stroke="rgba(255,255,255,.55)"
        strokeWidth={2.3}
        strokeLinecap="round"
        strokeDasharray="14 220"
        animate={{
          strokeDashoffset: [240, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.2,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Packet */}

      <BlueprintPacket x={packetX} y={packetY} delay={delay + 0.25} />
    </>
  );
}
