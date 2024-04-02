import { DatabaseZap, ScanBarcode, Sparkles, SquarePercent, Webhook } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { Icons } from '@/components/icons'

interface PaymentFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function PaymentFeature({
  className,
  ...props
}: PaymentFeatureProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">
              15 Hours Saved
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              Payments
            </h1>
            <p className="text-gray-500">
              Collect payments from your users with ease. We support both subscriptions and one-time payments. ShipMyApp supports both <strong>Stripe</strong> and <strong>LemonSqueezy</strong> out of the box.
            </p>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
                  <ScanBarcode className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Checkout Sessions</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
                  <Webhook className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Webhook to manage subscriptons and one time payments</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
                  <SquarePercent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Multiple Pricing page designs to suit your needs.</h3>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/signin.png"
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
