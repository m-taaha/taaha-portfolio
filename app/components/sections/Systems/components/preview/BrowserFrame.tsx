"use client";

import Image from "next/image";

interface BrowserFrameProps {
  imageSrc: string;
  altText: string;
}

export function BrowserFrame({ imageSrc, altText }: BrowserFrameProps) {
  return (
    <div
      className="
        mx-auto
        w-full
        max-w-[860px]
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#111317]
        shadow-[0_35px_80px_rgba(0,0,0,.45)]
      "
    >
      {/* Browser Top Bar */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/5
          bg-[#1a1c21]
          px-5
          py-3
        "
      >
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <div className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>

        <div
          className="
            rounded-full
            border
            border-white/5
            bg-[#111317]
            px-6
            py-1.5
            text-[11px]
            text-white/40
          "
        >
          github.com/m-taaha/nitpick
        </div>

        <div className="w-16" />
      </div>

      {/* Screenshot */}

      <div className="relative aspect-[16/10] w-full">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          priority
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
