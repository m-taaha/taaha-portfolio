import { Stagger } from "@/app/components/motion";
import { skills } from "@/app/config/skills";
import { SkillCategory } from "./SkillCategory";

export function SkillsGrid() {
  return (
    <Stagger
      className="
    grid
    gap-8
    lg:grid-cols-3
  "
    >
      {skills.map((category) => (
        <SkillCategory key={category.title} category={category} />
      ))}
    </Stagger>
  );
}
