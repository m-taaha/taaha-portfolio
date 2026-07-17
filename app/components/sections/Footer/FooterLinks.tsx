"use client";

import { motion } from "framer-motion";
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
    <div className="flex flex-col items-start gap-6 lg:pt-1">
      {contact.links.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.08,
            duration: 0.4,
          }}
        >
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
              flex
              items-center
              gap-3
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
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
