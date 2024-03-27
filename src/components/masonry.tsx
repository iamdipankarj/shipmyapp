import React from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"

interface MasonryProps extends React.HTMLAttributes<HTMLDivElement> {
}

const images = [
  {
    path: "/blog/1.jpg",
    width: 1200,
    height: 708
  },
  {
    path: "/blog/2.jpg",
    width: 1200,
    height: 800
  },
  {
    path: "/blog/3.jpg",
    width: 1200,
    height: 795
  },
  {
    path: "/blog/4.jpg",
    width: 700,
    height: 1050
  },
  {
    path: "/blog/5.jpg",
    width: 1200,
    height: 800
  },
  {
    path: "/blog/6.jpg",
    width: 1200,
    height: 900
  },
  {
    path: "/blog/7.jpg",
    width: 1200,
    height: 800
  },
  {
    path: "/blog/8.jpg",
    width: 1200,
    height: 801
  }
]

export function Masonry({
  className,
  ...props
}: MasonryProps) {
  return (
    <div className={className} {...props}>
      <ul role="list" className="mx-auto md:columns-2 lg:columns-3 xl:columns-3 space-y-4 md:space-y-6 md:gap-6">
        {images.map((image, index) => (
          <li key={index} className="break-inside-avoid max-md:flex justify-center">
            <div className="max-w-[550px] rounded">
              <figure className="relative w-full overflow-hidden rounded">
                <Image
                  className="w-full h-auto"
                  src={image.path}
                  alt="MakeMyRoom"
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                />
              </figure>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className={cn("block", className)} {...props}>
      Hello Masonry
    </div>
  )
}
