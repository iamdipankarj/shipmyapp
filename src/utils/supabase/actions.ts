'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

/**
 * Login with Github OAuth provider
 */
export async function loginWithGithub() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: "http://localhost:3000/api/auth/callback",
    },
  })

  if (data.url) {
    redirect(data.url)
  } else if (error) {
    redirect('/auth/supabase-auth-error')
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

/**
 * Login with Google OAuth provider
 */
export async function loginWithGoogle() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.HOST_NAME}/api/auth/callback?next=${process.env.NEXT_APP_URL!}`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })

  if (data.url) {
    redirect(data.url)
  } else if (error) {
    redirect('/auth/supabase-auth-error')
  }
}

/**
 * Login with username and password
 * @param formData FormData object containing email and password
 */
export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/auth/supabase-auth-error')
  }

  revalidatePath('/', 'layout')
  redirect(process.env.NEXT_APP_URL!)
}

/**
 * Sign up with email and password
 * @param formData FormData object containing email and password
 */
export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/auth/supabase-auth-error')
  }

  revalidatePath('/', 'layout')
  redirect('/auth/verify-request')
}
