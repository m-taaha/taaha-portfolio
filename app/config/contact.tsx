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
  readonly links: readonly ContactLink[];
}

export const contact: ContactConfig = {
  title: "Let's Build Something Great",

  description:
    "I'm currently looking for software engineering internships and exciting opportunities to build scalable products. Whether you have an idea, an opportunity, or simply want to connect, I'd love to hear from you.",

  availability: "Open to Internships",

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