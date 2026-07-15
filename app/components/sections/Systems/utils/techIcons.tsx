import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiTailwindcss,
  SiFramer,
  SiRedis,
  SiOpenid,
} from "react-icons/si";

import { TbBrandCpp } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";

export const techIcons: Record<string, { icon: React.ReactNode; color: string }> = {
  "Next.js": {
    icon: <SiNextdotjs />,
    color: "text-white",
  },

  React: {
    icon: <SiReact />,
    color: "text-sky-400",
  },

  TypeScript: {
    icon: <SiTypescript />,
    color: "text-blue-500",
  },

  "Node.js": {
    icon: <SiNodedotjs />,
    color: "text-green-500",
  },

  Python: {
    icon: <SiPython />,
    color: "text-yellow-400",
  },

  PostgreSQL: {
    icon: <SiPostgresql />,
    color: "text-sky-500",
  },

  Tailwind: {
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
  },

  "Framer Motion": {
    icon: <SiFramer />,
    color: "text-pink-400",
  },

  Redis: {
    icon: <SiRedis />,
    color: "text-red-500",
  },

  OpenAI: {
    icon: <SiOpenid />,
    color: "text-white",
  },

  "C++": {
    icon: <TbBrandCpp />,
    color: "text-blue-400",
  },

  Ethereum: {
    icon: <FaEthereum />,
    color: "text-purple-400",
  },
};
