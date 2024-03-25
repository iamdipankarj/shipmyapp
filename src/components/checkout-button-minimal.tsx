"use client";

import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/icons';
import { useSession } from 'next-auth/react';

interface CheckoutButtonMinimalProps extends React.HTMLAttributes<HTMLButtonElement> {
  featured?: boolean
  priceId: string
}

export function CheckoutButtonMinimal({
  className,
  featured = false,
  priceId,
  children,
  ...props
}: CheckoutButtonMinimalProps) {
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
        mode: "subscription",
        priceId
      })
    }).then(res => res.json()).then(data => {
      // window.location.href = data.url
      console.log(data)
    }).catch(err => {
      console.error(err)
      setLoading(false)
    })
  }

  return (
    <button onClick={handleSubmit} className={cn("btn btn-success hover:!text-white", {
      "text-white": featured,
      "btn-outline": !featured
    })} disabled={loading} {...props}>
      {loading ? (
        <Icons.spinner className="h-4 w-4 animate-spin" />
      ) : null}
      {children}
    </button>
  )
}
