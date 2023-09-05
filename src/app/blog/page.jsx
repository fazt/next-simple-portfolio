import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/libs/mdx";

async function PostPage() {
  const posts = await getAllPosts();

  return (
    <section className="min-h-[calc(100vh-10rem)]">
      {posts.map((post) => {
        return (
          <PostCard
            post={post}
          />
        );
      })}
    </section>
  );
}
export default PostPage;
