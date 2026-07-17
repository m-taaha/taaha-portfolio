"use client"
import { motion } from "framer-motion";
import { Container } from "@/app/components/ui/Container";

import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterCopyright } from "./FooterCopyright";


export function Footer() {
  return (
    <motion.footer
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
      className="border-t border-border-subtle py-16"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-start">
          <FooterBrand />

          <FooterLinks />
        </div>

        <div className="mt-12">
          <FooterCopyright />
        </div>
      </Container>
    </motion.footer>
  );
}
