import Button from "./ui/Button";

export function PortfolioCard({ name, description, image }) {
  return (
    <div className="col-span-4 bg-slate-200 rounded-md dark:bg-zinc-950">
      <div className="overflow-hidden h-2/4 rounded-t-md">
        <img src={`/${image}`} alt="" className="card-img-top" />
      </div>
      <div className="px-10 py-4 h-2/4">
        <h3 className="text-xl font-bold my-2 dark:text-white">{name}</h3>
        <p className="dark:text-slate-400 mb-4">{description}</p>
        <Button>
          Know More
        </Button>
      </div>
    </div>
  );
}
