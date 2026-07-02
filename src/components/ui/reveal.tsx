"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealFrom = "up" | "down" | "left" | "right" | "none";

export type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  from?: RevealFrom;
  delayMs?: number;
  durationMs?: number;
  distancePx?: number; // how far it travels before settling
  scaleFrom?: number;  // slight scale for “heavy” feel
  blurPx?: number;     // tiny blur while hidden (optional)
  once?: boolean;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

function hiddenTransform(from: RevealFrom, distancePx: number, scaleFrom: number) {
  switch (from) {
    case "up":
      return `translate3d(0, ${distancePx}px, 0) scale(${scaleFrom})`;
    case "down":
      return `translate3d(0, -${distancePx}px, 0) scale(${scaleFrom})`;
    case "left":
      return `translate3d(-${distancePx}px, 0, 0) scale(${scaleFrom})`;
    case "right":
      return `translate3d(${distancePx}px, 0, 0) scale(${scaleFrom})`;
    case "none":
    default:
      return `scale(${scaleFrom})`;
  }
}

export function Reveal({
  from = "up",
  delayMs = 0,
  durationMs = 900,      // a bit slower = “heavy”
  distancePx = 22,
  scaleFrom = 0.975,
  blurPx = 6,
  once = true,
  className,
  style,
  ...props
}: RevealProps) {
  const reduceMotion = usePrefersReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    if (reduceMotion) {
      setShown(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setShown(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, reduceMotion]);

  const baseStyle: React.CSSProperties = reduceMotion
    ? {}
    : {
        opacity: shown ? 1 : 0,
        transform: shown ? "translate3d(0,0,0) scale(1)" : hiddenTransform(from, distancePx, scaleFrom),
        filter: shown ? "blur(0px)" : `blur(${blurPx}px)`,
        transitionProperty: "transform, opacity, filter",
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // “heavy” ease-out
        willChange: "transform, opacity, filter",
      };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{ ...baseStyle, ...style }}
      {...props}
    />
  );
}
