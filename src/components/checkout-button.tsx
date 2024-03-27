"use client";

import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/icons';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

interface CheckoutButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  featured?: boolean
  priceId: string
  mode: "subscription" | "payment"
}

export function CheckoutButton({
  className,
  featured = false,
  priceId,
  mode,
  children,
  ...props
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()
  const { data: session } = useSession();

  const handleSubmit = () => {
    if (!session) {
      push('/login')
      return
    }
    setLoading(true)
    fetch("/api/stripe/checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mode,
        priceId
      })
    }).then(res => res.json()).then(data => {
      if (data.session?.url) {
        window.location.href = data.session.url
      } else {
        toast.error("An error occurred. Please try again.")
        setLoading(false)
      }
    }).catch(err => {
      toast.error("An error occurred. Please try again.")
      setLoading(false)
    })
  }

  return (
    <button onClick={handleSubmit} className={cn("btn btn-primary group btn-block", className, {
      "btn-outline": !featured
    })} disabled={loading} {...props}>
      {loading ? (
        <Icons.spinner className="h-4 w-4 animate-spin" />
      ) : null}
      {children}
    </button>
  )
}
