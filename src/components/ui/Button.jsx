import Link from "next/link";

function Button({ children, href = "#", variant = "primary" }) {
  const baseStyles =
    "relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] rounded-full transition-all duration-400 cursor-pointer group";

  const variants = {
    primary:
      "text-surface-950 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5",
    outline:
      "border hover:shadow-lg hover:-translate-y-0.5",
  };

  const className = `${baseStyles} ${variants[variant]}`;

  const primaryStyle = variant === "primary"
    ? { background: "linear-gradient(135deg, var(--accent-dark), var(--accent), var(--accent-light))" }
    : { borderColor: "var(--accent)", color: "var(--accent)" };

  const arrow = (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  if (href && href !== "#") {
    return (
      <Link href={href} className={className} style={primaryStyle}>
        {children}
        {arrow}
      </Link>
    );
  }

  return (
    <button className={className} style={primaryStyle}>
      {children}
      {arrow}
    </button>
  );
}

export default Button;
