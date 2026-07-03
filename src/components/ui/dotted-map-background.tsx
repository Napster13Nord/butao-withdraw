"use client";

import * as React from "react";
import DottedMap from "dotted-map";
import { cn } from "@/lib/utils";

export type DottedMapPin = {
  lat: number;
  lng: number;
  color?: string;
  radius?: number;
};

export type DottedMapBackgroundProps = React.HTMLAttributes<HTMLDivElement> & {
  height?: number;
  grid?: "vertical" | "horizontal" | "diagonal";
  dotRadius?: number;
  dotColor?: string;
  backgroundColor?: string;
  pins?: DottedMapPin[];
};

type MapPoint = ReturnType<DottedMap["getPoints"]>[number];
type PinPoint = MapPoint & { color: string; radius: number };

export function DottedMapBackground({
  height = 55,
  grid = "diagonal",
  dotRadius = 0.15,
  dotColor = "currentColor",
  backgroundColor = "var(--color-background)",
  pins = [],
  className,
  ...props
}: DottedMapBackgroundProps) {
  const dottedGrid = grid === "horizontal" ? "vertical" : grid;

  const points = React.useMemo(() => {
    const map = new DottedMap({ height, grid: dottedGrid });
    return map.getPoints();
  }, [height, dottedGrid]);

  const pinPoints = React.useMemo(() => {
    if (!pins.length) return [];
    const map = new DottedMap({ height, grid: dottedGrid });
    const mapPoints = map.getPoints();

    return pins.map<PinPoint | null>((pin) => {
      const point = mapPoints.find((p) => {
        if (p.lat == null || p.lng == null) return false;

        const latDiff = Math.abs(p.lat - pin.lat);
        const lngDiff = Math.abs(p.lng - pin.lng);
        return latDiff < 5 && lngDiff < 5;
      });
      return point ? { ...point, color: pin.color ?? "#22c55e", radius: pin.radius ?? 0.45 } : null;
    }).filter((point): point is PinPoint => point !== null);
  }, [height, dottedGrid, pins]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none select-none text-muted-foreground/35",
        "[&>svg]:h-full [&>svg]:w-full",
        className
      )}
      {...props}
    >
      <svg viewBox="0 0 120 60" style={{ background: backgroundColor }}>
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r={dotRadius}
            fill={dotColor}
          />
        ))}
        {pinPoints.map((pin, index) => (
          <circle
            key={`pin-${index}`}
            cx={pin.x}
            cy={pin.y}
            r={pin.radius}
            fill={pin.color}
          />
        ))}
      </svg>
    </div>
  );
}
