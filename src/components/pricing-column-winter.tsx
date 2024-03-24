import React, { ReactNode } from 'react'
import { cn } from "@/lib/utils"
import { Ghost, X } from 'lucide-react'

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
  ...props
}: PricingColumnWinterProps) {
  return (
    <div className={cn("shadow-lg w-full px-4 pb-4 pt-6 relative flex flex-col z-10 bg-base-100 rounded-lg", className)} {...props}>
      <div className="flex-1">
        <div className='flex flex-row items-center gap-2'>
          <Ghost className="text-neutral w-6 h-6 shrink-0" />
          <span className="font-bold text-2xl flex-1">Day Pass</span>
        </div>
        <div className="text-base-content/60 my-4">What you&apos;ll Get</div>
        <ul className="space-y-2.5 leading-relaxed text-base flex-1">
          {lineItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index < enabledLength ? (
                <svg className="w-4 h-4 text-neutral" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0001 0.00012207C4.48612 0.00012207 0.00012207 4.48612 0.00012207 10.0001C0.00012207 15.5141 4.48612 20.0001 10.0001 20.0001C15.5141 20.0001 20.0001 15.5141 20.0001 10.0001C20.0001 4.48612 15.5141 0.00012207 10.0001 0.00012207ZM8.00112 14.4131L4.28812 10.7081L5.70012 9.29212L7.99912 11.5871L13.2931 6.29312L14.7071 7.70712L8.00112 14.4131Z" fill="#35353F"/>
                </svg>

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
      <button className="shrink-0 mt-8 btn w-full bg-[#2E6434] hover:bg-[#2E6434]/90 border-none text-white">Choose</button>
    </div>
  )
}
