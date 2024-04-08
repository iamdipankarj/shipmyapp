import { TransitionComponent } from "@/components/transition-component";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="dashboard-main">
      <div className="dashboard-content flex items-center justify-center flex-col">
        <TransitionComponent>
          <div className="flex flex-col gap-2 items-center">
            <Settings className="w-12 h-12 text-primary" />
            <h1 className="font-semibold text-2xl">Settings</h1>
            <p className="text-base-content/70 text-sm">🚀 Add your application logic here 🚀</p>
          </div>
        </TransitionComponent>
      </div>
    </main>
  );
}
