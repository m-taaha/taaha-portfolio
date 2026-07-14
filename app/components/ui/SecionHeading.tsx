interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium text-brand-primary">{eyebrow}</p>

      <h2 className="mt-3 text-5xl font-bold tracking-tight">{title}</h2>

      {description && (
        <p
          className="
            mt-6
            text-lg
            leading-8
            text-text-secondary
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}
