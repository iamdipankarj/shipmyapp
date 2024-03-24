import React from 'react'
import { cn } from "@/lib/utils"
import { PricingColumnClassic } from '@/components/pricing-column-classic'

interface PricingProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Pricing1({
  className,
  ...props
}: PricingProps) {
  return (
    <section className={cn("bg-base-200 overflow-hidden", className)} {...props}>
      <div className="py-20 px-8 max-w-5xl mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          <PricingColumnClassic
            heading="Starter"
            enabledLength={4}
            price="$169"
            strikedPrice="$199"
            lineItems={[
              'NextJS boilerplate',
              'SEO & Blog',
              'Mailgun emails'
            ]}
          />
          <PricingColumnClassic
            heading="Pro"
            enabledLength={7}
            price="$299"
            strikedPrice="$399"
            lineItems={[
              'NextJS boilerplate',
              'SEO & Blog',
              'Mailgun emails',
              'Stripe payments',
              'MongoDB / Supabase',
              'Google Oauth & Magic Links',
              'Components & animations'
            ]} featured />
        </div>
      </div>
    </section>
  )
}
