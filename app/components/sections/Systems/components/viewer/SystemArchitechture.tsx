interface SystemArchitectureProps {
  architecture: readonly string[];
}

export function SystemArchitecture({ architecture }: SystemArchitectureProps) {
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
        Architecture
      </h4>

      <div className="flex flex-wrap items-center gap-3">
        {architecture.map((item, index) => (
          <div key={item} className="flex items-center gap-3">
            <div
              className="
                rounded-full
                border
                border-border-subtle
                bg-surface-secondary
                px-5
                py-2.5
                text-sm
                font-medium
              "
            >
              {item}
            </div>

            {index < architecture.length - 1 && (
              <span
                className="
                  text-xl
                  text-brand-primary
                "
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
