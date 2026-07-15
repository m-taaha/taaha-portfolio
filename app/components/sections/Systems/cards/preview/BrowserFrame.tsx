import Image from "next/image";

interface BrowserFrameProps {
  image: string;
  title: string;
}

export function BrowserFrame({ image, title }: BrowserFrameProps) {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[55%]
        w-[88%]
        -translate-x-1/2
        -translate-y-1/2
        group-hover:-translate-y-5
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#0f1117]
        shadow-[0_60px_150px_rgba(0,0,0,.65)]
        transition-all
        duration-700
       group-hover:scale-[1.03]
      "
    >
      {/* Header */}

      <div className="flex items-center gap-3 border-b border-white/5 bg-black/40 px-6 py-4">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />

        <div className="mx-auto rounded-full bg-white/5 px-5 py-1 text-xs text-text-muted">
          {title.toLowerCase()}.dev
        </div>
      </div>

      <div className="relative aspect-[16/10]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
