import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function FooterBlur({ className }: Props) {
  return (
    <picture
      className={cn(
        "pointer-events-none absolute bottom-0 left-0 -z-10 block h-full w-full mask-t-from-90%",
        className,
      )}
    >
      <source
        srcSet="/footer-blur-desktop.webp"
        media="(min-width: 768px)"
        type="image/webp"
      />
      <img
        src="/footer-blur-mobile.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="block h-full w-full object-cover object-center"
      />
    </picture>
  );
}
