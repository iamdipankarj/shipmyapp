import React from 'react'
import { cn } from "@/lib/utils"

interface FeatureHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
}

export function FeatureHeader({
  className,
  children,
  ...props
}: FeatureHeaderProps) {
  return (
    <h2 className={cn("text-3xl/tight font-medium mt-3 mb-4", className)} {...props}>
      {children}
    </h2>
  )
}
