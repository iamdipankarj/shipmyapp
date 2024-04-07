"use server";

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
      redirectTo: `${process.env.HOST_NAME}/api/auth/callback?next=${process.env.NEXT_APP_URL!}`,
    },
  })

  if (data.url) {
    redirect(data.url)
  } else if (error) {
    redirect('/supabase-auth-error')
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
    redirect('/supabase-auth-error')
  }
}

/**
 * Login with username and password
 * @param formData FormData object containing email and password
 */
export async function loginWithEmailPassword(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/supabase-auth-error')
  }

  revalidatePath('/', 'layout')
  redirect(process.env.NEXT_APP_URL!)
}

/**
 * Sign up with email and password
 * @param formData FormData object containing email and password
 */
export async function register(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/supabase-auth-error')
  }

  revalidatePath('/', 'layout')
  redirect('/auth/verify-request')
}

/**
 * Resend a confirmation email
 * @param email String
 * @returns Supabase
 */
export async function resendConfirmationMail(formData: FormData) {
  const supabase = createClient()

  const email = formData.get('email') as string

  const { error } = await supabase.auth.resend({
    type: "signup",
    email,
    options: {
      emailRedirectTo: `${process.env.HOST_NAME}/dashboard`,
    }
  })

  if (error) {
    redirect('/supabase-auth-error')
  }

  revalidatePath('/', 'layout')
  redirect('/supabase-verify-email?verificationSent=yes')
}

/**
 * Forgot Password
 * @param email String
 * @returns void
 */
export async function forgotPassword(formData: FormData) {
  const supabase = createClient()
  const email = formData.get('email') as string

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.HOST_NAME}/supabase-reset-password?email=${email}`,
  })

  if (error) {
    redirect('/supabase-auth-error')
  }

  revalidatePath('/', 'layout')
  redirect('/supabase-verify-password-change?resetSent=yes')
}

/**
 * Reset the password for an email
 * @param formData FormData
 */
export async function resetPasswordForEmail(formData: FormData) {
  const supabase = createClient()
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.updateUser({
    email,
    password
  })

  if (error) {
    redirect('/supabase-auth-error')
  }

  revalidatePath('/', 'layout')
  redirect('/supabase-login?passwordReset=yes')
}
