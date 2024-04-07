"use client";

import { AuthConsent } from "@/components/auth-consent";
import { SupabaseGithubButton } from "@/components/supabase/supabase-github-button";
import { SupabaseGoogleButton } from "@/components/supabase/supabase-google-button";
import { SupabaseSubmitButton } from "@/components/supabase/supabase-submit-button";
import { loginWithEmailPassword, loginWithGithub, loginWithGoogle } from "@/utils/supabase/actions";
import { ArrowUpRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SupabaseLogin() {
  const searchParams = useSearchParams()

  const wasPasswordReset = searchParams.get("passwordReset") === "yes"
  
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <main className="app-main">
      {wasPasswordReset ? (
        <div className="text-white text-sm bg-primary px-2 py-2 fixed top-0 left-0 right-0 text-center z-50">
          Your password has been reset. Please login with your new password.
        </div>
      ) : null}
      <div className="mb-5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign In
        </h1>
        <p className="text-sm text-base-content/80 mt-1">Hi, Welcome back 👋</p>
      </div>
      <div className="flex flex-col gap-6 md:min-w-96">
        <div className="flex flex-row gap-2">
          {/* OAuth Google */}
          <form action={loginWithGoogle} className="flex-1">
            <SupabaseGoogleButton className="w-full">Google</SupabaseGoogleButton>
          </form>
          {/* OAuth Github */}
          <form action={loginWithGithub} className="flex-1">
            <SupabaseGithubButton className="w-full">Github</SupabaseGithubButton>
          </form>
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
        <form className="w-full" action={loginWithEmailPassword}>
          <div className="flex flex-col gap-2">
            {/* Email */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="name@example.com"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                required
              />
            </label>
            {/* Password */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <div className="input input-bordered flex items-center gap-2 w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="grow"
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect="off"
                  required
                />
                <button
                  type="button"
                  className="btn btn-circle btn-ghost w-8 h-8 min-h-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-base-content/50" />
                  ) : (
                    <Eye className="w-5 h-5 text-base-content/50" />
                  )}
                </button>
              </div>
            </label>
            {/* Submit Button */}
            <Link href="/supabase-forgot-password" className="link link-primary text-sm block text-right">Forgot Password?</Link>
            <SupabaseSubmitButton className="!mt-4" type="submit">Login</SupabaseSubmitButton>
            <p className="text-sm text-center mt-2">Not registered yet? <Link className="link link-primary no-underline inline-flex items-center gap-1" href="/supabase-register"><span>Create an account</span> <ArrowUpRight className="w-4 h-4" /> </Link></p>
          </div>
        </form>
        <AuthConsent />
      </div>
    </main>
  )
}
