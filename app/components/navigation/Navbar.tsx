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
import { CommandPalette } from "./CommandPalette";

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
        bg-bg-primary/30
        px-2
        backdrop-blur-2xl
      "
    >
      <Container>
        <div className="mt-3 flex h-[4.5rem] items-center justify-between rounded-2xl border border-white/[0.07] bg-surface-primary/85 px-4 shadow-[0_14px_44px_rgba(0,0,0,.3)] backdrop-blur-2xl sm:px-6">
          <NavBrand />

          <div className="hidden lg:block">
            <NavLinks />
          </div>

          <div className="flex items-center gap-2">
            <CommandPalette />
            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2.5 text-sm font-semibold text-brand-foreground transition hover:-translate-y-0.5 hover:bg-brand-soft hover:shadow-[0_12px_30px_rgba(209,139,53,.18)]"
              >
                Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
              <ResumeButton />
            </div>
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
