import { PencilLine, Tent } from 'lucide-react'
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

interface AIFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function AIFeature({
  className,
  ...props
}: AIFeatureProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <FeatureContainer>
          <FeatureContent order='reverse'>
            <FeatureBadge>72 Hours Saved</FeatureBadge>
            <FeatureHeader>OpenAI Integration</FeatureHeader>
            <FeatureDescription>Want to build a chatbot or a language model? ShipMyApp uses OpenAI to help you build AI-powered applications.</FeatureDescription>
            <FeatureListContainer>
              <FeatureListItem icon={<Tent className="h-6 w-6 text-primary" />}>
                Build AI Apps
              </FeatureListItem>
              <FeatureListItem icon={<PencilLine className="h-6 w-6 text-primary" />}>
                Streaming Response supported
              </FeatureListItem>
            </FeatureListContainer>
          </FeatureContent>
          <FeatureImage order='reverse' imagePath="/llm.gif" imageHeight={1080} imageWidth={900} />
        </FeatureContainer>
      </div>
    </section>
  )
}
