import { Eye, FileCode, Mail, Tent } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import Link from 'next/link'

interface EmailFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function EmailFeature({
  className,
  ...props
}: EmailFeatureProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
          <div className="order-2 lg:order-2">
            <span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">
              10 Hours Saved
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              Emails
            </h1>
            <p className="text-gray-500">
             Easily send emails to your customers with built in templates.
            </p>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">ShipMyApp uses <Link target="_blank" href="https://resend.com/" rel="noopener noreferrer"><strong>Resend</strong></Link> for email service.</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <Tent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Send Welcome emails</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <FileCode className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Create custom email templates in minutes without dealing with HTML tables.</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Easily track if an email sent by your service is opened or not.</h3>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-1">
            <Image
              src="/email.png"
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
