import { ScaleIn } from "@/app/components/motion";
import { Section } from "@/app/components/ui/Section";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { ProfileCard } from "./visual/ProfileCard";

export function HeroDesktop() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <HeroContent />

        {/* Desktop */}
        <ScaleIn>
          <HeroVisual />
        </ScaleIn>

        {/* Mobile */}
        <div className="flex justify-center lg:hidden">
          <ProfileCard />
        </div>
      </div>
    </Section>
  );
}
