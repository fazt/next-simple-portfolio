import Link from "next/link";
import Button from "./ui/Button";

export function Header() {
  return (
    <header className="grid grid-cols-12 bg-slate-300 text-black p-4 gap-x-4 mb-2 rounded-md dark:bg-zinc-950 dark:text-slate-300">
      <div className="col-span-4">
        <img src="/ryan-ray-profile2.jpeg" alt="" className="rounded-md" />
      </div>
      <div className="col-span-8 flex items-center p-4">
        <div>
          <h1 className="text-4xl font-bold mb-3">Ryan Ray</h1>
          <h3 className="text-3xl text-slate-700 mb-2 dark:text-slate-400">Full Stack Developer</h3>
          <p className="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt at
            optio aut placeat dolores sit in, non sapiente quasi eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ab
            cumque voluptatem accusamus eum quisquam corporis eos a assumenda
            voluptatibus!
          </p>
          <Button href="/contact">
            Hire Me
          </Button>
        </div>
      </div>
    </header>
  );
}
