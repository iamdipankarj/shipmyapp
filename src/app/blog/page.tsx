import { Article } from "@/components/article";
import { getAllPosts } from "@/lib/mdx";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen">
      <section className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
          {posts.map((post) => (
            <Article
              key={post.slug}
              heading={post.title}
              thumbnail="/blog/1.jpeg"
              href={`/blog/${post.slug}`}
              categories={["Technology", "UX Design"]}
              authorImage="/blog/avatar1.jpeg"
              authorName="John Doe"
              publishedAt="2022-10-21T15:48:00.000Z"
            >
              {post.excerpt}
            </Article>
          ))}
          {/* <Article
            heading="A Guide to NextJS and the state of Web Development"
            thumbnail="/blog/1.jpeg"
            href="/blog/a-guide-to-nextjs-and-the-state-of-web-development"
            categories={["Technology", "UX Design"]}
            authorImage="/blog/avatar1.jpeg"
            authorName="John Doe"
            publishedAt="2022-10-21T15:48:00.000Z"
          >
            Next.js: React framework for SSR, SSG, and CSR. Features include automatic code splitting, API routes, file-based routing, CSS, and TypeScript support.
          </Article> */}
        </div>
      </section>
    </main>
  )
}
