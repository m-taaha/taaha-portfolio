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
                <motion.span
                  animate={{
                    y: isActive ? -1 : 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="inline-block"
                >
                  {item.label}
                </motion.span>

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
                      duration-200
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
                      h-[-2px]
                      w-full
                      bg-brand-primary
                    "
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
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
