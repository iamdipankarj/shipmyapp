import React from 'react'
import { cn } from "@/lib/utils"

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
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}
