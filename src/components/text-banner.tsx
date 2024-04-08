import React from 'react'
import { cn } from "@/lib/utils"

interface TextBannerProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function TextBanner({
  className,
  children,
  ...props
}: TextBannerProps) {
  return (
    <section className={cn("pt-36 pb-24 bg-slate-100", className)} {...props}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="md:text-5xl/tight text-3xl font-semibold mb-6">
            {children}
          </h2>
        </div>
      </div>
    </section>
  )
}
