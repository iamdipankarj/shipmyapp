import { redirect } from "next/navigation"
import { getServerSession } from "next-auth";
import { UserAuthForm } from "@/components/user-auth-form";

export default async function Login() {
  const session = await getServerSession();
  const userEmail = session?.user?.email || null;

  if (userEmail) {
    redirect("/features")
  }

  return (
    <main className="flex flex-col h-screen p-6 justify-center items-center">
      <UserAuthForm />
    </main>
  );
}
