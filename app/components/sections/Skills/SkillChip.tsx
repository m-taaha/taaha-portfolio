import { techIcons } from "../Projects/utils/techIcons";

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
        gap-2
        rounded-full
        border
        border-border-subtle
        px-3
        py-2
        text-sm
        text-text-secondary
      "
    >
      {item && <span className={item.color}>{item.icon}</span>}

      {technology}
    </span>
  );
}
