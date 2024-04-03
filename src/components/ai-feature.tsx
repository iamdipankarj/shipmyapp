import { Eye, PencilLine, Tent } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import Link from 'next/link'

interface AIFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function AIFeature({
  className,
  ...props
}: AIFeatureProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">
              72 Hours Saved
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              OpenAI Integration
            </h1>
            <p className="text-gray-500">
             Want to build a chatbot or a language model? ShipMyApp uses OpenAI to help you build AI-powered applications.
            </p>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <Tent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Build AI Apps</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="feature-icon">
                  <PencilLine className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Streaming Response supported</h3>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/llm.gif"
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
