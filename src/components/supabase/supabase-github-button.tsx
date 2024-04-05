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
  ...props
}: SupabaseGithubButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button className={cn("btn btn-outline", className)} disabled={pending} {...props}>
      {pending ? (
        <Icons.spinner className="h-4 w-4 animate-spin" />
      ) : (
        <Icons.gitHub className="h-4 w-4" />
      )}{" "}
      {children}
    </button>
  )
}
