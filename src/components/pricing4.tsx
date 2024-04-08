import React from 'react'
import { cn } from "@/lib/utils"
import { PricingColumnCorporate } from '@/components/pricing-column-corporate'
import { CheckoutButton } from '@/components/checkout-button'

interface Pricing4Props extends React.HTMLAttributes<HTMLDivElement> {
}

export function Pricing4({
  className,
  ...props
}: Pricing4Props) {
  return (
    <section id="pricing" className={cn("bg-base-100", className)} {...props}>
      <div className="container">
        <div className="flex gap-7 mt-14">
          <PricingColumnCorporate
            className="flex-1"
            heading="Starter"
            price="29"
            frequency="month"
            lineItems={[
              'Up to 600 minutes usage time',
              'Use for personal only',
              'Add up to 10 attendees',
              'Technical support via email'
            ]}
          >
            {/* <button
              className="bg-primary/10 text-primary/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-primary/20 transition-all duration-300"
            >
              Purchase Now
            </button> */}
            <CheckoutButton mode="subscription" priceId="price_1OyFWZSDcM5frhqBOQ71f6lQ">
              Purchase Now
            </CheckoutButton>
          </PricingColumnCorporate>
          <PricingColumnCorporate
            className="flex-1"
            heading="Plus"
            price="39"
            frequency="month"
            lineItems={[
              'Up to 600 minutes usage time',
              'Use for personal only',
              'Add up to 10 attendees',
              'Technical support via email'
            ]}
            featured
          >
            <CheckoutButton featured mode="subscription" priceId="price_1OyFWZSDcM5frhqBOQ71f6lQ">
              Purchase Now
            </CheckoutButton>
          </PricingColumnCorporate>
          <PricingColumnCorporate
            className="flex-1"
            heading="Pro"
            price="59"
            frequency="month"
            lineItems={[
              'Up to 600 minutes usage time',
              'Use for personal only',
              'Add up to 10 attendees',
              'Technical support via email'
            ]}
          >
            <CheckoutButton mode="subscription" priceId="price_1OyFWZSDcM5frhqBOQ71f6lQ">
              Purchase Now
            </CheckoutButton>
          </PricingColumnCorporate>
        </div>
      </div>
    </section>
  )
}
