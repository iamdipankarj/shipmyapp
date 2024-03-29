import React from 'react'
import { cn } from "@/lib/utils"
import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'

interface HeroMinimalProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function HeroMinimal({
  className,
  ...props
}: HeroMinimalProps) {
  return (
    <section className={cn("bg-blueGray-50", className)} {...props}>
      <div className="overflow-hidden pt-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="inline-block mb-6 px-2 py-1 font-semibold bg-info text-base-100 rounded-full">
                <div className="flex flex-wrap items-centerp-1">
                  <Link className="text-sm flex gap-1 items-center" href="#">
                    <span className='flex-1'>👋 We are hiring! View open roles</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                </div>
              </div>
              <h1 className="mb-6 text-4xl md:text-4xl lg:text-6xl font-bold font-heading md:max-w-xl leading-none">
                Discover mentors that helps you grow
              </h1>
              <p className="mb-11 text-lg text-base-content/80 font-medium md:max-w-md">
                Get the best-in-class group mentoring plans and professional
                benefits for your team
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="btn btn-primary btn-lg w-full md:w-auto"
                  type="button"
                >
                  Join Free for 30 Days
                </button>
                <button
                  className="btn btn-outline btn-lg w-full md:w-auto"
                  type="button"
                >
                  <Phone className="w-5 h-5" />
                  Book a call
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <img
                className="transform hover:-translate-y-16 transition ease-in-out duration-1000"
                src="/images/headers/header.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
