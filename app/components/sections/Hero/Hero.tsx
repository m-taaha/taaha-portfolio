import { Section } from "@/app/components/ui/Section";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";



export function Hero() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 items-center gap-16">
        <HeroContent />
        <HeroVisual />
      </div>
    </Section>
  );
}
