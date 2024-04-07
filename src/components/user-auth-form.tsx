"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { signIn } from "next-auth/react"
import { Icons } from "@/components/icons"
import { useSearchParams } from "next/navigation"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [googleLoading, setGoogleLoading] = useState<boolean>(false)
  const [githubLoading, setGithubLoading] = useState<boolean>(false)
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    setIsLoading(true)
    signIn('email', { email, callbackUrl })
  }

  const onGoogleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setGoogleLoading(true)
    signIn('google', { callbackUrl })
    setTimeout(() => {
      setGoogleLoading(false)
    }, 3000)
  }

  const onGithubSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setGithubLoading(true)
    signIn('github', { callbackUrl })
    setTimeout(() => {
      setGithubLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("flex flex-col gap-6 md:min-w-96", className)} {...props}>
      <div className="flex flex-row gap-2">
        <button className="btn btn-outline flex-1" type="button" disabled={googleLoading} onClick={onGoogleSubmit}>
          {googleLoading ? (
            <Icons.spinner className="h-4 w-4 animate-spin" />
          ) : (
            <Icons.googleColored className="h-4 w-4" />
          )}{" "}
          Google
        </button>
        <button className="btn btn-outline flex-1" type="button" disabled={githubLoading} onClick={onGithubSubmit}>
          {githubLoading ? (
            <Icons.spinner className="h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="h-4 w-4" />
          )}{" "}
          Github
        </button>
      </div>
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
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleEmailChange}
              value={email}
              className="input input-bordered w-full"
              placeholder="name@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              required
            />
          </label>

          <button className="btn btn-primary" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </button>
        </div>
      </form>
    </div>
  )
}
