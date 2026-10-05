"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useActiveSection() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("systems");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname.slice(1));
      return;
    }

    setActiveSection("systems");
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return activeSection;
}
