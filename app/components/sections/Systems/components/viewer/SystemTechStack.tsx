import { techIcons } from "..//../utils/techIcons";

interface SystemTechStackProps {
  technologies: readonly string[];
}

export function SystemTechStack({ technologies }: SystemTechStackProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.slice(0, 5).map((tech) => {
        const item = techIcons[tech];

        return (
          <span
            key={tech}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-border-subtle
              px-3
              py-1
              text-xs
              text-text-secondary
            "
          >
            {item && <span className={item.color}>{item.icon}</span>}

            {tech}
          </span>
        );
      })}

      {technologies.length > 5 && (
        <span
          className="
            rounded-full
            border
            border-border-subtle
            px-3
            py-1
            text-xs
          "
        >
          +{technologies.length - 5}
        </span>
      )}
    </div>
  );
}
