import { contact } from "@/app/config/contact";

export function ContactContent() {
  return (
    <div className="space-y-8">
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

      <p className="max-w-xl leading-8 text-text-secondary">
        {contact.description}
      </p>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-text-muted">Email</p>

          <p className="text-lg">{contact.email}</p>
        </div>

        <div>
          <p className="text-sm text-text-muted">Location</p>

          <p className="text-lg">{contact.location}</p>
        </div>
      </div>
    </div>
  );
}
