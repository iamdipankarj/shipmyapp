import { Article } from "@/components/article";
import { capitalize } from "@/lib/helper";
import { getAllPostsByCategory } from "@/lib/mdx";

export default async function Taxonomy({ params }: { params: { slug: string } }) {
  const posts = await getAllPostsByCategory(params.slug);

  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center justify-center container">
        <h1 className="text-3xl font-semibold tracking-tight lg:leading-tight text-brand-primary lg:text-5xl">
          {capitalize(params.slug)}
        </h1>
        <p className="mt-1 text-gray-600">{posts.length} {posts.length > 1 ? "Articles" : "Article"}</p>
      </div>
      <section className="container py-5 lg:py-8">
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
