import { Skills } from "@/components/Skills";
import { Portofolio } from "@/components/Portfolio";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Header } from "@/components/Header";

export const dynamic = "force-static";

const Index = () => (
  <>
    <Header />
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
      <div className="lg:col-span-4">
        <Skills />
      </div>
      <div className="lg:col-span-8">
        <ExperienceCard />
      </div>
    </section>
    <Portofolio />
  </>
);

export default Index;
