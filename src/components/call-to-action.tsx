import React from 'react'
import { cn } from "@/lib/utils"

interface CallToActionProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function CallToAction({
  className,
  ...props
}: CallToActionProps) {

  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="mb-5 text-2xl md:text-5xl font-bold font-heading text-center tracking-px-n leading-tight">
            Collaborate efficiently with the teams today
          </h2>
          <p className="mb-7 text-lg text-base-content/80 font-medium">
            Start your free 30-day trial, no credit card required. No hidden fees, cancel anytime.
          </p>
          <div className="mb-11 md:inline-block">
            <button
              className="btn btn-primary btn-lg w-full md:w-auto"
              type="button"
            >
              Join Free for 30 Days
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center -m-1">
            <div className="w-auto p-1">
              <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-8">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-8">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-8">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-auto p-1">
              <p className="text-base-content font-medium">
                <span>Join</span>
                {" "}
                <span className="font-bold">250+</span>
                {" "}
                <span>other startup founders</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div className={cn("block", className)} {...props}>
      Hello CallToAction
    </div>
  )
}
