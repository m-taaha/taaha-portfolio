"use client";

import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { toast } from "sonner";

import { contact } from "@/app/config/contact";

export function ContactContent() {
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);

      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Unable to copy email");
    }
  }

  return (
    <div className="space-y-10">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.15,
        }}
        className="
          inline-flex
          rounded-full
          border
          border-brand-primary/30
          bg-brand-primary/10
          px-4
          py-2
          text-sm
          text-brand-primary
        "
      >
        {contact.availability}
      </motion.div>

      <div className="space-y-10">
        {/* Email */}

        <div>
          <p
            className="
              text-sm
              uppercase
              tracking-[0.18em]
              text-text-muted
            "
          >
            Email
          </p>

          <motion.button
            whileHover={{
              x: 3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={copyEmail}
            className="
              group
              mt-3
              flex
              items-center
              gap-3
              break-all
              text-left
              text-2xl
              font-semibold
              tracking-tight
              transition-colors
              hover:text-brand-primary
              sm:text-3xl
            "
          >
            <span>{contact.email}</span>

            <Copy
              className="
                h-5
                w-5
                opacity-0
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:opacity-100
              "
            />
          </motion.button>

          <p className="mt-2 text-sm text-text-muted">Click to copy email</p>
        </div>

        {/* Location */}

        <div>
          <p
            className="
              text-sm
              uppercase
              tracking-[0.18em]
              text-text-muted
            "
          >
            Location
          </p>

          <p className="mt-3 text-xl">{contact.location}</p>
        </div>
      </div>
    </div>
  );
}
