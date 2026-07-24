import type { Metadata } from "next";

import { site } from "./site";
import { person } from "./person";

const title = `${person.name} • Software Engineer & AI Engineer`;

const description =
  "Portfolio of Mohammad Taaha Ashraf — Software Engineer and AI Engineer building scalable backend systems, AI-powered applications, and modern web experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: title,
    template: `%s • ${person.name}`,
  },

  description,

  applicationName: site.name,

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

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: site.url,
  },

  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    title,
    description,
    siteName: site.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${person.name} Portfolio`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@_mohammadTaaha", 
    title,
    description,
    images: ["/og-image.png"],
  },

//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//   },
};
