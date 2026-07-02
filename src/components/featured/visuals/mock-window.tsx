import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function MockWindow({
  title,
  right,
  className,
  children,
}: {
  title?: string;
  right?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-background/70 shadow-sm",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b bg-muted/40 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <WindowDots />
          {title ? (
            <span className="text-[11px] font-medium text-muted-foreground">
              {title}
            </span>
          ) : null}
        </div>
        {right}
      </div>

      <div className="p-4">{children}</div>
    </Card>
  );
}

function WindowDots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
    </div>
  );
}
