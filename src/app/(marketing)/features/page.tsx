"use client";

import { BottomSheet } from "@/components/bottom-sheet";
import toast from "react-hot-toast";

export default function Features() {
  return (
    <main>
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
        <BottomSheet />
        <button className="btn btn-primary" onClick={() => {
          toast.success("Drawer opened");
        }}>Show Toast</button>
      </section>
    </main>
  )
}
