import Link from "next/link";

function Button({ children, href = "#" }) {
  const className =
    "bg-zinc-950 text-white hover:bg-zinc-900 rounded-md px-4 py-2 mt-4 inline-block dark:bg-slate-200 dark:text-black dark:hover:bg-slate-300";

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}

export default Button;
