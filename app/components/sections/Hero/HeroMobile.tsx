import { FadeUp, ScaleIn } from "@/app/components/motion";
import { Section } from "@/app/components/ui/Section";

import { HeroContent } from "./HeroContent";
import { HeroOverview } from "./HeroOverview";
import { ProfileCard } from "./visual/ProfileCard";

export function HeroMobile() {
  return (
    <Section className="py-16">
      <div className="space-y-10">
        <HeroContent />

        <FadeUp>
          <HeroOverview />
        </FadeUp>

        <ScaleIn>
          <div className="flex justify-center">
            <ProfileCard />
          </div>
        </ScaleIn>
      </div>
    </Section>
  );
}
