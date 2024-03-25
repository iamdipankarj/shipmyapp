"use client";

import Image from "next/image";
import { ArrowLeft, Mail, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { getFormattedError } from "@/lib/errorHandler";
import { Icons } from "@/components/icons";
import { useProfile } from "@/hooks/use-profile";

export default function ProfilePage() {
  const [name, setName] = useState<string>("")
  const [avatar, setAvatar] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { push, back } = useRouter()
  const { data: session } = useSession();

  const { data } = useProfile();

  if (!session) {
    push('/login')
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  useEffect(() => {
    if (data) {
      setName(data.name)
      setAvatar(data.avatar)
    }
  }, [data])

  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      setLoading(true)
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email: session?.user?.email
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      if (response.status !== 200) {
        setLoading(false);
        toast.error("An error occured.")
        return;
      }

      toast.success("Profile updated successfully.")
      setLoading(false);
    } catch (e) {
      setLoading(false);
      toast.error(getFormattedError(e) || "Unable to update user.")
    }
  }

  return (
    <main className="flex flex-col h-screen p-6 justify-center items-center bg-base-200/80">
      <form onSubmit={handleSubmit} className="flex flex-col p-6 items-center rounded-2xl bg-base-100 w-full md:w-1/3 mx-auto space-y-4">
        <div className="bg-neutral text-neutral-content rounded-full">
          <Image
            src={avatar || "/blog/avatar1.jpeg"}
            alt={name || "Anonymous User"}
            width={100}
            height={100}
            className="rounded-full"
            priority
          />
        </div>
        <label className="input input-bordered flex items-center gap-2 bg-base-200 w-full">
          <Mail className="w-5 h-5" />
          <input value={session?.user?.email || ""} type="text" className="grow cursor-not-allowed" placeholder="Email" readOnly />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <User className="w-5 h-5" />
          <input value={name} onChange={handleNameChange} type="text" className="grow" placeholder="John Doe" />
        </label>
        <button type="submit" className="w-full btn btn-success text-white" disabled={loading}>
          {loading ? (
            <Icons.spinner className="h-4 w-4 animate-spin" />
          ) : null}
          Update
        </button>
      </form>
      <button onClick={back} className="btn btn-outline mt-4">
        <ArrowLeft className="w-5 h-5 stroke-3" />
        Back
      </button>
    </main>
  )
}
