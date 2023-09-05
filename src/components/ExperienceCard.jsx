import { experiences } from "@/profile";
import Button from "./ui/Button";

export function ExperienceCard() {
  return (
    <div className="col-span-8 py-5 px-10 border rounded h-full bg-slate-100 dark:bg-zinc-950 dark:border-slate-600">
      <h1 className="text-3xl font-bold my-4 dark:text-sky-300">Experience</h1>
      <div className="animate__animated animate__fadeIn h-3/4 flex items-center">
        <ul className="dark:text-white">
          {experiences.map(({ title, from, to }, index) => (
            <li key={index} className="list-disc">
              <h3 className="text-3xl mb-2">{title}</h3>
              <h5>
                {from} {to ? `- ${to}` : "- current"}
              </h5>
              <p className="dark:text-slate-400 mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                excepturi ea explicabo. Illum suscipit illo, porro quisquam
                voluptatem officiis fugiat vel animi aliquam inventore rem. Quo
                laudantium temporibus cupiditate. Aut?
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Button>
        Know More
      </Button>
    </div>
  );
}
