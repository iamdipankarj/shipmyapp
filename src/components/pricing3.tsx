import React from 'react'
import { cn } from "@/lib/utils"
import { PricingColumnMinimal } from '@/components/pricing-column-minimal'

interface PricingProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Pricing3({
  className,
  ...props
}: PricingProps) {
  return (
    <section className={cn("bg-base-200 overflow-hidden", className)} {...props}>
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          <PricingColumnMinimal
            heading="Starter"
            price="$0"
            strikedPrice="$10"
            lineItems={[
              '8 hours usage of our coworking space',
              'Access to all events'
            ]}
          />
          <PricingColumnMinimal
            heading="Plus"
            price="$10"
            strikedPrice="$15"
            lineItems={[
              '8 hours usage of our coworking space',
              'Access to all events',
              'Dedicated Desk',
              'Free Business Address',
              'Free Lunch 1x a day'
            ]}
            featured
          />
          <PricingColumnMinimal
            heading="Starter"
            price="$20"
            strikedPrice="$25"
            lineItems={[
              '8 hours usage of our coworking space',
              'Access to all events'
            ]}
          />
          <PricingColumnMinimal
            heading="Enterprise"
            price="$30"
            strikedPrice="$35"
            lineItems={[
              '8 hours usage of our coworking space',
              'Access to all events',
              'Dedicated Desk',
              'Free Business Address',
              'Free Lunch 1x a day'
            ]}
          />
        </div>
      </div>
    </section>
  )
}
