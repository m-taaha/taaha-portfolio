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
      "
    >
      <span
        className="
          relative
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-px
          after:w-full
          after:origin-left
          after:scale-x-0
          after:bg-brand-primary
          after:transition-transform
          after:duration-300
          group-hover:after:scale-x-100
        "
      >
        {site.name}
      </span>
    </Link>
  );
}
