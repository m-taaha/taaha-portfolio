"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navigation } from "@/app/config/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        aria-label="Open navigation menu"
        whileHover={{
          scale: 1.05,
          rotate: 8,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setOpen(true)}
        className="
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-xl

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-brand-primary
    focus-visible:ring-offset-2
    focus-visible:ring-offset-bg-primary

    border
    border-border-subtle
    transition-all
    duration-300
    hover:border-brand-primary/40
    hover:bg-brand-primary/5
    hover:shadow-[0_0_18px_rgba(209,139,53,.12)]
  "
      >
        <Menu className="h-5 w-5" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="
                fixed
                inset-x-4
                top-4
                z-50
                rounded-3xl
                border
                border-border-subtle
                bg-surface-primary
                p-6
              "
              initial={{
                opacity: 0,
                y: -30,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Navigation</h3>

                <motion.button
                  aria-label="Close navigation menu"
                  whileHover={{
                    rotate: 90,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => setOpen(false)}
                  className="
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-xl

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-brand-primary
    focus-visible:ring-offset-2
    focus-visible:ring-offset-bg-primary

    border
    border-border-subtle
    transition-all
    duration-300
    hover:border-brand-primary/40
    hover:bg-brand-primary/5
  "
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              <nav className="mt-8 flex flex-col gap-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.25,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="
        block
        text-lg
        text-text-secondary
        transition-all
        duration-300
        hover:translate-x-2
        hover:text-brand-primary
      "
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    aria-label="Open resume in a new tab"
                    className="
  inline-flex
  items-center
  justify-center
  rounded-full
  border
  border-brand-primary/30
  bg-brand-primary/10
  px-5
  py-3
  text-brand-primary
  transition-all
  duration-300
  hover:-translate-y-1
  hover:border-brand-primary/50
  hover:shadow-[0_12px_30px_rgba(209,139,53,.18)]
"
                  >
                    Resume
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
