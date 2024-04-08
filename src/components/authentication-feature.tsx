import { DatabaseZap, Sparkles, User } from 'lucide-react'
import React from 'react'
import { cn } from "@/lib/utils"
import { Icons } from '@/components/icons'

import { FeatureHeader } from '@/components/feature/feature-header'
import { FeatureDescription } from '@/components/feature/feature-description'
import { FeatureBadge } from '@/components/feature/feature-badge'
import { FeatureListContainer } from '@/components/feature/feature-list-container'
import { FeatureListItem } from '@/components/feature/feature-list-item'
import { FeatureContainer } from '@/components/feature/feature-container'
import { FeatureContent } from '@/components/feature/feature-content'
import { FeatureImage } from '@/components/feature/feature-image'

interface AuthenticationFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function AuthenticationFeature({
  className,
  ...props
}: AuthenticationFeatureProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <FeatureContainer>
          <FeatureContent order="reverse">
            <FeatureBadge>15 Hours Saved</FeatureBadge>
            <FeatureHeader>User Authentication</FeatureHeader>
            <FeatureDescription>Sign up and login pages without the hassle of setting them up.</FeatureDescription>
            <FeatureListContainer>
              <FeatureListItem icon={<User className="h-6 w-6 text-primary" />}>
                User navigation
              </FeatureListItem>
              <FeatureListItem icon={<Sparkles className="h-6 w-6 text-primary" />}>
                Magic Link sign up and login
              </FeatureListItem>
              <FeatureListItem icon={<Icons.googleColored className="h-6 w-6 text-primary" />}>
                OAuth Login with Google and Github
              </FeatureListItem>
              <FeatureListItem icon={<DatabaseZap className="h-6 w-6 text-primary" />}>
                Save user data via Prisma
              </FeatureListItem>
            </FeatureListContainer>
          </FeatureContent>
          <FeatureImage order="reverse" imagePath="/features/signin.png" imageHeight={1080} imageWidth={900} />
        </FeatureContainer>
      </div>
    </section>
  )
}
