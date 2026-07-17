"use client"
import { motion } from "framer-motion";
import { contact } from "@/app/config/contact";

export function ContactContent() {
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

          <a
            href={`mailto:${contact.email}`}
            className="
             mt-3
inline-block
break-all
text-2xl
font-semibold
tracking-tight
transition-colors
hover:text-brand-primary
sm:text-3xl
            "
          >
            {contact.email}
          </a>
        </div>

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
