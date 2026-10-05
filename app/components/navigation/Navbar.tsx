"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Container } from "../ui/Container";

import { MobileMenu } from "./MobileMenu";
import { NavBrand } from "./NavBrand";
import { NavLinks } from "./NavLinks";
import { ResumeButton } from "./ResumeButton";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let previousScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Always show near the top
      if (currentScroll < 40) {
        setVisible(true);
        previousScroll = currentScroll;
        return;
      }

      // Ignore tiny scrolls
      if (Math.abs(currentScroll - previousScroll) < 8) return;

      if (currentScroll > previousScroll) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }

      previousScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{
        y: 0,
      }}
      animate={{
        y: visible ? 0 : -100,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        sticky
        top-0
        z-50
        border-b
        border-border-subtle
        bg-bg-primary/85
        backdrop-blur-xl
      "
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NavBrand />

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2.5 text-sm font-semibold text-brand-foreground transition hover:-translate-y-0.5 hover:bg-brand-soft hover:shadow-[0_12px_30px_rgba(209,139,53,.18)]"
            >
              Projects <ArrowUpRight className="h-4 w-4" />
            </Link>
            <ResumeButton />
          </div>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
