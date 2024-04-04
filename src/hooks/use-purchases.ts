"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getFormattedError } from "@/lib/errorHandler";

/**
 * Get all the purchases made by the user
 * @returns Object with data and error
 */
export function usePurchases() {
  const { data: session } = useSession();
  const [data, setData] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/user/purchases/${session.user.email}`).then((response) => response.json()).then((response: any) => {
        setData(response.data.purchases)
      }).catch((e) => {
        setError(getFormattedError(e) || "Unable to fetch user.")
      })
    }
  }, [session])

  return {
    data: data || [],
    error
  }
}
