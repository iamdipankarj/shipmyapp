import React from 'react'
import { cn } from "@/lib/utils"

interface BannerSimpleProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function BannerSimple({
  className,
  ...props
}: BannerSimpleProps) {
  return (
    <div className={cn("relative flex flex-col w-full bg-cover bg-center min-h-screen", className)} style={{backgroundImage: 'url(/blog/food.jpg)'}} {...props}>
      <div className="hero-overlay w-full h-full inset-0 absolute bg-zinc-900 bg-opacity-70"></div>
      <div className="w-full max-w-7xl mx-auto px-4 py-4 md:py-8 shrink-0">
        <div className="relative z-50 flex justify-between items-center">
          <span className="text-xl md:text-2xl uppercase text-neutral-content font-bold border-t-2 border-b-2 border-t-error border-b-error shrink-0">Food Co.</span>
          <button className="btn btn-sm md:btn-md bg-[#FB0006] hover:bg-[#FB0006]/80 border-none text-white uppercase font-bold">Order now</button>
        </div>
      </div>
      <div className='relative flex-1 flex items-center justify-center'>
        <div className="-mt-20 container mx-auto px-4 flex flex-col gap-4 text-center justify-center items-center">
          <p className='text-error font-bold text-sm tracking-wide'>India's #1 Snack Company</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">Beyond Breakfast</h1>
          <h2 className="text-2xl md:text-5xl font-bold text-white/90">Delivered directly to your floor</h2>
          <p className="text-white/70">Satisfy your food cravings from a carefully crafted menu.</p>
          <button className="btn btn-outline border-[#FB0006] hover:bg-[#FB0006]/80 text-white uppercase font-bold btn-sm">Learn more</button>
        </div>
      </div>
    </div>
  )
}
