import React from 'react'
import { cn } from "@/lib/utils"
import { PricingColumnWinter } from '@/components/pricing-column-winter'

interface PricingProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Pricing2({
  className,
  ...props
}: PricingProps) {
  return (
    <section className={cn("bg-base-200 overflow-hidden", className)} {...props}>
      <div className="py-20 px-8 max-w-5xl mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          <PricingColumnWinter
            heading="Starter"
            enabledLength={4}
            price="$20"
            lineItems={[
              '8 hours usage of our coworking space',
              'Access to all events'
            ]}
          />
          <PricingColumnWinter
            heading="Pro"
            enabledLength={7}
            price="$30"
            lineItems={[
              '8 hours usage of our coworking space',
              'Access to all events',
              'Dedicated Desk',
              'Free Business Address',
              'Free Lunch 1x a day'
            ]} featured />
        </div>
      </div>
    </section>
  )
}
