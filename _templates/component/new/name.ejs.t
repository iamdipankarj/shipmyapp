---
to: src/components/<%= name %>.tsx
---
import React from 'react'
import { cn } from "@/lib/utils"

interface <%= name %>Props extends React.HTMLAttributes<HTMLDivElement> {
}

export function <%= name %>({
  className,
  ...props
}: <%= name %>Props) {
  return (
    <div className={cn("block", className)} {...props}>
      Hello <%= name %>
    </div>
  )
}
