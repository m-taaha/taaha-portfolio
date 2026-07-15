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
        aspect-video
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
          group-hover:scale-105
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/20
          group-hover:bg-black/10
          transition-colors
          duration-500
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-black/60
          to-transparent
        "
      />
    </div>
  );
}
