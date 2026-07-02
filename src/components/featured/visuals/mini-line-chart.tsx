import { cn } from "@/lib/utils";

export function MiniLineChart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 34"
      className={cn("h-7 w-full text-foreground/80", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 26 C 14 18, 22 22, 32 14 C 42 6, 54 18, 64 12 C 74 6, 86 10, 98 8 C 108 6, 114 10, 118 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
