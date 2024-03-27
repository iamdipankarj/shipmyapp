import React, { ReactNode } from 'react'
import { cn } from "@/lib/utils"
import { Check, CheckCircle, Ghost, X } from 'lucide-react'

interface PricingColumnWinterProps extends React.HTMLAttributes<HTMLDivElement> {
  featured?: boolean
  lineItems: string[]
  enabledLength: number
  currency?: string
  heading: ReactNode | null
  price: ReactNode | null
}

export function PricingColumnWinter({
  className,
  lineItems,
  enabledLength,
  heading,
  price,
  currency = "USD",
  featured = false,
  children,
  ...props
}: PricingColumnWinterProps) {
  return (
    <div className={cn("shadow-lg w-full px-4 pb-4 pt-6 relative flex flex-col z-10 bg-base-100 rounded-lg", className)} {...props}>
      <div className="flex-1">
        <div className='flex flex-row items-center gap-2'>
          <Ghost className="text-base-content w-6 h-6 shrink-0" />
          <span className="font-bold text-2xl flex-1">Day Pass</span>
        </div>
        <div className="text-base-content/60 my-4">What you&apos;ll Get</div>
        <ul className="space-y-2.5 leading-relaxed text-base flex-1">
          {lineItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index < enabledLength ? (
                <CheckCircle className="w-5 h-5 text-base-content/80" />
              ) : (
                <X className="w-5 h-5 text-base-content/30" />
              )}
              <span className={cn({
                'text-base-content/30': index >= enabledLength
              })}>{item}</span>
            </li>
          ))}
        </ul>
        <div className="border border-dashed my-6"></div>
        <div><span className="font-bold text-2xl">{price}</span><span className="text-neutral/50">/Day</span></div>
      </div>
      {children}
    </div>
  )
}
