import Link from "next/link";

import { contact } from "@/app/config/contact";

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
          <span>{link.label}</span>

          <span>→</span>
        </Link>
      ))}
    </div>
  );
}
