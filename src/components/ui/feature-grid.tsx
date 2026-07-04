import * as React from "react";

import { cn } from "@/lib/utils";

export interface Feature {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

export interface FeatureGridProps {
  features: Feature[];
  className?: string;
}

const FeatureCard = ({ feature }: { feature: Feature }) => (
    <article
      className={cn(
        "flex min-h-48 flex-col gap-5 rounded-xl border bg-card p-6 text-card-foreground shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-primary/30 hover:shadow-md",
        "sm:flex-row sm:items-start sm:gap-6",
      )}
    >
      <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-destructive/10 bg-white sm:size-24">
        <img src={feature.imageSrc} alt={feature.imageAlt} className="size-16 object-contain sm:size-20" />
      </div>

      <div className="flex min-h-full flex-1 flex-col">
        <div>
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
            {feature.eyebrow}
          </div>
          <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-foreground">
            {feature.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
        </div>

        <div className="mt-auto pt-1" aria-hidden="true" />
      </div>
    </article>
);

const FeatureGrid = React.forwardRef<HTMLDivElement, FeatureGridProps>(({ features, className }, ref) => {
  if (!features.length) {
    return null;
  }

  return (
    <div ref={ref} className={cn("grid grid-cols-1 gap-5 lg:grid-cols-2", className)}>
      {features.map((feature, index) => (
        <FeatureCard key={`${feature.eyebrow}-${index}`} feature={feature} />
      ))}
    </div>
  );
});

FeatureGrid.displayName = "FeatureGrid";

export { FeatureGrid };
