import { Eye, FileCode, Mail, Tent } from 'lucide-react'
import React from 'react'
import { cn } from "@/lib/utils"
import Link from 'next/link'

import { FeatureHeader } from '@/components/feature/feature-header'
import { FeatureDescription } from '@/components/feature/feature-description'
import { FeatureBadge } from '@/components/feature/feature-badge'
import { FeatureListContainer } from '@/components/feature/feature-list-container'
import { FeatureListItem } from '@/components/feature/feature-list-item'
import { FeatureContainer } from '@/components/feature/feature-container'
import { FeatureContent } from '@/components/feature/feature-content'
import { FeatureImage } from '@/components/feature/feature-image'

interface EmailFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function EmailFeature({
  className,
  ...props
}: EmailFeatureProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <FeatureContainer>
          <FeatureContent order="reverse">
            <FeatureBadge>10 Hours Saved</FeatureBadge>
            <FeatureHeader>Emails</FeatureHeader>
            <FeatureDescription>Easily send emails to your customers with built in templates.</FeatureDescription>
            <FeatureListContainer>
              <FeatureListItem icon={<Mail className="h-6 w-6 text-primary" />}>
                ShipMyApp uses <Link target="_blank" href="https://resend.com/" rel="noopener noreferrer"><strong>Resend</strong></Link> for email service.
              </FeatureListItem>
              <FeatureListItem icon={<Tent className="h-6 w-6 text-primary" />}>
                Send Welcome emails
              </FeatureListItem>
              <FeatureListItem icon={<FileCode className="h-6 w-6 text-primary" />}>
                Create custom email templates in minutes without dealing with HTML tables.
              </FeatureListItem>
              <FeatureListItem icon={<Eye className="h-6 w-6 text-primary" />}>
                Easily track if an email sent by your service is opened or not.
              </FeatureListItem>
            </FeatureListContainer>
          </FeatureContent>
          <FeatureImage order="reverse" imagePath="/features/email.png" imageHeight={1080} imageWidth={900} />
        </FeatureContainer>
      </div>
    </section>
  )
}
