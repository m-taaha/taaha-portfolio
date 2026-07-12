import { Glow } from "./visual/Glow";
import { ProfileCard } from "./visual/ProfileCard";
import { TerminalBadge } from "./visual/TerminalBadge";
import { TechCard } from "./visual/TechCard";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";

export function HeroVisual() {
  return (
    <div className="relative flex h-[650px] w-[650px] items-center justify-center">
      <Glow />

      <TechCard
        icon={<SiNextdotjs />}
        label="Next.js"
        subtitle="Frontend Framework"
        className="-top-12 -left-6"
      />

      <TechCard
        icon={<SiReact className="text-sky-400" />}
        label="React"
        subtitle="UI Library"
        className="top-24 -left-14"
      />

      <TechCard
        icon={<SiTypescript className="text-blue-500" />}
        label="TypeScript"
        subtitle="Type Safe"
        className="-bottom-6 -left-2"
      />

      <TechCard
        icon={<SiNodedotjs className="text-green-500" />}
        label="Node.js"
        subtitle="Backend Runtime"
        className="top-24 -right-2"
      />

      <TechCard
        icon={<SiPython className="text-yellow-400" />}
        label="Python"
        subtitle="AI & Backend"
        className="-bottom-8 -right-8"
      />

      <TerminalBadge className="bottom-20 -left-18" />

      <ProfileCard />
    </div>
  );
}
