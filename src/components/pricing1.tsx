import React from 'react'
import { cn } from "@/lib/utils"
import { PricingColumnClassic } from '@/components/pricing-column-classic'
import { CheckoutButton } from '@/components/checkout-button'
import { Banknote } from 'lucide-react'

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
          >
            <CheckoutButton mode="subscription" priceId="price_1OyFWZSDcM5frhqBOQ71f6lQ" featured>
              <Banknote className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out" />
              Buy Now
            </CheckoutButton>
          </PricingColumnClassic>
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
            ]}
            featured
          >
            <CheckoutButton mode="subscription" priceId="price_1OyFWZSDcM5frhqBOQ71f6lQ" featured>
              <Banknote className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out" />
              Buy Now
            </CheckoutButton>
          </PricingColumnClassic>
        </div>
      </div>
    </section>
  )
}
