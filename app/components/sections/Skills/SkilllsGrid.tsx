import { Stagger } from "@/app/components/motion";
import { skills } from "@/app/config/skills";
import { SkillCategory } from "./SkillCategory";

export function SkillsGrid() {
  return (
    <Stagger
      className="
  grid
gap-6
md:grid-cols-2
xl:grid-cols-3
lg:gap-8
  "
    >
      {skills.map((category) => (
        <SkillCategory key={category.title} category={category} />
      ))}
    </Stagger>
  );
}
