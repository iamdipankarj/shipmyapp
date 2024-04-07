import { ScanBarcode, SquarePercent, Webhook } from 'lucide-react'
import React from 'react'
import { cn } from "@/lib/utils"

import { FeatureHeader } from '@/components/feature/feature-header'
import { FeatureDescription } from '@/components/feature/feature-description'
import { FeatureBadge } from '@/components/feature/feature-badge'
import { FeatureListContainer } from '@/components/feature/feature-list-container'
import { FeatureListItem } from '@/components/feature/feature-list-item'
import { FeatureContainer } from '@/components/feature/feature-container'
import { FeatureContent } from '@/components/feature/feature-content'
import { FeatureImage } from '@/components/feature/feature-image'

interface PaymentFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function PaymentFeature({
  className,
  ...props
}: PaymentFeatureProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <FeatureContainer>
          <FeatureContent>
            <FeatureBadge>15 Hours Saved</FeatureBadge>
            <FeatureHeader>Payments</FeatureHeader>
            <FeatureDescription>Collect payments from your users with ease. We support both subscriptions and one-time payments. ShipMyApp supports both <strong>Stripe</strong> and <strong>LemonSqueezy</strong> out of the box.</FeatureDescription>
            <FeatureListContainer>
              <FeatureListItem icon={<ScanBarcode className="h-6 w-6 text-primary" />}>
                Checkout Sessions
              </FeatureListItem>
              <FeatureListItem icon={<Webhook className="h-6 w-6 text-primary" />}>
                Webhook to manage subscriptons and one time payments
              </FeatureListItem>
              <FeatureListItem icon={<SquarePercent className="h-6 w-6 text-primary" />}>
                Multiple Pricing page designs to suit your needs.
              </FeatureListItem>
            </FeatureListContainer>
          </FeatureContent>
          <FeatureImage imagePath="/features/signin.png" imageHeight={1080} imageWidth={900} />
        </FeatureContainer>
      </div>
    </section>
  )
}
