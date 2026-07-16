"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { navigation } from "@/app/config/navigation";
import { useActiveSection } from "../../hooks/navigation/useActiveSection";

export function NavLinks() {
  const activeSection = useActiveSection();

  return (
    <nav>
      <ul className="flex items-center gap-10">
        {navigation.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");

          return (
            <li key={item.label} className="relative">
              <Link
                href={item.href}
                className={`
                  group
                  relative
                  pb-2
                  text-sm
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }
                `}
              >
                {item.label}

                {/* Hover underline */}

                {!isActive && (
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
                )}

                {/* Active underline */}

                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-full
                      bg-brand-primary
                    "
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
