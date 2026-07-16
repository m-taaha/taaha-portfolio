import { person } from "@/app/config/person";
import { footer } from "@/app/config/footer";

export function FooterBrand() {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold tracking-tight">{person.name}</h3>

      <p className="text-text-secondary">{person.title}</p>

      <p className="max-w-sm text-text-muted">{footer.tagline}</p>
    </div>
  );
}
