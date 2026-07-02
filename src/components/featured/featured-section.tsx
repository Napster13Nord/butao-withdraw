"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { FeaturedItem } from "./types";
import { defaultFeaturedItems } from "./featured-config";
import { FeaturedCard } from "./featured-card";

type FeaturedSectionProps = {
  items?: FeaturedItem[];
  className?: string;
  title?: string;
  subtitle?: string;
};

export function FeaturedSection({
  items = defaultFeaturedItems,
  className,
  title = "Solução técnica, rápida e completa",
  subtitle = "Não perde tempo com relatórios jurídicos. Nós tratamos de toda a integração técnica na sua loja WooCommerce, do botão ao e-mail legal.",
}: FeaturedSectionProps) {
  return (
    <section className={cn("relative py-16 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
          <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
          {subtitle && <p className="text-muted-foreground text-lg leading-relaxed md:pt-2">{subtitle}</p>}
        </div>

        {/* Cards grid - 6 column grid for flexible layout */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-6">
          {items.map((item, index) => {
            const spanClass =
              item.span === "full"
                ? "md:col-span-2 lg:col-span-6"
                : item.span === "half"
                  ? "lg:col-span-3"
                  : item.span === "third"
                    ? "lg:col-span-2"
                    : item.span === "wider"
                      ? "lg:col-span-4"
                      : item.span === "narrower"
                        ? "lg:col-span-2"
                        : "";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={spanClass}
              >
                <FeaturedCard item={item} index={index} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
