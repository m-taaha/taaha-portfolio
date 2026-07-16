import { contact } from "@/app/config/contact";

export function ContactContent() {
  return (
    <div className="space-y-10">
      <div
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
      </div>

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
              text-3xl
              font-semibold
              tracking-tight
              transition-colors
              hover:text-brand-primary
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
