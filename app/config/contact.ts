export interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly icon: string;
}

export interface ContactConfig {
  readonly title: string;
  readonly description: string;
  readonly availability: string;
  readonly email: string;
  readonly location: string;
  readonly responseTime?: string;
  readonly links: readonly ContactLink[];
}

export const contact: ContactConfig = {
  title: "Interested in Building Together?",

  description:
    "I'm currently looking for software engineering internships and opportunities to build scalable backend systems, AI products, and developer tools.",

  availability: "Open to Software Engineering Internships",

  email: "mtaahaashraf@gmail.com",

  location: "New Delhi, India",



  links: [
    {
      label: "GitHub",
      href: "https://github.com/m-taaha",
      icon: "GitHub",
    },

    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohammad-taaha-ashraf",
      icon: "LinkedIn",
    },

    {
      label: "Resume",
      href: "/resume.pdf",
      icon: "Resume",
    },
  ],
} as const;
