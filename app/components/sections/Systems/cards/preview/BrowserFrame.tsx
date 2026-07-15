"use client"

import { motion } from "framer-motion";
import Image from "next/image";

interface BrowserFrameProps {
  imageSrc: string;
  altText: string;
}

export function BrowserFrame({ imageSrc, altText }: BrowserFrameProps) {
  return (
    <motion.div
      className="
        relative
        z-20
        w-full
        max-w-3xl
        mx-auto
        rounded-2xl
        overflow-hidden
        border
        border-white/10
        bg-[#101114]
      "
      variants={{
        idle: {
          y: 40,
          scale: 1,
          opacity: 1,
        },

        hover: {
          y: 190,
          scale: 0.90,
          opacity: 0.82,
        },
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* macOS style title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
      </div>

      <div className="relative aspect-[16/10] w-full">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover object-top opacity-90 transition-opacity duration-500 hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </motion.div>
  );
}
