import { Section } from "@/app/components/ui/Section";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { RotatingText } from "./RotatingText";



export function Hero() {
  return (
    <Section>
      <HeroContent />
      <HeroActions />
    </Section>
  );
}
