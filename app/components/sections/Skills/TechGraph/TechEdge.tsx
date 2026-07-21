"use client";

import { motion } from "framer-motion";

import { TechNode } from "@/app/config/techGraphs";

interface Props {
  start: TechNode;
  end: TechNode;
}

export function TechEdge({ start, end }: Props) {
  const path = `
    M ${start.x} ${start.y}
    L ${end.x} ${end.y}
  `;

  return (
    <>
      {/* Ambient cable */}

      <motion.path
        d={path}
        fill="none"
        stroke="rgba(201,124,75,.28)"
        strokeWidth={6}
        strokeLinecap="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
      />

      {/* Glow */}

      <motion.path
        d={path}
        fill="none"
        stroke="rgba(201,124,75,.18)"
        strokeWidth={4}
        strokeLinecap="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          delay: 0.1,
        }}
      />

      {/* Main wire */}

      <motion.path
        d={path}
        fill="none"
        stroke="#c97c4b"
        strokeWidth={1.8}
        strokeLinecap="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 0.9,
        }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
      />

      {/* Moving signal */}

      <motion.path
        d={path}
        fill="none"
        stroke="rgba(255,255,255,.7)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray="18 140"
        animate={{
          strokeDashoffset: [150, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}
