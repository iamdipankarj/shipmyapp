---
to: src/components/<%= name %>.tsx
---
import React from 'react'
import { cn } from "@/lib/utils"

interface <%= h.humanize(name) %>Props extends React.HTMLAttributes<HTMLDivElement> {
}

export function <%= h.humanize(name) %>({
  className,
  ...props
}: <%= h.humanize(name) %>Props) {
  return (
    <div className={cn("block", className)} {...props}>
      Hello <%= h.humanize(name) %>
    </div>
  )
}
