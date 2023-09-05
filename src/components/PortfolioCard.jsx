export function PortfolioCard({ name, description, image }) {
  return (
    <div className="col-span-4 bg-zinc-800">
      <div className="overflow">
        <img src={`/${image}`} alt="" className="card-img-top" />
      </div>
      <div className="px-4 py-2 h-100">
        <h3 className="text-xl font-bold my-2">{name}</h3>
        <p className="text-slate-400 mb-4">{description}</p>
        <a href="#!">Know More</a>
      </div>
    </div>
  );
}
