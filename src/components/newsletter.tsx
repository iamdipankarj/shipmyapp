import React from 'react'
import { cn } from "@/lib/utils"
import { Lock, Mail } from 'lucide-react'

interface NewsletterProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Newsletter({
  className,
  ...props
}: NewsletterProps) {
  return (
    <section className={cn("py-32 overflow-hidden", className)} {...props}>
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <div className="mb-6 relative mx-auto w-16 h-16 bg-primary rounded-full">
            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="mb-3 text-2xl md:text-4xl text-center font-bold font-heading tracking-px-n leading-tight">
            Join Our Newsletter
          </h2>
          <p className="mb-8 font-medium text-base-content/70 leading-relaxed">
            Get the latest news and updates. No spam, we promise.
          </p>
          <form className="space-y-4 flex flex-col items-center">
            <input
              type="text"
              className="input input-bordered input-primary w-full"
              placeholder="name@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              required
            />
            <button
              className="btn btn-primary w-full"
              type="button"
            >
              Subscribe Now
            </button>
          </form>
          <div className="flex flex-wrap justify-center items-center mt-4 gap-2">
            <Lock className="w-4 h-4 text-base-content/80" />
            <p className="font-sans text-sm text-base-content/80">
              We never share your information to any third party
            </p>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div className={cn("block", className)} {...props}>
      Hello Newsletter
    </div>
  )
}
