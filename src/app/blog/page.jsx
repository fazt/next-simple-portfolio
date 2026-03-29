import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/libs/mdx";

export const dynamic = "force-static";

async function PostPage() {
  const posts = await getAllPosts();

  return (
    <section className="min-h-[calc(100vh-10rem)]">
      {/* Page header */}
      <div className="text-center mb-14 animate-fade-up" style={{ opacity: 0 }}>
        <p className="section-label">Thoughts & Ideas</p>
        <h1
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Blog
        </h1>
        <div className="divider-accent mx-auto" />
        <p
          className="text-base max-w-lg mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Articles about web development, technology, and the things I learn along the way.
        </p>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {posts.map((post, index) => (
          <PostCard post={post} index={index} key={post.slug} />
        ))}
      </div>
    </section>
  );
}

export default PostPage;
