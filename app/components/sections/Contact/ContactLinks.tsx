
import Link from "next/link";
import { FadeUp, Stagger } from "@/app/components/motion";
import { FaGithub, FaLinkedin, FaFileAlt,} from "react-icons/fa";

import { contact } from "@/app/config/contact";
import { ArrowUpRight } from "lucide-react";

const icons = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Resume: <FaFileAlt />,
};

export function ContactLinks() {
  return (
    <div className="space-y-4">
      {contact.links.map((link, index) => (
        <Stagger>
          <Link
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
hover:-translate-y-1
hover:border-brand-primary/30
hover:bg-surface-secondary
hover:shadow-[0_12px_30px_rgba(209,139,53,.12)]
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
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </Stagger>
      ))}
    </div>
  );
}
