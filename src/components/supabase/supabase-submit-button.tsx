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
  const { pending, action } = useFormStatus();
  const isLoading = pending && action === props.formAction;

  return (
    <button className={cn("btn btn-primary")} disabled={isLoading} {...props}>
      {isLoading ? (
        <Icons.spinner className="h-4 w-4 animate-spin" />
      ) : null}
      {children}
    </button>
  )
}
