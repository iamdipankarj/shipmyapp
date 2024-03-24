"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { signIn } from "next-auth/react"
import { Loader2, User } from "lucide-react"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [cta, setCta] = useState<string>("Sign in with Google")

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    setCta("Signing in...")

    signIn('google', { callbackUrl: '/features' })

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <button className="btn btn-success text-lg text-white" type="button" disabled={isLoading} onClick={onSubmit}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <User className="mr-2 h-4 w-4" />
        )}{" "}
        {cta}
      </button>
    </div>
  )
}
