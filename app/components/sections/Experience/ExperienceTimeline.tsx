"use client";

import { experiences } from "@/app/config/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Timeline */}

      <div
        className="
          absolute
          left-0
          right-0
          top-10
          h-px
          bg-border-subtle
        "
      />

      <div
        className="
          relative
          grid
          grid-cols-7
          gap-8
        "
      >
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} experience={experience} />
        ))}
      </div>
    </div>
  );
}
