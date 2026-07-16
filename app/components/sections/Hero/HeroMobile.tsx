import { Section } from "@/app/components/ui/Section";

import { HeroContent } from "./HeroContent";
import { HeroOverview } from "./HeroOverview";
import { ProfileCard } from "./visual/ProfileCard";

export function HeroMobile() {
  return (
    <Section className="py-16">
      <div className="space-y-10">
        <HeroContent />

        <HeroOverview />

        <div className="flex justify-center">
          <ProfileCard />
        </div>
      </div>
    </Section>
  );
}
