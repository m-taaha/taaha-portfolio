"use client";

import { motion } from "framer-motion";
import { FadeUp, Stagger } from "@/app/components/motion";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

import { contact } from "@/app/config/contact";

const icons = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Resume: <FaFileAlt />,
};

export function FooterLinks() {
  return (
    <Stagger
      className="
    flex
    flex-col
    items-start
    gap-6
    lg:pt-1
  "
    >
      {contact.links.map((link, index) => (
       <FadeUp key={link.label}>
          <Link
            href={link.href}
            target={
              link.label === "Resume" || link.href.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel={
              link.label === "Resume" || link.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="
    group
    relative
    inline-flex
    items-center
    gap-3
    pb-1
    text-lg
    text-text-secondary
    transition-all
    duration-300
    hover:translate-x-1
    hover:text-brand-primary
  "
          >
            <span className="text-base text-white/70">
              {icons[link.label as keyof typeof icons]}
            </span>

            <span>{link.label}</span>

            <span
              className="
      -translate-x-1
      opacity-0
      transition-all
      duration-300
      group-hover:translate-x-0
      group-hover:opacity-100
    "
            >
              ↗
            </span>

            {/* Animated Underline */}

            <span
              className="
      absolute
      bottom-0
      left-0
      h-px
      w-full
      origin-left
      scale-x-0
      bg-brand-primary
      transition-transform
      duration-300
      ease-out
      group-hover:scale-x-100
    "
            />
          </Link>
        </FadeUp>
      ))}
    </Stagger>
  );
}
