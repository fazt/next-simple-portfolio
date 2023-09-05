import Link from "next/link";

const custom404 = () => (
  <div className="h-[calc(100vh-12rem)] flex justify-center items-center flex-col">
    <h1 className="text-9xl font-bold dark:text-white">404</h1>
    <p className="text-slate-600 dark:text-slate-300">
      This page does not exists. Please return to <Link href="/" className="text-sky-300">Home</Link>
    </p>
  </div>
);

export default custom404;
