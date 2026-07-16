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
      {contact.links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="
            group
            flex
            items-center
            gap-3
            text-lg
            text-text-secondary
            transition-colors
            duration-300
            hover:text-brand-primary
          "
        >
          <span className="text-base text-white/70">
            {icons[link.label as keyof typeof icons]}
          </span>

          <span>{link.label}</span>

          <span
            className="
              opacity-0
              -translate-x-1
              transition-all
              duration-300
              group-hover:translate-x-0
              group-hover:opacity-100
            "
          >
            ↗
          </span>
        </Link>
      ))}
    </div>
  );
}
