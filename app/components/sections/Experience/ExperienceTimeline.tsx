import { experiences } from "@/app/config/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceTimeline() {
  return (
    <div className="space-y-10">
      {experiences.map((experience) => (
        <ExperienceCard
          key={`${experience.year}-${experience.title}`}
          experience={experience}
        />
      ))}
    </div>
  );
}
