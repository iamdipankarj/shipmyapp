import React from 'react'
import { cn } from "@/lib/utils"
import Link from 'next/link'

interface AuthConsentProps extends React.HTMLAttributes<HTMLParagraphElement> {
}

export function AuthConsent({
  className,
  ...props
}: AuthConsentProps) {
  return (
    <p className={cn("px-8 text-center text-sm text-muted-foreground", className)} {...props}>
      By clicking continue, you agree to our <br />
      <Link
        href="/tos"
        className="underline underline-offset-4 hover:text-primary"
      >
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link
        href="/privacy-policy"
        className="underline underline-offset-4 hover:text-primary"
      >
        Privacy Policy
      </Link>
      .
    </p>
  )
}
