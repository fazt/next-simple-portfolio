import { skills } from "@/profile";

export function Skills() {
  return (
    <div className="border border-gray-200 p-10 ">
      <h1 className="text-3xl text-sky-300 font-bold">Skills</h1>

      {skills.map(({ skill, percentage }, i) => (
        <div className="py-3" key={i}>
          <h5 className="mb-2">{skill}</h5>

          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="bg-sky-400 h-2.5 rounded-full animate__animated animate__fadeIn"
              style={{
                width: `${percentage}%`,
              }}
            ></div>
          </div>

          {/* <div className="progress ">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${percentage}%` }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div> */}
        </div>
      ))}
    </div>
  );
}
