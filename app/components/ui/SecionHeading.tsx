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

      <h2
        className="
          mt-3
          text-4xl
          font-bold
          tracking-tight
          sm:text-5xl
          "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-6
            text-base
            leading-7
            sm:text-lg
            m:leading-8
            text-text-secondary
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}
