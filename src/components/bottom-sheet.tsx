import React from 'react'
import { cn } from "@/lib/utils"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/drawer"

interface BottomSheetProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function BottomSheet({
  className,
  ...props
}: BottomSheetProps) {
  return (
    <div className={cn("block", className)} {...props}>
      <Drawer>
        <DrawerTrigger asChild>
          <button className="btn btn-primary">Open Drawer</button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <button className="btn flex-1 btn-primary">Submit</button>
            <DrawerClose asChild>
              <button className="btn flex-1 btn-outline btn-primary">Cancel</button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
