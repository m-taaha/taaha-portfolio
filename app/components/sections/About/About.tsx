import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "../../ui/SecionHeading";


import { AboutContent } from "./components/AboutContent";
import { AboutStats } from "./components/AboutStats";
import { AboutTimeline } from "./components/AboutTimeline";

export function About() {

  return (
    <section id="about" className="py-32">
      <Container>
        <SectionHeading
          eyebrow="Who I Am"
          title="Building Products, Learning Every Day"
          description="My journey from learning web development to building scalable applications and AI-powered developer tools."
        />

        <div className="mt-20 space-y-20">
          <AboutContent />

          <AboutStats />

          <AboutTimeline />
        </div>
      </Container>
    </section>
  );
}
