interface SystemHeaderProps {
  category: string;
  name: string;
  overview: string;
}

export function SystemHeader({ category, name, overview }: SystemHeaderProps) {
  return (
    <header className="space-y-6">
      <div className="space-y-2">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-brand-primary
          "
        >
          {category}
        </p>

        <h3
          className="
    text-3xl
    font-bold
    tracking-tight
    sm:text-4xl
    lg:text-5xl
  "
        >
          {name}
        </h3>
      </div>

      <p
        className="
          max-w-xl
          leading-7
          sm:leading-8
          text-text-secondary
        "
      >
        {overview}
      </p>
    </header>
  );
}
