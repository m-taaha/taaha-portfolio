import Link from "next/link";
import { site } from "@/app/config/site";

export function NavBrand() {
  return (
    <Link
      href="/"
      className="
        text-lg
        font-semibold
        tracking-tight
        transition-colors
        hover:text-brand-primary
      "
    >
      {site.name}
    </Link>
  );
}
