import { redirect } from "next/navigation"
import { getServerSession } from "next-auth";
import { UserAuthForm } from "@/components/user-auth-form";
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Login() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email || null;

  if (userEmail) {
    redirect("/")
  }

  return (
    <main className="flex flex-col min-h-screen p-6 justify-center items-center">
      <div className="mb-5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign In
        </h1>
        <p className="text-sm text-base-content/80 mt-1">Hi, Welcome back 👋</p>
      </div>
      <UserAuthForm />
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
  );
}
