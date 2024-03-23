import Link from "next/link";
import Image from "next/image";
import dayjs from 'dayjs'
import { Category } from "@/components/category";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const categories = ["Technology", "UX Design"];
  const publishedAt = "2022-10-18T14:49:00.000Z";

  return (
    <main className="min-h-screen">
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <div className="flex gap-3 mt-5">
              {categories.map((category, _) => (
                <Category key={_} slug={category.toLowerCase().replaceAll(" ", "-")}>
                  {category}
                </Category>
              ))}
            </div>
          </div>
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">
            A Guide to NextJS and the state of Web Development
          </h1>
          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Link href="/author/mario-sanchez">
                  <Image
                    src="/blog/avatar1.jpeg"
                    alt="Mario Sanchez"
                    className="rounded-full object-cover absolute w-full h-full inset-0 bg-transparent"
                    sizes="40px"
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </Link>
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  <Link href="/author/john-doe">John Doe</Link>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time className="text-gray-500 dark:text-gray-400" dateTime={publishedAt}>
                    {dayjs(publishedAt).format('MMMM D, YYYY')}
                  </time>
                  <span>· 2 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
          <div>My Post: {params.slug}</div>
        </div>
      </section>
    </main>
  )
}
