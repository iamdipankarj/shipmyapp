import { DatabaseZap, Pyramid, Tent } from 'lucide-react'
import React from 'react'
import { cn } from "@/lib/utils"
import { FeatureHeader } from '@/components/feature-header'
import { FeatureDescription } from '@/components/feature-description'
import { FeatureBadge } from '@/components/feature-badge'
import { FeatureListContainer } from '@/components/feature-list-container'
import { FeatureListItem } from '@/components/feature-list-item'
import { FeatureContainer } from '@/components/feature-container'
import { FeatureContent } from '@/components/feature-content'
import { FeatureImage } from '@/components/feature-image'

interface DatabaseFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function DatabaseFeature({
  className,
  ...props
}: DatabaseFeatureProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <FeatureContainer>
          <FeatureContent>
            <FeatureBadge>15 Hours Saved</FeatureBadge>
            <FeatureHeader>Database Integration</FeatureHeader>
            <FeatureDescription>Fully featured database with Prisma ORM, without a blink of SQL.</FeatureDescription>
            <FeatureListContainer>
              <FeatureListItem icon={<Tent className="h-6 w-6 text-primary" />}>
                Works with MySQL, Postgres, MongoDB and more.
              </FeatureListItem>
              <FeatureListItem icon={<Pyramid className="h-6 w-6 text-primary" />}>
                Simplicity of Prisma schema
              </FeatureListItem>
              <FeatureListItem icon={<DatabaseZap className="h-6 w-6 text-primary" />}>
                Create complex queries with ease
              </FeatureListItem>
            </FeatureListContainer>
          </FeatureContent>
          <FeatureImage imagePath="/database.png" imageHeight={1204} imageWidth={1479} />
        </FeatureContainer>
      </div>
    </section>
  )
}
