"use client";

import { useState } from "react";
import { Loader2, MailCheck } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function SupabaseVerifyEmail() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState<boolean>(false)
  
  const email = searchParams.get("email")

  const onResendVerificationMail = async () => {
    if (!email) return;

    const supabase = createClient()
    setLoading(true)

    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      }
    })

    if (error) {
      toast.error("Error sending verification email. Check the logs.")
    } else {
      toast.success("Verification email sent")
    }
    setLoading(false)
  }

  return (
    <main className="flex flex-col h-screen p-6 justify-center items-center">
      <div className="text-sm text-base-content/60 flex flex-col items-center gap-2">
        {loading ? (
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
        ) : (
          <MailCheck className="w-10 h-10 text-primary" />
        )}
        <p>We have sent you an email to confirm your account. Please check your inbox.</p>
        <p>Didn&apos;t receive it? <button className="link link-primary" onClick={onResendVerificationMail}>Resend Verification Email</button></p>
      </div>
    </main>
  )
}
