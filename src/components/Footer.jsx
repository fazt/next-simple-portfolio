function Footer() {
  return (
    <footer className="bg-zinc-950 text-white text-center">
      <div className="container mx-auto p-10">
        <h1 className="text-slate-100 font-bold text-xl">
          &copy; Ryan Ray Portfolio
        </h1>
        <p className="text-slate-300">2000 - {new Date().getFullYear()}</p>
        <p className="text-slate-400">All rights Reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
