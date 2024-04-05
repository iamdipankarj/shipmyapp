"use client";

import { createClient } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export function supabaseSignOut() {
  const supabase = createClient();
  supabase.auth.signOut().then(() => {
    window.location.href = "/";
  }).catch((error) => {
    console.error(error);
  })
}

export function useSupabaseSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  
  useEffect(() => {
    setLoading(true);
    supabase.auth.getSession().then((response) => {
      setSession(response.data.session)
      const metadata = response.data.session?.user?.user_metadata
      setImage(metadata?.avatar_url || null);
      setName(metadata?.full_name || null);
      setLoading(false);
    }).catch((error) => {
      console.error(error)
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return {
    name,
    loading,
    image,
    session
  }
}
