import Button from "./ui/Button";

export function Header() {
  return (
    <header className="relative rounded-3xl overflow-hidden mb-10 animate-fade-up"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Profile image */}
        <div className="md:col-span-4 relative">
          <div className="aspect-square md:aspect-auto md:h-full overflow-hidden">
            <img
              src="/ryan-ray-profile2.jpeg"
              alt="Ryan Ray"
              className="w-full h-full object-cover"
            />
            {/* Image gradient overlay */}
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background: "linear-gradient(to bottom, transparent 50%, var(--bg-primary))",
              }}
            />
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background: "linear-gradient(to right, transparent 60%, var(--bg-primary) 100%)",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-8 flex items-center relative z-10 px-8 py-10 md:px-14 md:py-16">
          <div>
            <p className="section-label animate-fade-in stagger-1" style={{ opacity: 0 }}>
              Full Stack Developer
            </p>

            <h1
              className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-up stagger-2"
              style={{ opacity: 0, color: "var(--text-primary)" }}
            >
              Ryan<br />
              <span className="gradient-text">Ray</span>
            </h1>

            <p
              className="text-lg leading-relaxed max-w-lg mb-4 animate-fade-up stagger-3"
              style={{ opacity: 0, color: "var(--text-secondary)" }}
            >
              Building digital experiences that blend elegant design with
              robust engineering. Specialized in scalable web applications
              and modern architectures.
            </p>

            <p
              className="text-base leading-relaxed max-w-lg mb-8 animate-fade-up stagger-4"
              style={{ opacity: 0, color: "var(--text-muted)" }}
            >
              Passionate about open-source, performance optimization,
              and crafting interfaces that people love to use.
            </p>

            <div className="animate-fade-up stagger-5" style={{ opacity: 0 }}>
              <Button href="/contact">Hire Me</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
