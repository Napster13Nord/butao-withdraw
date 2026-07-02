import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MiniLineChart } from "./mini-line-chart";

export function VpsVisual() {
  return (
    <div className="relative flex min-h-[220px] items-center justify-center px-4">
      {/* Main window */}
      <div className="w-full max-w-xl rounded-xl border bg-background shadow-sm">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-xs font-medium">VPS Status</span>
          </div>
          <Badge variant="secondary" className="h-5 text-[10px]">
            Browser View
          </Badge>
        </div>

        {/* Content */}
        <div className="flex gap-3 p-4">
          {/* Status box */}
          <div className="flex items-center gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-zinc-800">
              <Check className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Running
              </div>
            </div>
          </div>

          {/* Stats table */}
          <div className="flex-1 space-y-2 rounded-lg border px-4 py-3">
            <StatRow label="IP Address" value="185.49.201.23" />
            <StatRow label="VPS Uptime" value="32 days 6 hours" />
            <StatRow label="Installed OS" value="Ubuntu 24.04 LTS" />
          </div>
        </div>
      </div>

      {/* Floating notification - left */}
      <div className="absolute left-0 top-6 hidden rounded-lg border bg-background p-2.5 shadow-md lg:block">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <div className="text-[10px]">
            <div className="font-medium">Your VPS server</div>
            <div className="text-muted-foreground">is running smoothly</div>
          </div>
        </div>
      </div>

      {/* Floating metric - right */}
      <div className="absolute bottom-2 right-0 hidden w-32 rounded-lg border bg-background p-2.5 shadow-md lg:block">
        <div className="text-[10px] font-medium">Memory</div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">32%</span>
          <span className="text-[9px] text-muted-foreground">+1.2%</span>
        </div>
        <MiniLineChart className="mt-1 h-8" />
      </div>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-[11px]">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
