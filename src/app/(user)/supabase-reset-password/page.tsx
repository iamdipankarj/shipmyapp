"use client";

import { SupabaseSubmitButton } from "@/components/supabase/supabase-submit-button";
import { AuthConsent } from "@/components/auth-consent";
import { resetPasswordForEmail } from "@/utils/supabase/actions";
import { useSearchParams } from "next/navigation";

export default function SupabaseResetPassword() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email")

  return (
    <main className="app-main">
      <div className="mb-5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Reset Password
        </h1>
        <p className="text-sm text-base-content/80 mt-1">🚀 Enter your new password 🚀</p>
      </div>
      <div className="flex flex-col gap-6 md:min-w-96">
        <form className="w-full" action={resetPasswordForEmail}>
          <div className="flex flex-col gap-2">
            {/* Email */}
            {email ? (
              <input type="hidden" id="email" name="email" value={email} />
            ) : null}
            {/* Password */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Password"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                required
              />
            </label>
            {/* Submit Button */}
            <SupabaseSubmitButton className="!mt-4" type="submit">Reset Password</SupabaseSubmitButton>
          </div>
        </form>
        <AuthConsent />
      </div>
    </main>
  )
}
