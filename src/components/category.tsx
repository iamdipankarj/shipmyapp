import React from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils"

interface CategoryProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  slug: string
}

export function Category({
  className,
  children,
  slug,
  ...props
}: CategoryProps) {
  return (
    <Link href={`/blog/category/${slug}`} className={cn("badge [&:not(:hover)]:badge-outline badge-success hover:text-white text-xs font-medium tracking-wider uppercase text-nowrap whitespace-nowrap", className)} {...props}>{children}</Link>
  )
}
