import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function EmailVisual() {
  return (
    <div className="relative flex min-h-[240px] items-center justify-center px-4 sm:px-8">
      {/* Floating domain badges - positioned around the card */}
      <Badge
        variant="outline"
        className="absolute left-4 bottom-20 hidden rounded-full border-muted-foreground/30 bg-background px-3 py-1 text-[11px] font-normal text-muted-foreground shadow-sm sm:inline-flex"
      >
        .store
      </Badge>
      <Badge
        variant="outline"
        className="absolute left-[15%] top-2 hidden rounded-full border-muted-foreground/30 bg-background px-3 py-1 text-[11px] font-normal text-muted-foreground shadow-sm sm:inline-flex"
      >
        .io
      </Badge>
      <Badge
        variant="outline"
        className="absolute right-[15%] top-6 hidden rounded-full border-muted-foreground/30 bg-background px-3 py-1 text-[11px] font-normal text-muted-foreground shadow-sm sm:inline-flex"
      >
        .shop
      </Badge>
      <Badge
        variant="outline"
        className="absolute right-4 top-1/3 hidden rounded-full border-muted-foreground/30 bg-background px-3 py-1 text-[11px] font-normal text-muted-foreground shadow-sm sm:inline-flex"
      >
        .com
      </Badge>

      {/* Main window */}
      <div className="w-full max-w-[280px] rounded-xl border bg-background shadow-lg">
        {/* Title bar with traffic lights */}
        <div className="flex items-center gap-3 border-b px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-medium text-foreground">Emails</span>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="text-xs font-medium text-foreground">Lets find you a business domain</p>
            <div className="mt-3 flex items-center gap-2 rounded-lg border bg-background px-3 py-2.5">
              <span className="flex-1 text-[11px] text-muted-foreground">http://piratebay.io/</span>
              <div className="grid h-7 w-7 place-items-center rounded-md border bg-muted/50 transition-colors hover:bg-muted">
                <Search className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
