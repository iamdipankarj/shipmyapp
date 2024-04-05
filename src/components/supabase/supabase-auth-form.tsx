import React from "react"
import { cn } from "@/lib/utils"
import { login, signup } from "@/utils/supabase/actions"
import { SupabaseSubmitButton } from "@/components/supabase/supabase-submit-button"
import { SupabaseGoogleButton } from "@/components/supabase/supabase-google-button"
import { SupabaseGithubButton } from "@/components/supabase/supabase-github-button"

interface SupabaseAuthFormProps extends React.HTMLAttributes<HTMLFormElement> {}

export function SupabaseAuthForm({ className, ...props }: SupabaseAuthFormProps) {
  return (
    <form className={cn("flex flex-col gap-2 md:min-w-72", className)} {...props}>
      <div className="flex flex-col gap-2">
        <input
          type="email"
          id="email"
          name="email"
          className="input input-bordered w-full max-w-xs"
          placeholder="name@example.com"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          className="input input-bordered w-full max-w-xs"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect="off"
          required
        />

        <SupabaseSubmitButton formAction={login}>Login</SupabaseSubmitButton>
        <SupabaseSubmitButton formAction={signup}>Sign up</SupabaseSubmitButton>
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
      <SupabaseGoogleButton>Google</SupabaseGoogleButton>
      <SupabaseGithubButton>Github</SupabaseGithubButton>
    </form>
  )
}
