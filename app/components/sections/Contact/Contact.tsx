"use client"
import { motion } from "framer-motion";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "../../ui/SecionHeading";
import { contact } from "@/app/config/contact";

import { ContactContent } from "./ContactContent";
import { ContactCard } from "./ContactCard";

export function Contact() {
  return (
    <section id="contact" className="py-32">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title={contact.title}
          description={contact.description}
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20 grid gap-20 lg:grid-cols-2 lg:items-start"
        >
          <ContactContent />

          <ContactCard />
        </motion.div>
      </Container>
    </section>
  );
}
