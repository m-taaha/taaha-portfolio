"use client";

import { useState } from "react";

import { experiences } from "@/app/config/experience";
import { MobileTimelineItem } from "./MobileTimelineItem";

export function MobileTimeline() {
const [activeIndex, setActiveIndex] = useState(0);

return (
  <div className="space-y-6 lg:hidden">
    {experiences.map((experience, index) => (
      <MobileTimelineItem
        key={experience.title}
        index={index}
        experience={experience}
        active={activeIndex === index}
        isLast={index === experiences.length - 1}
        onClick={() => setActiveIndex(index)}
      />
    ))}
  </div>
);
}
