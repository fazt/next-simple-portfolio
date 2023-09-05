"use client";
import Layout from "@/components/Layout";

import { Skills } from "@/components/Skills";
import { Portofolio } from "@/components/Portfolio";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Header } from "@/components/Header";

const Index = () => (
  <>
    <Header />
    <section className="grid grid-cols-12 gap-x-4">
      <div className="col-span-4">
        <Skills />
      </div>
      <div className="col-span-8">
        <ExperienceCard />
      </div>
    </section>
    <Portofolio />
  </>
);

export default Index;
