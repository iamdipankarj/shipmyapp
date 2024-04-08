import React from 'react'
import { cn } from "@/lib/utils"

interface FeatureDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}

export function FeatureDescription({
  className,
  children,
  ...props
}: FeatureDescriptionProps) {
  return (
    <p className={cn("text-gray-500", className)} {...props}>{children}</p>
  )
}
