"use client";

import React from 'react'
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils"
import { Icons } from '@/components/icons';

interface SupabaseGoogleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export function SupabaseGoogleButton({
  className,
  children,
  formAction,
  ...props
}: SupabaseGoogleButtonProps) {
  const { pending, action } = useFormStatus();
  const isLoading = pending && action === formAction;

  return (
    <button className={cn("btn btn-outline")} disabled={isLoading} {...props}>
      {isLoading ? (
        <Icons.spinner className="h-4 w-4 animate-spin" />
      ) : (
        <Icons.googleColored className="h-4 w-4" />
      )}{" "}
      {children}
    </button>
  )
}
