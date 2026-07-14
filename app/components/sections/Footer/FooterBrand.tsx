import { person } from "@/app/config/person";
import { footer } from "@/app/config/footer";

export function FooterBrand() {
  return (
    <div className="space-y-5">
      <h3 className="text-3xl font-bold">{person.name}</h3>

      <p className="text-lg text-text-secondary">{person.title}</p>

      <p className="text-text-muted">{footer.tagline}</p>
    </div>
  );
}
