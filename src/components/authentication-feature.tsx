import { DatabaseZap, Sparkles, User } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { Icons } from '@/components/icons'

interface AuthenticationFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function AuthenticationFeature({
  className,
  ...props
}: AuthenticationFeatureProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
          <div className="order-2 lg:order-2">
            <span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">
              15 Hours Saved
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              User Authentication
            </h1>
            <p className="text-gray-500">
              Sign up and login pages without the hassle of setting them up.
            </p>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">User navigation</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Magic Link sign up and login</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
                  <Icons.googleColored className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">OAuth Login with Google and Github</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
                  <DatabaseZap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Save user data via Prisma</h3>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-1">
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
