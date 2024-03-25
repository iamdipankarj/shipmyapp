"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { signIn } from "next-auth/react"
import { Loader2, User } from "lucide-react"
import { Icons } from "@/components/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [googleLoading, setGoogleLoading] = useState<boolean>(false)

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setGoogleLoading(true)

    signIn('google', { callbackUrl: '/features' })

    setTimeout(() => {
      setGoogleLoading(false)
    }, 3000)
  }

  const onEmailSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
  }

  return (
    <div className={cn("flex flex-col gap-6 md:min-w-72", className)} {...props}>
      <form onSubmit={onEmailSubmit}>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            id="email"
            placeholder="name@example.com"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            disabled={isLoading || googleLoading}
            required
          />
          <button className="btn btn-success text-white" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-neutral/80">
            Or continue with
          </span>
        </div>
      </div>
      <button className="btn btn-outline" type="button" disabled={googleLoading} onClick={onSubmit}>
        {googleLoading ? (
          <Icons.spinner className="h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="h-4 w-4" />
        )}{" "}
        Google
      </button>
    </div>
  )
}
