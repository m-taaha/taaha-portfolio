import { SkillCategory as SkillCategoryType } from "@/app/config/skills";
import { SkillChip } from "./SkillChip";



interface SkillCategoryProps {
  category: SkillCategoryType;
}

export function SkillCategory({ category }: SkillCategoryProps) {
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
      <div className="space-y-8">
        <div>
          <h3 className="text-3xl font-bold">{category.title}</h3>

          <p className="mt-3 leading-7 text-text-secondary">
            {category.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.technologies.map((technology) => (
            <SkillChip key={technology} technology={technology} />
          ))}
        </div>
      </div>
    </article>
  );
}
