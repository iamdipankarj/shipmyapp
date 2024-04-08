import { Wand } from "lucide-react";
import { TransitionComponent } from "@/components/transition-component";

export default function Dashboard() {
  return (
    <main className="dashboard-main">
      <div className="dashboard-content flex items-center justify-center flex-col">
        <TransitionComponent>
          <div className="flex flex-col gap-2 items-center">
            <Wand className="w-12 h-12 text-primary" />
            <h1 className="font-semibold text-2xl">Dashboard</h1>
            <p className="text-base-content/70 text-sm">🚀 Add your application logic here 🚀</p>
          </div>
        </TransitionComponent>
      </div>
    </main>
  )
}
