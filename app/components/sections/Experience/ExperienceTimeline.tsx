"use client";

import { useState } from "react";

import { experiences } from "@/app/config/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const progress = (activeIndex / (experiences.length - 1)) * 100;

  return (
    <div className="space-y-14">
      {/* Timeline */}

      <div className="relative">
        {/* Base Line */}

        <div className="absolute left-0 right-0 top-2.5 h-px bg-border-subtle" />

        {/* Animated Progress */}

        <div
          className="absolute left-0 top-2.5 h-px bg-brand-primary transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

        {/* Nodes */}

        <div className="relative grid grid-cols-7">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Details */}

      <div
        className="
          rounded-3xl
          border
          border-border-subtle
          bg-surface-primary
          p-10
        "
      >
        <p className="text-sm text-brand-primary">
          {experiences[activeIndex].year}
        </p>

        <h3 className="mt-3 text-4xl font-semibold">
          {experiences[activeIndex].title}
        </h3>

        <p className="mt-2 text-text-secondary">
          {experiences[activeIndex].organization}
        </p>

        <p className="mt-8 max-w-3xl leading-8 text-text-secondary">
          {experiences[activeIndex].description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {experiences[activeIndex].technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-brand-primary/25
                bg-brand-primary/10
                px-4
                py-2
                text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
