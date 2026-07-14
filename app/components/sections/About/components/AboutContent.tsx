import { about } from "@/app/config/about";

export function AboutContent() {
  return (
    <div className="max-w-3xl">
      <p
        className="
          text-lg
          leading-8
          text-text-secondary
        "
      >
        {about.intro}
      </p>
    </div>
  );
}
