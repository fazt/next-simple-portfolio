import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-zinc-950 py-3 text-white">
      <div className="container flex justify-between mx-auto">
        <Link href="/" className="text-xl font-bold">
          Simple Portfolio
        </Link>
        <ul className="flex gap-x-3">
          <li className="nav-item">
            <Link href="/blog" className="nav-link active" aria-current="page">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/github" className="nav-link">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
