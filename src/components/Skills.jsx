import { skills } from "@/data/skils";

export function Skills() {
  return (
    <section className="border bg-slate-100 dark:bg-zinc-950 dark:border-gray-600 rounded p-10 ">
      <h1 className="text-3xl text-sky-800 font-bold dark:text-sky-300">
        Skills
      </h1>
      {skills.map(({ skill, percentage }, i) => (
        <div className="py-3" key={i}>
          <h5 className="mb-2 dark:text-white">{skill}</h5>

          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-sky-400 h-2.5 rounded-full animate__animated animate__fadeIn"
              style={{
                width: `${percentage}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
}
