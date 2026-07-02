import type { ReactNode } from "react";

export type FeaturedItemBase = {
  id: string;
  /**
   * "full" spans all columns on lg+, "half" spans 50% width,
   * "third" spans ~33% width, "wider" spans ~60%, "narrower" spans ~40%.
   */
  span: "full" | "half" | "third" | "wider" | "narrower";
  /**
   * Optional link for the arrow button.
   */
  href?: string;
  /**
   * Optional extra classes for the card.
   */
  className?: string;
};

export type FeaturedFeatureItem = FeaturedItemBase & {
  kind: "feature";
  title: string;
  description: string;
  visual?: ReactNode;
  ctaAriaLabel?: string;
  /**
   * Layout variant:
   * - "default": visual on top, content below
   * - "horizontal": text on left, visual on right (for full-width cards)
   * - "visual-only": only shows the visual (for wider cards in asymmetric rows)
   * - "text-only": only shows text content (for narrower cards in asymmetric rows)
   */
  layout?: "default" | "horizontal" | "visual-only" | "text-only";
};

export type FeaturedTestimonialItem = FeaturedItemBase & {
  kind: "testimonial";
  label?: string;
  quote: string;
  author: {
    name: string;
    role?: string;
    avatarUrl?: string;
  };
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
};

export type FeaturedItem = FeaturedFeatureItem | FeaturedTestimonialItem;
