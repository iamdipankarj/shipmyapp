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
              thumbnail={post.image}
              href={`/blog/${post.slug}`}
              categories={post.categories}
              authorImage={post.authorImage}
              authorName={post.author}
              publishedAt={post.date}
            >
              {post.excerpt}
            </Article>
          ))}
        </div>
      </section>
    </main>
  )
}
