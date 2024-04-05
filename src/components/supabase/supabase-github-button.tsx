"use client";

import React from 'react'
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils"
import { Icons } from '@/components/icons';

interface SupabaseGithubButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export function SupabaseGithubButton({
  className,
  children,
  formAction,
  ...props
}: SupabaseGithubButtonProps) {
  const { pending, action } = useFormStatus();
  const isLoading = pending && action === formAction;

  return (
    <button className={cn("btn btn-outline")} disabled={pending} {...props}>
      {pending ? (
        <Icons.spinner className="h-4 w-4 animate-spin" />
      ) : (
        <Icons.gitHub className="h-4 w-4" />
      )}{" "}
      {children}
    </button>
  )
}
