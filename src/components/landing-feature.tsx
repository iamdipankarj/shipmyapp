import { Activity, Book, LayoutTemplate, PanelsTopLeft } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"

interface LandingFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function LandingFeature({
  className,
  ...props
}: LandingFeatureProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">
              20 Hours Saved
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              Ready-to-Ship Landing Pages
            </h1>
            <p className="text-gray-500">
              Fully responsive, customizable landing pages for your next project. Simply add your content and you&apos;re good to go.
            </p>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <LayoutTemplate className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Multiple Page Templates</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Waitlist System</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <PanelsTopLeft className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Unique Header and Footer components</h3>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/banner1.png"
              alt="ShipMyApp Banner"
              className="w-full h-full p-2 rounded-lg"
              width={1080}
              height={900}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
