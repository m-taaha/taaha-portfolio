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
        relative
        w-full
        max-w-3xl
        rounded-2xl
        overflow-hidden
        border
        border-white/10
        bg-[#101114]
        shadow-2xl
      "
    >
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
          priority
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
