import { experiences } from "@/profile";
import Button from "./ui/Button";

export function ExperienceCard() {
  return (
    <div
      className="card-elevated p-8 md:p-10 h-full animate-fade-up stagger-3"
      style={{ opacity: 0 }}
    >
      <p className="section-label">Career</p>
      <h2
        className="font-[family-name:var(--font-display)] text-2xl font-bold mb-8"
        style={{ color: "var(--text-primary)" }}
      >
        Experience
      </h2>

      <div className="space-y-8 mb-8">
        {experiences.map(({ title, from, to, description }, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Timeline line */}
            <div
              className="absolute left-0 top-2 bottom-0 w-px"
              style={{ background: "var(--border)" }}
            />
            {/* Timeline dot */}
            <div
              className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full border-2 transition-all duration-300 group-hover:scale-125"
              style={{
                borderColor: "var(--accent)",
                background: index === experiences.length - 1 ? "var(--accent)" : "var(--bg-card)",
              }}
            />

            <div className="flex flex-wrap items-baseline gap-x-3 mb-2">
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {title}
              </h3>
              <span
                className="text-xs font-mono tabular-nums px-2 py-0.5 rounded-full"
                style={{
                  background: "var(--bg-secondary)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                }}
              >
                {from} {to ? `\u2014 ${to}` : "\u2014 Present"}
              </span>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {description}
            </p>
          </div>
        ))}
      </div>

      <Button variant="outline">Know More</Button>
    </div>
  );
}
