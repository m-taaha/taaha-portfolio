"use client";

import { ExperienceItem } from "@/app/config/experience";

interface Props {
  experience: ExperienceItem;
}

export function ExperienceCard({ experience }: Props) {
  return (
    <div
      className="
        relative
        flex
        flex-col
        items-center
      "
    >
      {/* Copper node */}

      <div
        className="
          z-10
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          border-2
          border-brand-primary
          bg-background-primary
        "
      >
        <div
          className="
            h-2
            w-2
            rounded-full
            bg-brand-primary
          "
        />
      </div>

      {/* Year */}

      <p
        className="
          mt-5
          text-xs
          uppercase
          tracking-[0.24em]
          text-brand-primary
        "
      >
        {experience.year}
      </p>

      {/* Title */}

      <h3
        className="
          mt-3
          text-center
          text-lg
          font-semibold
        "
      >
        {experience.title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-4
          text-center
          text-sm
          leading-7
          text-text-secondary
        "
      >
        {experience.description}
      </p>
    </div>
  );
}
