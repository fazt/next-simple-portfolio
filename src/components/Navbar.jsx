import Link from "next/link";
import { SwitchTheme } from "./SwitchTheme";

export const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-40 backdrop-blur-xl border-b"
      style={{
        background: "color-mix(in srgb, var(--bg-primary) 85%, transparent)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex justify-between items-center h-16">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight hover:opacity-70 transition-opacity"
          style={{ color: "var(--text-primary)" }}
        >
          R<span style={{ color: "var(--accent)" }}>.</span>Ray
        </Link>
        <div className="flex items-center gap-x-8">
          <ul className="flex gap-x-6 text-sm font-medium tracking-wide">
            <li>
              <Link
                href="/blog"
                className="hover:opacity-100 transition-opacity duration-300 uppercase tracking-[0.15em]"
                style={{ color: "var(--text-secondary)", opacity: 0.8 }}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/github"
                className="hover:opacity-100 transition-opacity duration-300 uppercase tracking-[0.15em]"
                style={{ color: "var(--text-secondary)", opacity: 0.8 }}
              >
                Github
              </Link>
            </li>
          </ul>
          <div
            className="w-px h-5"
            style={{ background: "var(--border)" }}
          />
          <SwitchTheme />
        </div>
      </div>
    </nav>
  );
};
