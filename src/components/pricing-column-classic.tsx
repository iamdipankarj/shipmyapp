import React, { ReactNode } from 'react'
import { cn } from "@/lib/utils"
import { Banknote, Check, X } from 'lucide-react'

interface PricingColumnClassicProps extends React.HTMLAttributes<HTMLDivElement> {
  featured?: boolean
  lineItems: string[]
  enabledLength: number
  currency?: string
  heading: ReactNode | null
  price: ReactNode | null
  strikedPrice?: ReactNode | null
}

export function PricingColumnClassic({
  className,
  lineItems,
  enabledLength,
  heading,
  price,
  currency = "USD",
  strikedPrice,
  children,
  featured = false,
  ...props
}: PricingColumnClassicProps) {
  return (
    <div className={cn("relative w-full", className)} {...props}>
      {featured ? (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <span className="badge text-xs text-white font-semibold border-0 bg-primary">
              POPULAR
            </span>
          </div>
          <div className="absolute -inset-[2px] rounded-[8px] bg-primary z-10" />
        </>
      ) : null}
      <div className="relative flex flex-col gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg h-full">
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-lg lg:text-xl font-bold">{heading}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {strikedPrice ? (
            <div className="flex flex-col justify-end mb-[4px] text-lg ">
              <p className="relative opacity-80">
                <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[48%]" />
                <span className="text-base-content">{strikedPrice}</span>
              </p>
            </div>
          ) : null}
          <p className="text-5xl tracking-tight font-extrabold">{price}</p>
          <div className="flex flex-col justify-end mb-[4px]">
            <p className="text-xs opacity-60 uppercase font-semibold">{currency}</p>
          </div>
        </div>
        <ul className="space-y-2.5 leading-relaxed text-base flex-1">
          {lineItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index < enabledLength ? (
                <Check className="w-5 h-5 text-primary" />
              ) : (
                <X className="w-5 h-5 text-base-content/30" />
              )}
              <span className={cn({
                'text-base-content/30': index >= enabledLength
              })}>{item}</span>
            </li>
          ))}
        </ul>
        <div className="space-y-2">
          {children}
          <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
            One-time payment. No subscription.
          </p>
        </div>
      </div>
    </div>  
  )
}
