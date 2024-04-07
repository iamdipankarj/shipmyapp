import React from 'react'
import { cn } from "@/lib/utils"

interface FeatureContentProps extends React.HTMLAttributes<HTMLDivElement> {
  order?: "static" | "reverse"
}

export function FeatureContent({
  className,
  order = "static",
  children,
  ...props
}: FeatureContentProps) {
  return (
    <div className={cn("order-2", {
      "lg:order-2": order === "reverse",
      "lg:order-1": order === "static"
    }, className)} {...props}>
      {children}
    </div>
  )
}
