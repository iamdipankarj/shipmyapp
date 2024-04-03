import { DatabaseZap, Pyramid, Tent } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"

interface DatabaseFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function DatabaseFeature({
  className,
  ...props
}: DatabaseFeatureProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
          <div className="order-2 lg:order-2">
            <span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">
              15 Hours Saved
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              Database Integration
            </h1>
            <p className="text-gray-500">Fully featured database with Prisma ORM, without a blink of SQL.</p>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <Tent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Works with MySQL, Postgres, MongoDB and more.</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <Pyramid className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Simplicity of Prisma schema</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <DatabaseZap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Create complex queries with ease</h3>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-1">
            <Image
              src="/database.png"
              alt="ShipMyApp Banner"
              className="w-full h-full p-2 rounded-lg"
              width={1479}
              height={1204}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
