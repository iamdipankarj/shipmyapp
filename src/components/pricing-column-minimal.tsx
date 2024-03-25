import React, { ReactNode } from 'react'
import { cn } from "@/lib/utils"
import { CheckCircle } from 'lucide-react'
import { CheckoutButtonMinimal } from '@/components/checkout-button-minimal'

interface PricingColumnMinimalProps extends React.HTMLAttributes<HTMLDivElement> {
  featured?: boolean
  lineItems: string[]
  currency?: string
  heading: ReactNode | null
  strikedPrice?: ReactNode | null
  price: ReactNode | null
  frequency: "monthly" | "yearly"
}

export function PricingColumnMinimal({
  className,
  lineItems,
  strikedPrice,
  heading,
  price,
  featured,
  frequency,
  ...props
}: PricingColumnMinimalProps) {
  return (
    <div className={cn("shadow-lg text-center w-full px-4 pb-4 pt-6 relative flex flex-col z-10 bg-base-100 rounded-lg", {
      "shadow-success/20": featured,
      "border-2 border-success/50": featured
    }, className)} {...props}>
      <h4 className="font-bold">{heading}</h4>
      <div className="my-4 mb-6 flex flex-col flex-1">
        <div>
          <span className='font-bold text-neutral text-4xl'>{price}</span>
          <span className='font-semibold text-base-content/30 text-3xl'>{frequency === "monthly" ? "/mo" : "/year"}</span>
        </div>
        {strikedPrice ? (
          <div className='line-through text-[#E22F38] text-sm font-bold mt-2'>{strikedPrice}{frequency === "monthly" ? "/mo" : "/year"}</div>
        ) : null}
        <ul className="space-y-2.5 leading-relaxed text-base flex-1 mt-5 text-left">
          {lineItems.map((item, index) => (
            <li key={index} className="text-sm text-neutral/50 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-[0.1rem]"/>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <CheckoutButtonMinimal priceId="price_1OyFWZSDcM5frhqBOQ71f6lQ" featured={featured}>
        Get Started
      </CheckoutButtonMinimal>
    </div>
  )
}
