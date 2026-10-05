import Link from "next/link";
import { site } from "@/app/config/site";

export function NavBrand() {
  return (
    <Link
      href="/"
      className="
  group
  text-lg
  font-semibold
  tracking-tight
  transition-colors
  duration-300
  hover:text-brand-primary

  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-brand-primary
  focus-visible:ring-offset-2
  focus-visible:ring-offset-bg-primary
  rounded-md
"
    >
      <span className="flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-xl border border-brand-primary/25 bg-brand-primary/10 font-mono text-sm font-semibold text-brand-primary transition group-hover:border-brand-primary/50 group-hover:bg-brand-primary/15">
          t.
        </span>
        <span>{site.name}</span>
      </span>
    </Link>
  );
}
