import { experiences } from "@/profile";
import Link from "next/link";

export function ExperienceCard() {
  return (
    <div className="col-span-8 py-2 p-10 border h-full">
      <div className="animate__animated animate__fadeIn">
        <h1 className="text-3xl font-bold my-4 text-sky-200">Experience</h1>

        <ul>
          {experiences.map(({ title, from, to }, index) => (
            <li key={index} className="list-disc">
              <h3 className="text-3xl mb-2">{title}</h3>
              <h5>
                {from} {to ? `- ${to}` : "- current"}
              </h5>
              <p className="text-slate-600 mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                excepturi ea explicabo. Illum suscipit illo, porro quisquam
                voluptatem officiis fugiat vel animi aliquam inventore rem. Quo
                laudantium temporibus cupiditate. Aut?
              </p>
            </li>
          ))}
        </ul>
        <Link href="/hireme" className="btn btn-light">
          Know More
        </Link>
      </div>
    </div>
  );
}
