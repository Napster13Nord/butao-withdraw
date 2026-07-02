"use client";

import { cn } from "@/lib/utils";
import type { FeaturedItem, FeaturedFeatureItem } from "./types";
import { TestimonialCard } from "./testimonial-card";

export function FeaturedCard({
  item,
  index,
}: {
  item: FeaturedItem;
  index: number;
}) {
  if (item.kind === "testimonial") {
    return <TestimonialCard item={item} index={index} />;
  }

  const feature = item as FeaturedFeatureItem;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-md border bg-card",
        "transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5",
        item.className
      )}
    >
      {/* Visual area — flex-1 fills remaining space, centers content */}
      {feature.visual && (
        <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-neutral-50/50 dark:bg-neutral-900/50">
          {feature.visual}
          {/* Faded gradient transition */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent" />
        </div>
      )}

      {/* Content area — pinned at bottom */}
      <div className="px-5 py-4">
        <h3 className="text-lg font-medium leading-relaxed tracking-tight text-foreground">
          <span>{feature.title}</span>
          {feature.description && (
            <span className="text-muted-foreground/50"> {feature.description}</span>
          )}
        </h3>
      </div>
    </article>
  );
}
