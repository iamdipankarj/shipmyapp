"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getFormattedError } from "@/lib/errorHandler";

/**
 * Get the current user profile, such as name, image and email
 * @returns Object with data, error and subscribed
 */
export function useProfile() {
  const { data: session } = useSession();
  const [data, setData] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState<boolean>(false)

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/user/${session.user.email}`).then((response) => response.json()).then((response) => {
        setData(response.data)
        setSubscribed(response.data.subscribed)
      }).catch((e) => {
        setError(getFormattedError(e) || "Unable to fetch user.")
      })
    }
  }, [session])

  return {
    subscribed,
    data,
    error
  }
}
