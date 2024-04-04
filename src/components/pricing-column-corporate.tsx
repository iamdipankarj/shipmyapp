import React, { ReactNode } from 'react'
import { cn } from "@/lib/utils"
import { Check } from 'lucide-react'

interface PricingColumnCorporateProps extends React.HTMLAttributes<HTMLDivElement> {
  featured?: boolean
  lineItems: string[]
  currency?: string
  heading: ReactNode | null
  price: ReactNode | null
  frequency: "month" | "year"
}

export function PricingColumnCorporate({
  heading,
  lineItems,
  price,
  frequency,
  featured,
  children,
  className,
  ...props
}: PricingColumnCorporateProps) {
  return (
    <div className={cn("transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1 relative", className)} {...props}>
      {featured ? (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <span className="badge text-xs text-white font-semibold border-0 bg-primary">
              POPULAR
            </span>
          </div>
        </>
      ) : null}
      <div className={cn("border border-gray-300 bg-base-100 relative z-10 rounded w-full h-full text-center p-5", {
        "border-primary": featured,
      })}>
        <span className="text-lg text-primary">{heading}</span>
        <h1 className="text-3xl/tight font-semibold mt-3">
          <sup className="text-gray-500 text-sm font-normal">$</sup> {price}{" "}
          <sub className="text-gray-500 text-sm font-normal">/{frequency}</sub>
        </h1>
        <div className="border-b border-gray-200 w-full my-7" />
        <div>
          <div className="flex flex-col gap-4">
            {lineItems.map((item, index) => (
              <p key={index} className="flex items-center text-gray-600 gap-4">
                <Check className="w-4 h-4 text-green-500" />
                {item}
              </p>
            ))}
          </div>
          <div className="flex mt-20">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
