"use client";

import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import { Check, Loader2, SendHorizonal } from 'lucide-react';
import { toast } from 'sonner';

interface WaitlistProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Waitlist({
  className,
  ...props
}: WaitlistProps) {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: input })
    }).then((response) => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(response)
    }).then(() => {
      setInput("")
      toast.success("You have been added to the waitlist.")
      setLoading(false)
    }).catch((e) => {
      setLoading(false)
      toast.error("Unable to add to waitlist.")
    })
  }

  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <div className="container">
        <form onSubmit={handleSubmit} className="text-center space-y-4">
          <h2 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold">
            John the <span className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0 inline-flex">waitlist</span><br />to know when we launch
          </h2>
          <p className="sm:text-lg text-gray-500 !mb-8">
            We&apos;re not quite ready yet. But, we&apos;re working hard and we&apos;ll be ready soon.<br />Sign up to be the first to know when we launch.
          </p>
          <div className="flex flex-col md:flex-row gap-2 justify-center max-w-lg mx-auto">
            <input
              value={input}
              type="email"
              className="input input-bordered md:flex-1"
              placeholder="Your Email"
              onChange={handleInputChange}
              disabled={loading}
              required
            />
            <button type="submit" className="btn btn-md btn-primary shrink-0" disabled={loading}>
              {loading ? (
                <Loader2 className="animate-spin w-4 h-4" />
              ) : (
                <SendHorizonal className="w-4 h-4" />
              )}
              Join Waitlist
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-5 justify-center !mt-4">
            <div className="flex items-center gap-2">
              <Check className="stroke-primary stroke-2 w-5 h-5" />
              <p className="text-sm text-gray-700">Don&apos;t worry, we will not spam you. Guaranteed.</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
