import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function BackgroundBlur({ className }: Props) {
  return (
    <picture
      className={cn(
        "pointer-events-none absolute top-0 left-0 -z-10 block h-full w-full",
        className,
      )}
    >
      <source
        srcSet="/background-blur-desktop.webp"
        media="(min-width: 768px)"
        type="image/webp"
      />
      <img
        src="/background-blur-mobile.webp"
        alt=""
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="block h-full w-full object-cover object-center"
      />
    </picture>
  );
}
