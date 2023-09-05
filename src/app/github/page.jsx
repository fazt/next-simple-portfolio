export async function getGithubData() {
  const res = await fetch("https://api.github.com/users/fazt");
  const data = await res.json();
  return data;
}

const Github = async () => {
  // if (statusCode) {
  //   return <Error statusCode={statusCode} />;
  // }
  const user = await getGithubData();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center bg-zinc-950 p-10">
        <h1 className="text-3xl font-bold">{user.name}</h1>
        <img src={user.avatar_url} className="w-40 h-40 m-auto my-4" />
        <p className="text-slate-600">{user.bio}</p>
        <a
          href={user.blog}
          target="_blank"
          className="bg-slate-600 px-3 py-2 text-lg block my-2"
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
