import { currentFocus } from "@/app/config/hero";
import { SkillChip } from "../Skills/SkillChip";

export function HeroOverview() {
  return (
    <div
      className="
        mt-8
        rounded-3xl
        border
        border-border-subtle
        bg-surface-primary
        p-6
      "
    >
      <div className="space-y-5">
        <div>
          <p className="text-sm text-brand-primary">{currentFocus.title}</p>

          <h3 className="mt-2 text-2xl font-bold">{currentFocus.subtitle}</h3>

          <p className="mt-3 leading-7 text-text-secondary">
            {currentFocus.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {currentFocus.technologies.map((technology) => (
            <SkillChip key={technology} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
}
