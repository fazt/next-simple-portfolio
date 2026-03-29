function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <h3
              className="font-[family-name:var(--font-display)] text-2xl font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              R<span style={{ color: "var(--accent)" }}>.</span>Ray
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Crafting digital experiences with precision and purpose.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="section-label">Navigation</p>
            <ul className="space-y-2">
              {["Blog", "Github", "Portfolio"].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-sm transition-colors duration-300 hover:opacity-100"
                    style={{ color: "var(--text-secondary)", opacity: 0.8 }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="section-label">Legal</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              &copy; {new Date().getFullYear()} Ryan Ray
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
              All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="mt-12 pt-6 border-t flex items-center justify-between"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
            Built with Next.js & Tailwind CSS
          </p>
          <div
            className="w-8 h-0.5 rounded-full"
            style={{ background: "var(--accent)" }}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
