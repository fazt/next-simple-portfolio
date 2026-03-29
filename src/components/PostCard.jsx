import Link from "next/link";

function PostCard({ post, index = 0 }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className={`card-elevated group p-6 h-full cursor-pointer animate-fade-up stagger-${(index % 6) + 1}`}
        style={{ opacity: 0 }}
      >
        {/* Top accent bar */}
        <div
          className="w-10 h-0.5 rounded-full mb-6 transition-all duration-500 group-hover:w-16"
          style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-light))" }}
        />

        {/* Post number */}
        <span
          className="text-xs font-mono mb-4 block"
          style={{ color: "var(--text-muted)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title */}
        <h2
          className="font-[family-name:var(--font-display)] text-xl font-bold mb-3 transition-colors duration-300"
          style={{ color: "var(--text-primary)" }}
        >
          {post.title}
        </h2>

        {/* Meta info */}
        <div className="flex items-center gap-3 mb-4">
          {/* Author avatar placeholder */}
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
            style={{
              background: "linear-gradient(135deg, var(--accent-dark), var(--accent))",
              color: "#0a0a0d",
            }}
          >
            {post.author?.charAt(0)?.toUpperCase() || "A"}
          </div>
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
            {post.author}
          </span>
        </div>

        {/* Date */}
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          {post.publishDate}
        </p>

        {/* Read more indicator */}
        <div
          className="flex items-center gap-2 mt-6 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-3"
          style={{ color: "var(--accent)" }}
        >
          Read article
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </article>
    </Link>
  );
}

export default PostCard;
