import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "../../ui/SecionHeading";

import { ContactContent } from "./ContactContent";
import { ContactCard } from "./ContactCard";

export function Contact() {
  return (
    <section id="contact" className="py-32">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Together"
          description="Whether it's an internship, collaboration, or just a conversation about software engineering and AI, I'd love to hear from you."
        />

        <div className="mt-20 grid gap-20 lg:grid-cols-2 lg:items-start">
          <ContactContent />

          <ContactCard />
        </div> 
      </Container>
    </section>
  );
}
