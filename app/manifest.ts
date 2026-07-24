import type { MetadataRoute } from "next";

import { site } from "./config/site";
import { person } from "./config/person";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: person.name,
    short_name: "Taaha",

    description:
      "Software Engineer & AI Engineer building scalable backend systems and AI-powered applications.",

    start_url: "/",

    display: "standalone",

    background_color: "#0B0D10",

    theme_color: "#0B0D10",

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    lang: site.locale,
  };
}
