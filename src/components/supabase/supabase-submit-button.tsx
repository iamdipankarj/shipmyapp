"use client";

import React from 'react'
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils"
import { Icons } from '@/components/icons';

interface SupabaseSubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export function SupabaseSubmitButton({
  className,
  children,
  ...props
}: SupabaseSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button className={cn("btn btn-primary", className)} disabled={pending} {...props}>
      {pending ? (
        <Icons.spinner className="h-4 w-4 animate-spin" />
      ) : null}
      {children}
    </button>
  )
}
