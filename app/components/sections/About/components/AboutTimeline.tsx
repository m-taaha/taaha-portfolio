import { about } from "@/app/config/about";

export function AboutTimeline() {
  return (
    <div className="space-y-10">
      {about.timeline.map((item) => (
        <div
          key={item.year}
          className="
            border-l
            border-brand-primary/30
            pl-8
          "
        >
          <span
            className="
              text-sm
              text-brand-primary
            "
          >
            {item.year}
          </span>

          <h3
            className="
              mt-2
              text-2xl
              font-semibold
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-3
              leading-7
              text-text-secondary
            "
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
