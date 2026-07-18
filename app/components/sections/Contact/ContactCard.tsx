import { ContactLinks } from "./ContactLinks";

export function ContactCard() {
  return (
    <article
      className="
        rounded-3xl
        border
        border-border-subtle
        bg-surface-primary
        p-8
      "
    >
      <div className="space-y-8">
        <div>
          <p
            className="
text-sm
uppercase
tracking-[0.22em]
text-brand-primary
"
          >
            Connect
          </p>
        </div>

        <ContactLinks />
      </div>
    </article>
  );
}
