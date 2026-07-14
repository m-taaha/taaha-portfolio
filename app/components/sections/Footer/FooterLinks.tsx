import Link from "next/link";
import { contact } from "@/app/config/contact";

export function FooterLinks() {
  return (
    <div className="flex flex-col gap-6 items-start lg:pt-1">
      {contact.links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="
            text-text-secondary
            transition-colors
            hover:text-brand-primary
            hover:translate-x-1
            duration-200
          "
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
