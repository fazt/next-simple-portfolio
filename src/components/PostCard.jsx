function PostCard({ post }) {
  return (
    <article
      key={post.slug}
      className="bg-slate-300 p-4 mb-2 hover:bg-slate-200 hover:cursor-pointer dark:bg-slate-300 dark:hover:bg-slate-200"
    >
      <h1 className="text-xl font-bold mb-2">{post.title}</h1>
      <h3>{post.author}</h3>
      <p>{post.publishDate}</p>
    </article>
  );
}
export default PostCard;
