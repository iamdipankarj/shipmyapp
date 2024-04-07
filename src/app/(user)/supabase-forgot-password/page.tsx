"use client";

import { AuthConsent } from "@/components/auth-consent";
import { SupabaseSubmitButton } from "@/components/supabase/supabase-submit-button";
import { forgotPassword, loginWithEmailPassword } from "@/utils/supabase/actions";
import { useState } from "react";

export default function SupabaseForgotPassword() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <main className="flex flex-col h-screen p-6 justify-center items-center">
      <div className="mb-5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Forgot Password
        </h1>
        <p className="text-sm text-base-content/80 mt-1">Enter your email to recover your password</p>
      </div>
      <div className="flex flex-col gap-6 md:min-w-96">
        <form className="w-full" action={forgotPassword}>
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
            {/* Submit Button */}
            <SupabaseSubmitButton className="!mt-4" type="submit">Request Password Change</SupabaseSubmitButton>
          </div>
        </form>
        <AuthConsent />
      </div>
    </main>
  )
}
