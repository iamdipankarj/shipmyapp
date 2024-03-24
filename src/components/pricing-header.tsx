import React from 'react'
import { cn } from "@/lib/utils"
import { Gift } from 'lucide-react'

interface PricingHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function PricingHeader({
  className,
  children,
  ...props
}: PricingHeaderProps) {
  return (
    <div className={cn("flex flex-col text-center w-full", className)} {...props}>
      <p className="font-medium text-primary mb-8">Pricing</p>
      <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8 max-w-2xl mx-auto">
        Affordable plans for everyone
      </h2>
      <p className="text-sm md:text-base flex justify-center items-center gap-2 ">
        <Gift size={24} className="w-5 h-5 fill-success animate-pulse" />
        <span>
          <span className="text-success">$100 off</span> for the first 2010 customers
          (14 left)
        </span>
      </p>
      {children}
    </div>  
  )
}
