import { redirect } from "next/navigation"
import { getServerSession } from "next-auth";
import { UserAuthForm } from "@/components/user-auth-form";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AuthConsent } from "@/components/auth-consent";

export default async function Login() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email || null;

  if (userEmail) {
    redirect("/")
  }

  return (
    <main className="app-main">
      <div className="mb-5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign In
        </h1>
        <p className="text-sm text-base-content/80 mt-1">Hi, Welcome back 👋</p>
      </div>
      <UserAuthForm />
      <AuthConsent />
    </main>
  );
}
