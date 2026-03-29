import Button from "./ui/Button";

export function PortfolioCard({ name, description, image, index = 0 }) {
  return (
    <div
      className={`card-elevated group animate-fade-up stagger-${(index % 6) + 1}`}
      style={{ opacity: 0 }}
    >
      {/* Image container */}
      <div className="overflow-hidden aspect-[4/3] relative">
        <img
          src={`/${image}`}
          alt={name}
          className="card-img-top w-full h-full object-cover"
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
          style={{
            background: "linear-gradient(to top, rgba(10,10,13,0.8), transparent)",
          }}
        />
        {/* Number badge */}
        <div
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono"
          style={{
            background: "color-mix(in srgb, var(--bg-card) 85%, transparent)",
            backdropFilter: "blur(8px)",
            color: "var(--accent)",
            border: "1px solid var(--border)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-lg font-bold mb-2 font-[family-name:var(--font-display)]"
          style={{ color: "var(--text-primary)" }}
        >
          {name}
        </h3>
        <p
          className="text-sm leading-relaxed mb-5 line-clamp-2"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
          style={{ color: "var(--accent)" }}
        >
          View Project
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
