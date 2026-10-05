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
        src: "/images/profilee-v2.png",
        sizes: "1254x1254",
        type: "image/jpeg",
      },
    ],

    lang: site.locale,
  };
}
