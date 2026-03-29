import { skills } from "@/data/skils";

export function Skills() {
  return (
    <section
      className="card-elevated p-8 h-full animate-fade-up stagger-2"
      style={{ opacity: 0 }}
    >
      <p className="section-label">Expertise</p>
      <h2
        className="font-[family-name:var(--font-display)] text-2xl font-bold mb-8"
        style={{ color: "var(--text-primary)" }}
      >
        Skills
      </h2>

      <div className="space-y-5">
        {skills.map(({ skill, percentage }, i) => (
          <div key={i} className="group">
            <div className="flex justify-between items-center mb-2">
              <span
                className="text-sm font-medium tracking-wide"
                style={{ color: "var(--text-primary)" }}
              >
                {skill}
              </span>
              <span
                className="text-xs font-mono tabular-nums"
                style={{ color: "var(--text-muted)" }}
              >
                {percentage}%
              </span>
            </div>

            <div
              className="w-full h-1.5 rounded-full overflow-hidden"
              style={{ background: "var(--bg-secondary)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${percentage}%`,
                  background: `linear-gradient(90deg, var(--accent-dark), var(--accent))`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
