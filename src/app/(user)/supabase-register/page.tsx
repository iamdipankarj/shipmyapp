"use client";

import { useState } from "react";
import { ArrowUpRight, Eye, EyeOff } from "lucide-react";
import { register } from "@/utils/supabase/actions";
import { SupabaseSubmitButton } from "@/components/supabase/supabase-submit-button";
import { AuthConsent } from "@/components/auth-consent";
import Link from "next/link";

export default function SupabaseRegister() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <main className="app-main">
      <div className="mb-5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Register
        </h1>
        <p className="text-sm text-base-content/80 mt-1">🚀 Create a new account 🚀</p>
      </div>
      <div className="flex flex-col gap-6 md:min-w-96">
        <form className="w-full" action={register}>
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
            <SupabaseSubmitButton className="!mt-4" type="submit">Sign up</SupabaseSubmitButton>
            <p className="text-sm text-center mt-2">Already have an account? <Link className="link link-primary no-underline inline-flex items-center gap-1" href="/supabase-login"><span>Login</span> <ArrowUpRight className="w-4 h-4" /> </Link></p>
          </div>
        </form>
        <AuthConsent />
      </div>
    </main>
  )
}
