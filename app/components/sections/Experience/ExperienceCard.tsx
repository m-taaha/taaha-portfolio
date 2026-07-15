import { ExperienceItem } from "@/app/config/experience";
import { SystemTechStack } from "../Systems/cards/SystemTechStack";





interface ExperienceCardProps {
  experience: ExperienceItem;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article
      className="
        rounded-3xl
        border
        border-border-subtle
        bg-surface-primary
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-brand-primary/30
      "
    >
      <div className="space-y-6">
        {/* Year */}

        <p className="text-sm font-medium text-brand-primary">
          {experience.year}
        </p>

        {/* Title */}

        <div>
          <h3 className="text-3xl font-semibold">{experience.title}</h3>

          <p className="mt-2 text-text-secondary">{experience.organization}</p>
        </div>

        {/* Description */}

        <p className="leading-7 text-text-secondary">
          {experience.description}
        </p>

        {/* Tech Stack */}

        <SystemTechStack technologies={experience.technologies} />
      </div>
    </article>
  );
}
