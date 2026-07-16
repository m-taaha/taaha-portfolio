import { FiCheck } from "react-icons/fi";

interface SystemHighlightsProps {
  highlights: readonly string[];
}

export function SystemHighlights({ highlights }: SystemHighlightsProps) {
  return (
    <section className="space-y-5">
      <h4
        className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.2em]
          text-text-secondary
        "
      >
        Highlights
      </h4>

      <div className="grid gap-3 sm:grid-cols-2">
        {highlights.map((highlight) => (
          <div
            key={highlight}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-border-subtle
              bg-surface-secondary
              px-4
              py-3
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-brand-primary/10
                text-brand-primary
              "
            >
              <FiCheck size={16} />
            </div>

            <span>{highlight}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
