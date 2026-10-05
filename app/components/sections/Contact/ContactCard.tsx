import { ScaleIn } from "@/app/components/motion";
import { ContactLinks } from "./ContactLinks";

export function ContactCard() {
  return (
    <ScaleIn>
      <article
        className="
        os-panel
        os-panel-interactive
        rounded-[1.75rem]
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
    </ScaleIn>
  );
}
