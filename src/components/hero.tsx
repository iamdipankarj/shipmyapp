import React from 'react'
import { cn } from "@/lib/utils"
import Link from 'next/link'

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Hero({
  className,
  ...props
}: HeroProps) {
  return (
    <div className={cn("hero min-h-screen", className)} style={{backgroundImage: 'url(/blog/1.jpg)'}} {...props}>
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h2 className="mb-5 text-5xl font-bold">Leave the boring stuff to us</h2>
          <p className="mb-5">
            We built ShipMyApp to help you focus on building your product. We take care of the boilerplate code so you can keep shipping.
          </p>
          <Link href='#pricing' className="btn btn-primary">Get ShipMyApp</Link>
        </div>
      </div>
    </div>
  )
}
