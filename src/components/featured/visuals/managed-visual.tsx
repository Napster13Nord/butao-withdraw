import {
  Database,
  Folder,
  Globe,
  HardDrive,
  KeyRound,
  Lock,
  Server,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProgressRing } from "./progress-ring";

const services = [
  { name: "VPS", icon: Server, status: "Online", action: "See Details" },
  { name: "Web Hosting", icon: Globe, status: "Online", action: "Manage" },
  { name: "Domains", icon: Globe, status: "Online", action: "Manage" },
  { name: "Backups", icon: HardDrive, status: "Enabled", action: "Manage" },
] as const;

export function ManagedVisual() {
  return (
    <div className="relative flex min-h-[240px] items-center justify-center px-4">
      {/* Main window */}
      <div className="w-full max-w-2xl rounded-xl border bg-background shadow-sm">
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b px-4 py-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-medium">Managed Services</span>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Services grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {services.map((s) => (
              <div key={s.name} className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <div className="grid h-7 w-7 place-items-center rounded-md bg-muted/50">
                    <s.icon className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <span className="text-[11px] font-medium">{s.name}</span>
                </div>
                <div className="mt-1.5 flex items-center gap-1 text-[9px] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {s.status}
                </div>
                <div className="mt-1 text-[9px] text-primary">{s.action}</div>
              </div>
            ))}
          </div>

          {/* Tools row */}
          <div className="mt-3 flex flex-wrap items-center gap-4 border-t pt-3 text-[10px] text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Folder className="h-3 w-3" />
              <span>File Manager</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Database className="h-3 w-3" />
              <span>Databases</span>
            </div>
            <div className="flex items-center gap-1.5">
              <KeyRound className="h-3 w-3" />
              <span>SSH Keys</span>
            </div>
          </div>

          {/* SSL row */}
          <div className="mt-2 flex items-center gap-2 text-[10px]">
            <Lock className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">SSL Certificate</span>
            <Badge variant="secondary" className="h-4 rounded-full px-1.5 text-[9px]">
              <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Active
            </Badge>
          </div>
        </div>
      </div>

      {/* Floating score card */}
      <div className="absolute bottom-4 right-0 hidden w-44 rounded-lg border bg-background p-2.5 shadow-md lg:block">
        <div className="flex items-center gap-2">
          <div className="relative">
            <ProgressRing value={95} size={32} strokeWidth={3} className="text-emerald-500" />
            <div className="absolute inset-0 grid place-items-center text-[10px] font-bold">
              95
            </div>
          </div>
          <div className="min-w-0">
            <div className="truncate text-[9px] font-medium">https://piratebay.io/</div>
            <div className="mt-0.5 flex items-center gap-1 text-[8px] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-emerald-500" />
              <span>Healthy</span>
              <span className="h-1 w-1 rounded-full bg-amber-400" />
              <span>Warnings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
