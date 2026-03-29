import { projects } from "@/data/projects";
import { PortfolioCard } from "./PortfolioCard";
import Button from "./ui/Button";

export function Portofolio() {
  return (
    <section className="mt-20 mb-16">
      <div className="text-center mb-14 animate-fade-up" style={{ opacity: 0 }}>
        <p className="section-label">Selected Work</p>
        <h2
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Portfolio
        </h2>
        <div className="divider-accent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ name, description, image }, index) => (
          <PortfolioCard
            name={name}
            description={description}
            image={image}
            key={index}
            index={index}
          />
        ))}
      </div>

      <div className="text-center mt-14 animate-fade-up" style={{ opacity: 0 }}>
        <Button href="/portfolio" variant="outline">
          More Projects
        </Button>
      </div>
    </section>
  );
}
