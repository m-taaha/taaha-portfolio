import Image from "next/image";

interface SystemImageProps {
  image: string;
  title: string;
}

export function SystemImage({ image, title }: SystemImageProps) {
  return (
    <div
      className="
        relative
        h-full
        min-h-[420px]
        overflow-hidden
        bg-surface-secondary
      "
    >
      <Image
        src={image}
        alt={title}
        fill
        className="
          object-cover
          transition-transform
          duration-700
          hover:scale-105
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-l
          from-transparent
          to-black/10
        "
      />
    </div>
  );
}
