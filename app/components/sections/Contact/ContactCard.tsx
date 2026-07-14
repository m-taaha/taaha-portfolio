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
          <p className="text-sm text-brand-primary">Contact</p>

          <h3 className="mt-2 text-2xl font-semibold">Let's Connect</h3>

          <p className="mt-4 leading-7 text-text-secondary">
            Reach out through any of the platforms below. I'm always happy to
            connect with fellow developers, recruiters, and people building
            interesting products.
          </p>
        </div>

        <div className="border-t border-border-subtle" />

        <ContactLinks />

        <div className="border-t border-border-subtle" />

        <p className="text-sm leading-7 text-text-secondary">
          Thanks for visiting my portfolio. I look forward to building something
          amazing together.
        </p>
      </div>
    </article>
  );
}
