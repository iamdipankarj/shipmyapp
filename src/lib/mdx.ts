import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "./mdx-components";

const rootDirectory = path.join(process.cwd(), "src", "content");

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components: useMDXComponents(),
    options: {
      parseFrontmatter: true
    }
  });

  return {
    meta: {
      ...frontmatter,
      slug: realSlug
    },
    content
  }
}

export const getAllPosts = async () => {
  const files = fs.readdirSync(rootDirectory);
  let posts: any[] = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
}

export const getAllPostsByCategory = async (category: string) => {
  const files = fs.readdirSync(rootDirectory);
  let posts: any[] = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    if ((meta as any).categories.includes(category)) {
      posts.push(meta);
    }
  }

  return posts;
}

export const getAllPostsByAuthor = async (author: string) => {
  const files = fs.readdirSync(rootDirectory);
  let posts: any[] = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    if ((meta as any).author.toLowerCase().replaceAll(" ", "-") === author) {
      posts.push(meta);
    }
  }

  return posts;
}