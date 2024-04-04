"use client";

import React from 'react'
import Image from "next/image"
import { cn } from "@/lib/utils"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"

interface ImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
}

const images = [
  "/carousel/1.jpg",
  "/carousel/2.jpg",
  "/carousel/3.jpg",
  "/carousel/4.jpg",
  "/carousel/5.jpg",
  "/carousel/6.jpg",
  "/carousel/7.jpg"
]

export function ImageCarousel({
  className,
  ...props
}: ImageCarouselProps) {

  return (
    <div className={cn("block", className)} {...props}>
      <Carousel>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                className="w-full"
                src={image}
                width={1200}
                height={800}
                alt={image}
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
