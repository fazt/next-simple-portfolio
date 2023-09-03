"use client";
import Layout from "../components/Layout";
import Link from "next/link";

import { experiences, projects } from "../profile";
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";

const Index = () => (
  <Layout>
    <Header />
    <section className="grid grid-cols-12 gap-x-4">
      <div className="col-span-4">
        <Skills />
      </div>

      <div className="col-span-8 py-2 p-10">
        <div className="card bg-light animate__animated animate__fadeInRight">
          <h1 className="text-3xl font-bold my-4">Experience</h1>

          <ul>
            {/* List Item Experience */}
            {experiences.map(({ title, from, to }, index) => (
              <li key={index} className="list-disc">
                <h3 className="text-3xl mb-2">{title}</h3>
                <h5>
                  {from} {to ? `- ${to}` : "- current"}
                </h5>
                <p className="text-slate-600 mb-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                  excepturi ea explicabo. Illum suscipit illo, porro quisquam
                  voluptatem officiis fugiat vel animi aliquam inventore rem.
                  Quo laudantium temporibus cupiditate. Aut?
                </p>
              </li>
            ))}
          </ul>
          <Link href="/hireme" className="btn btn-light">
            Know More
          </Link>
        </div>
      </div>
    </section>
    {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {projects.map(({ name, description, image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${image}`} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!">Know More</a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="/portfolio" className="btn btn-outline-light">
                    More Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
