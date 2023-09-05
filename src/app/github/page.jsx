export async function getGithubData() {
  // throw new Error('my error')
  const res = await fetch("https://api.github.com/users/fazt");
  return await res.json();
}

const Github = async () => {
  const user = await getGithubData();

  return (
    <div className="h-[calc(100vh-12rem)] flex items-center justify-center">
      <div className="rounded-md text-center bg-slate-300 p-14 dark:bg-zinc-950">
        <h1 className="text-3xl font-bold">{user.name}</h1>
        <img src={user.avatar_url} className="w-40 h-40 m-auto my-4" />
        <p className="text-slate-600">{user.bio}</p>
        <a
          href={user.blog}
          target="_blank"
          className="bg-slate-100 px-3 py-2 text-lg block my-2"
        >
          My Blog
        </a>
        <a
          href={user.html_url}
          target="_blank"
          className="btn btn-outline-secondary"
        >
          Go to Github
        </a>
      </div>
    </div>
  );
};

export default Github;
