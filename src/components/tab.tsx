import React from 'react'
import { cn } from "@/lib/utils"

interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
  selected?: boolean
}

export function Tab({
  className,
  selected = false,
  children,
  ...props
}: TabProps) {
  return (
    <button className={cn("w-full rounded-lg px-4 py-2 cursor-pointer duration-100 uppercase tracking-wide flex gap-2 items-center justify-center font-semibold active:scale-95", {
      "bg-white animate-popup shadow-lg": selected
    }, className)} {...props}>
      <span className="whitespace-nowrap">{children}</span>
    </button>
  )
}
