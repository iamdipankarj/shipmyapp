import { Newspaper, SquarePlay, TextSelect } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"

interface BlogFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function BlogFeature({
  className,
  ...props
}: BlogFeatureProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">
              10 Hours Saved
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              Blog
            </h1>
            <p className="text-gray-500">
              Built-in blog templates to get you started with your content.
            </p>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <Newspaper className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Markdown Based (MDX)</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <TextSelect className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Open Graph Ready</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <SquarePlay className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Easiliy embed videos, tweets, zoomable images and more</h3>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/features/blog.png"
              alt="ShipMyApp Banner"
              className="w-full h-full p-2 rounded-lg"
              width={1479}
              height={1204}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
