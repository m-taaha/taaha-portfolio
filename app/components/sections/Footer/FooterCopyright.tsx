import { site } from "@/app/config/site";

export function FooterCopyright() {
  return (
    <div
      className="
        border-t
        border-border-subtle
        pt-8
        text-sm
        text-text-muted
        space-y-2
      "
    >
      <p>{site.copyright}</p>

      <p>Built with Next.js • TypeScript • Tailwind CSS</p>
    </div>
  );
}
