import { Activity, LayoutTemplate, PanelsTopLeft } from 'lucide-react'
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

interface LandingFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function LandingFeature({
  className,
  ...props
}: LandingFeatureProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <FeatureContainer>
          <FeatureContent>
            <FeatureBadge>20 Hours Saved</FeatureBadge>
            <FeatureHeader>Ready-to-Ship Landing Pages</FeatureHeader>
            <FeatureDescription>Fully responsive, customizable landing pages for your next project. Simply add your content and you&apos;re good to go.</FeatureDescription>
            <FeatureListContainer>
              <FeatureListItem icon={<LayoutTemplate className="h-6 w-6 text-primary" />}>
                Multiple Page Templates
              </FeatureListItem>
              <FeatureListItem icon={<Activity className="h-6 w-6 text-primary" />}>
                Waitlist System
              </FeatureListItem>
              <FeatureListItem icon={<PanelsTopLeft className="h-6 w-6 text-primary" />}>
                Unique Header and Footer components
              </FeatureListItem>
            </FeatureListContainer>
          </FeatureContent>
          <FeatureImage imagePath="/features/banner.png" imageHeight={1080} imageWidth={900} />
        </FeatureContainer>
      </div>
    </section>
  )
}
