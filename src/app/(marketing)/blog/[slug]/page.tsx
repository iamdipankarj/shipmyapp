import Link from "next/link";
import Image from "next/image";
import { Category } from "@/components/category";
import { getPostBySlug } from "@/lib/mdx";
import React from "react";
import { ReadingProgress } from "@/components/reading-progress";

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return {
    meta,
    content
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { content, meta } = await getPageContent(params.slug);
  const metaData = meta as any;

  const getAuthorLink = () => {
    return `/blog/author/${metaData.author.toLowerCase().replaceAll(" ", "-")}`;
  }

  return (
    <main className="min-h-screen">
      <ReadingProgress />
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg">
        <div className="mx-auto max-w-screen-md ">
          {Array.isArray(metaData.categories) ? (
            <div className="flex justify-center">
              <div className="flex gap-3 mt-5">
                {metaData.categories.map((category: string, _: number) => (
                  <Category key={_} slug={category.toLowerCase().replaceAll(" ", "-")}>
                    {category}
                  </Category>
                ))}
              </div>
            </div>
          ) : null}
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">
            {metaData.title}
          </h1>
          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Link href={`/blog/author/${metaData.author}`}>
                  <Image
                    src={metaData.authorImage}
                    alt={metaData.author}
                    className="rounded-full object-cover absolute w-full h-full inset-0 bg-transparent"
                    sizes="40px"
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </Link>
              </div>
              <div>
                <p className="text-gray-800">
                  <Link href={`/blog/author/${metaData.author.toLowerCase().replaceAll(" ", "-")}`}>{metaData.author}</Link>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time className="text-gray-500" dateTime={metaData.date}>
                    {metaData.date}
                  </time>
                  <span>· 2 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={metaData.image}
          alt={metaData.title}
          className="mx-auto mt-6"
          width={1200}
          height={708}
          loading="lazy"
        />
      </div>
      <section className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-2 lg:py-8">
        <div className="prose mx-auto lg:prose-xl">
          {content}
        </div>
        <div className="mb-7 mt-7 flex justify-center">
          <Link
            className="btn btn-sm"
            href="/blog"
          >
            ← View all posts
          </Link>
        </div>
        <div className="px-8 py-8 mt-10 rounded-2xl bg-base-300/50">
          <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
            <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
              <Link href={getAuthorLink()}>
                <Image
                  src={metaData.authorImage}
                  alt={metaData.author}
                  className="rounded-full object-cover absolute w-full h-full inset-0 bg-transparent"
                  sizes="96px"
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </Link>
            </div>
            <div>
              <div className="mb-3">
                <h3 className="text-lg font-medium text-base-content">
                  About {metaData.author}
                </h3>
              </div>
              <div>
                <p>
                  John is a Staff Engineer specialising in Frontend at{" "}
                  <a href="https://shipmyapp.com/" rel="noopener" target="_blank">
                    Enormicom
                  </a>
                  , as well as being a co-founder of Acme and the content management system
                  Sanity. Prior to this, he was a Senior Engineer at Vercel.
                </p>
              </div>
              <div className="mt-3">
                <Link
                  className="py-2 text-sm text-primary rounded-full"
                  href={getAuthorLink()}
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
