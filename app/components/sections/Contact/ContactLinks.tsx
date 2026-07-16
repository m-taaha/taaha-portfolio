import Link from "next/link";

import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

import { contact } from "@/app/config/contact";

const icons = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Resume: <FaFileAlt />,
};

export function ContactLinks() {
  return (
    <div className="space-y-4">
      {contact.links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-border-subtle
            px-5
            py-4
            transition-all
            duration-300
            hover:border-brand-primary/30
            hover:bg-surface-secondary
          "
        >
          <div className="flex items-center gap-3">
            <span className="text-white/70">
              {icons[link.label as keyof typeof icons]}
            </span>

            <span className="font-medium">{link.label}</span>
          </div>

          <span
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            ↗
          </span>
        </Link>
      ))}
    </div>
  );
}
