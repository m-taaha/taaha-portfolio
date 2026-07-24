"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface BrowserFrameProps {
  imageSrc: string;
  altText: string;
  browserUrl: string;
}

export function BrowserFrame({ imageSrc, altText, browserUrl }: BrowserFrameProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        relative
        mx-auto
        w-full
        max-w-[860px]
        overflow-hidden
        rounded-[22px]
        border
        border-white/10
        bg-[#111317]
        shadow-[0_40px_90px_rgba(0,0,0,.50)]
      "
    >
      {/* Soft inner highlight */}

      <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/[0.04]" />

      {/* Browser Top Bar */}

      <div
        className="
          relative
          flex
          items-center
          justify-between
          border-b
          border-white/5
          bg-[#1a1c21]/95
          px-5
          py-3
          backdrop-blur-xl
        "
      >
        {/* Window Controls */}

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Address Bar */}

        <div
          className="
            flex
            items-center
            justify-center
            rounded-full
            border
            border-white/5
            bg-[#111317]
            py-1.5
            px-3
sm:px-7
text-[10px]
sm:text-[11px]
            tracking-wide
            text-white/35
            shadow-inner
          "
        >
          {browserUrl}
        </div>

        {/* Right Icons */}

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/12" />
          <div className="h-2 w-2 rounded-full bg-white/12" />
        </div>

        {/* Bottom divider glow */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />
      </div>

      {/* Screenshot */}

      <div className="relative aspect-[16/10] w-full bg-[#0d0f12]">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 860px"
          className="
            object-cover
            object-top
            select-none
          "
          draggable={false}
        />
      </div>

      {/* Bottom Fade */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-20
          bg-gradient-to-t
          from-black/10
          to-transparent
        "
      />
    </motion.div>
  );
}
