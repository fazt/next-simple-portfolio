import Link from "next/link";

export function Header() {
  return (
    <header className="grid grid-cols-12 bg-zinc-800 p-4 gap-x-4 mb-2">
      <div className="col-span-4">
        <img src="/ryan-ray-profile2.jpeg" alt="" className="rounded-md" />
      </div>
      <div className="col-span-8 text-white flex items-center p-4">
        <div>
          <h1 className="text-4xl font-bold mb-3">Ryan Ray</h1>
          <h3 className="text-3xl text-slate-300 mb-2">Full Stack Developer</h3>
          <p className="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt at
            optio aut placeat dolores sit in, non sapiente quasi eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ab
            cumque voluptatem accusamus eum quisquam corporis eos a assumenda
            voluptatibus!
          </p>
          <Link
            href="/hireme"
            className="border border-white rounded-md px-4 py-2 mt-4 inline-block"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
