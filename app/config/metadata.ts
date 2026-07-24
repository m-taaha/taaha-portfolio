import type { Metadata } from "next";

import { site } from "./site";
import { person } from "./person";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: `${person.name} • Software Engineer & AI Engineer`,
    template: `%s • ${person.name}`,
  },

  description:
    "Portfolio of Mohammad Taaha Ashraf — Software Engineer and AI Engineer building scalable backend systems, AI-powered applications, and modern web experiences.",

  keywords: [
    "Mohammad Taaha Ashraf",
    "Taaha",
    "Software Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "FastAPI",
    "Python",
    "Portfolio",
  ],

  authors: [
    {
      name: person.name,
      url: site.url,
    },
  ],

  creator: person.name,
  publisher: person.name,

  applicationName: site.name,

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: site.url,
  },
};
