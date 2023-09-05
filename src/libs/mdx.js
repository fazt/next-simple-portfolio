import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "src/posts");

export const getAllPosts = async () => {
  const files = fs.readdirSync(rootDirectory);
  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file.replace(".mdx", ""));
    posts.push(meta);
  }

  return posts;
};

async function getPostBySlug(slug) {
  const filePath = path.join(rootDirectory, `${slug}.mdx`);
  const realSlug = slug.replace(/\.mdx$/, "");

  const fileContent = fs.readFileSync(filePath, {
    encoding: "utf8",
  });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    meta: {
      ...frontmatter,
      slug: realSlug,
    },
    content,
  };
}
