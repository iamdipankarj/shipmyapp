import Image from "next/image";
import { Article } from "@/components/article";
import { getAllPostsByAuthor } from "@/lib/mdx";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export default async function AuthorPage({ params }: { params: { slug: string } }) {
  const posts = await getAllPostsByAuthor(params.slug);

  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-20 w-20 overflow-hidden rounded-full">
          <Image
            src="/blog/avatar1.jpg"
            alt="Thumbnail"
            sizes="(max-width: 768px) 30vw, 33vw"
            width={200}
            height={200}
            className="absolute w-full h-full inset-0 bg-transparent"
            priority
          />
        </div>
        <h1 className="text-brand-primary mt-2 text-3xl font-semibold tracking-tight lg:text-3xl lg:leading-tight">
          John Doe
        </h1>
        <div className="flex gap-2 my-4">
          <Link href="https://twitter.com/iamdipankarj" rel="noopener" target="_blank" className="btn btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-6 h-6" width="100" height="100" viewBox="0 0 50 50">
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
            </svg>
          </Link>
          <Link href="https://twitter.com/iamdipankarj" rel="noopener" target="_blank" className="btn btn-circle">
            <Linkedin size={24} />
          </Link>
        </div>
        <div className="mx-auto mt-1 flex max-w-xl flex-col px-5 text-center text-gray-500">
          <p>
            John is a Staff Engineer specialising in Frontend at{" "}
            <a href="https://shipmyapp.com/" rel="noopener" target="_blank">
              Enormicom
            </a>
            , as well as being a co-founder of Acme and the content management system
            Sanity. Prior to this, he was a Senior Engineer at Vercel.
          </p>
        </div>
      </div>
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
