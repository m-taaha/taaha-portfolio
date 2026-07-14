import { about } from "@/app/config/about";

export function AboutStats() {
  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {about.stats.map((stat) => (
        <div
          key={stat.label}
          className="
            rounded-2xl
            border
            border-border-subtle
            bg-surface-primary
            p-8
          "
        >
          <h3 className="text-4xl font-bold">{stat.value}</h3>

          <p className="mt-2 text-text-secondary">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
