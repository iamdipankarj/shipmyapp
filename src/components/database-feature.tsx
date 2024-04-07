import { DatabaseZap, Pyramid, Tent } from 'lucide-react'
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
          <FeatureContent order="reverse">
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
          <FeatureImage order="reverse" imagePath="/features/database.png" imageHeight={1204} imageWidth={1479} />
        </FeatureContainer>
      </div>
    </section>
  )
}
