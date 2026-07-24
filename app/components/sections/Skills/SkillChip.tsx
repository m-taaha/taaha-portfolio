import { techIcons } from "../Systems/utils/techIcons";

interface SkillChipProps {
  technology: string;
}

export function SkillChip({ technology }: SkillChipProps) {
  const item = techIcons[technology];

  return (
    <span
      className="
        inline-flex
        items-center
     gap-1.5
sm:gap-2
        rounded-full
        border
        border-border-subtle
        bg-surface-secondary/60
       px-3
py-1.5
sm:px-3.5
sm:py-2
text-xs
sm:text-sm
        text-text-secondary
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-brand-primary/30
        hover:bg-brand-primary/5
        hover:text-text-primary
      "
    >
      {item && (
        <span
          className={`
            ${item.color}
            transition-transform
            duration-300
            group-hover:scale-110
          `}
        >
          {item.icon}
        </span>
      )}

      <span>{technology}</span>
    </span>
  );
}
