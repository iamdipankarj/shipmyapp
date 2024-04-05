import Link from "next/link";
import { SupabaseAuthForm } from "@/components/supabase/supabase-auth-form";

export default function LoginPage() {
  return (
    <main className="flex flex-col h-screen p-6 justify-center items-center">
      <h1 className="text-2xl font-semibold tracking-tight mb-5">
        Sign In
      </h1>
      <SupabaseAuthForm />
      <p className="px-8 text-center text-sm text-muted-foreground mt-10">
        By clicking continue, you agree to our <br />
        <Link
          href="/tos"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy-policy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </main>
  )
}
