import React, { ReactNode } from 'react'
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { Category } from '@/components/category';

interface ArticleProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode | null
  thumbnail: string
  href: string
  authorImage: string
  authorName: string
  categories: string[]
  publishedAt: string
}

export function Article({
  className,
  heading,
  thumbnail,
  href,
  authorImage,
  categories = [],
  authorName,
  publishedAt,
  children,
  ...props
}: ArticleProps) {
  return (
    <article className={cn("block", className)} {...props}>
      <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
        <Link
          className="relative block aspect-video"
          href={href}
        >
          <Image
            src={thumbnail}
            alt="Thumbnail"
            sizes="(max-width: 768px) 30vw, 33vw"
            width={1200}
            height={708}
            className="absolute w-full h-full inset-0 bg-transparent"
            priority
          />
        </Link>
      </div>
      <div className="flex gap-2 items-center mt-4 flex-wrap">
        {categories.map((category, _) => 
          <Category key={_} slug={category.toLowerCase().replaceAll(" ", "-")}>{category}</Category>
        )}
        <span className="text-base-content/30 inline-flex text-xs">&mdash;</span>
        <span className="text-base-content/50 inline-flex text-xs">2 mins read</span>
      </div>
      {heading ? (
        <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 text-base-content">
          <Link href={href}>
            <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {heading}
            </span>
          </Link>
        </h2>
      ) : null}
      <div className="block">
        <p className="mt-2 line-clamp-3 text-sm text-base-content/60">
          <Link href={href}>
            {children}
          </Link>
        </p>
      </div>
      <div className="mt-3 flex items-center space-x-3 text-base-content/60">
        <Link href={`/blog/author/${authorName.toLowerCase().replaceAll(" ", "-")}`}>
          <div className="flex items-center gap-3">
            <div className="relative h-5 w-5 flex-shrink-0">      
              <Image
                src={authorImage}
                alt={authorName}
                sizes="20px"
                width={100}
                height={100}
                className="rounded-full object-cover absolute w-full h-full inset-0 bg-transparent"
              />
            </div>
            <span className="truncate text-sm">{authorName}</span>
          </div>
        </Link>
        <span className="text-xs text-gray-300">•</span>
        <time className="truncate text-sm" dateTime={publishedAt}>
          {publishedAt}
        </time>
      </div>
    </article>  
  )
}
