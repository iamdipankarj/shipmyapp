"use client";

import { MailCheck } from "lucide-react";

export default function SupabaseVerifyPasswordChange() {
  return (
    <main className="flex flex-col h-screen p-6 justify-center items-center">
      <div className="text-sm text-base-content/60 flex flex-col items-center gap-2">
        <MailCheck className="w-10 h-10 text-primary" />
        <p>We have sent you an email to reset your password. Please check your inbox.</p>
      </div>
    </main>
  )
}
