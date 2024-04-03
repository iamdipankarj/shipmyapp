import React from 'react'
import { cn } from "@/lib/utils"
import Image from 'next/image'

interface FeatureImageProps extends React.HTMLAttributes<HTMLDivElement> {
  order?: "static" | "reverse"
  imagePath: string
  imageWidth: number
  imageHeight: number
}

export function FeatureImage({
  order = "static",
  className,
  imagePath,
  imageWidth,
  imageHeight,
  ...props
}: FeatureImageProps) {
  return (
    <div className={cn("order-1", {
      "lg:order-1": order === "reverse",
      "lg:order-2": order === "static"
    }, className)} {...props}>
      <Image
        src={imagePath}
        alt="ShipMyApp Banner"
        className="w-full h-full p-2 rounded-lg"
        width={imageWidth}
        height={imageHeight}
        priority
      />
    </div>
  )
}
