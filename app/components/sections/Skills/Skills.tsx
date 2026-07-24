import { Section } from "@/app/components/ui/Section";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SecionHeading";
import { SkillsGrid } from "./SkilllsGrid";
import { TechGraph } from "./TechGraph/TechGraph";

export function Skills() {
  return (
    <Section id="skills" className="py-32">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="How I Build Software"
          description="The engineering domains I work across—from polished user interfaces to distributed backend systems and AI-powered products."
        />

        <div className="mt-20">
          <SkillsGrid />
        </div>
        <div className="mt-20 lg:mt-28">
          <div className="max-w-2xl">
            <p
              className="
        text-xs
        uppercase
        tracking-[0.3em]
        text-brand-primary
      "
            >
              System Map
            </p>

            <h3
              className="
mt-3
text-2xl
sm:text-3xl
font-semibold
tracking-tight
"
            >
              How Everything Connects
            </h3>

            <p
              className="
mt-4
text-base
leading-7
text-text-secondary
lg:text-lg
"
            >
              Technologies don't exist in isolation. This graph represents how
              the tools I use connect together to build complete software
              systems—from frontend experiences to scalable backend services and
              AI-powered products.
            </p>
          </div>

          <div className="mt-12">
            <TechGraph />
          </div>
        </div>
      </Container>
    </Section>
  );
}
