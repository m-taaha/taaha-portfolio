"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navigation } from "@/app/config/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key === "Tab") {
        const panel = document.getElementById("mobile-navigation-panel");
        const focusable = panel?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <motion.button
        ref={triggerRef}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
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
    hover:shadow-[0_0_18px_rgba(117,167,255,.12)]
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
              id="mobile-navigation-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="
                os-panel
                fixed
                inset-x-4
                top-4
                z-50
                rounded-[1.75rem]
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
              <div className="os-window-bar -mx-6 -mt-6 mb-6 rounded-t-[1.75rem]">
                <span className="os-window-dots" aria-hidden="true"><span /><span /><span /></span>
                <span>navigation.menu</span>

                <motion.button
                  ref={closeRef}
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

              <nav aria-label="Mobile navigation" className="mt-8 flex flex-col gap-6">
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
  hover:shadow-[0_12px_30px_rgba(117,167,255,.16)]
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
