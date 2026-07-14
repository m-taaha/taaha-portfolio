import Link from "next/link";
import { navigation } from "@/app/config/navigation";

export function NavLinks() {
  return (
    <nav>
      <ul className="flex items-center gap-10">
        {navigation.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="
                text-sm
                text-text-secondary
                transition-colors
                duration-300
                hover:text-text-primary
              "
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
