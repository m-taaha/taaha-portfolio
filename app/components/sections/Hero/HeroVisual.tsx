import { Glow } from "./visual/Glow";
import { ProfileCard } from "./visual/ProfileCard";
import { TerminalBadge } from "./visual/TerminalBadge";
import { TechCard } from "./visual/TechCard";

import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";

export function HeroVisual() {
  return (
    <div
      className="
        relative
        hidden
        h-[650px]
        w-[650px]
        items-center
        justify-center
        lg:flex
      "
    >
      <Glow />

      <TechCard
        icon={<SiNextdotjs />}
        label="Next.js"
        subtitle="Frontend Framework"
        className="-top-4 left-10"
      />

      <TechCard
        icon={<SiReact className="text-sky-400" />}
        label="React"
        subtitle="UI Library"
        className="top-28 left-2"
      />

      <TechCard
        icon={<SiNodedotjs className="text-green-500" />}
        label="Node.js"
        subtitle="Backend Runtime"
        className="top-30 right-0"
      />

      <TechCard
        icon={<SiPython className="text-yellow-400" />}
        label="Python"
        subtitle="AI & Backend"
        className="bottom-6 right-6"
      />

      <TerminalBadge className="bottom-16 left-4" />

      <ProfileCard />
    </div>
  );
}
