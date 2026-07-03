"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import NumberFlow from "@number-flow/react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// ----- Subcomponents -----
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-card relative w-full rounded-xl dark:bg-transparent p-1.5 shadow-xl backdrop-blur-xl dark:border-border/80 border",
        className,
      )}
      {...props}
    />
  );
}

function Header({
  children,
  className,
  glassEffect = true,
  ...props
}: React.ComponentProps<"div"> & { glassEffect?: boolean }) {
  return (
    <div
      className={cn(
        "bg-muted/80 dark:bg-muted/50 relative mb-4 rounded-xl border p-4",
        className,
      )}
      {...props}
    >
      {glassEffect && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-48 rounded-[inherit]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 100%)",
          }}
        />
      )}
      {children}
    </div>
  );
}

function Description({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)} {...props} />
  );
}

function PlanName({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm font-medium [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "bg-accent/15 text-accent-foreground border-accent/30 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
        className,
      )}
      {...props}
    />
  );
}

function Body({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("space-y-6 p-3", className)} {...props} />;
}

function List({ className, ...props }: React.ComponentProps<"ul">) {
  return <ul className={cn("space-y-3", className)} {...props} />;
}

function ListItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      className={cn(
        "text-muted-foreground flex items-start gap-3 text-sm",
        className,
      )}
      {...props}
    />
  );
}

function Separator({
  children = "Upgrade to access",
  className,
  ...props
}: React.ComponentProps<"div"> & { children?: string }) {
  return (
    <div
      className={cn(
        "text-muted-foreground flex items-center gap-3 text-sm",
        className,
      )}
      {...props}
    >
      <span className="bg-muted-foreground/40 h-[1px] flex-1" />
      <span className="text-muted-foreground shrink-0">{children}</span>
      <span className="bg-muted-foreground/40 h-[1px] flex-1" />
    </div>
  );
}

// ----- Configurable PricingTiers Component -----
export interface Plan {
  title: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  badge?: string;
}

interface PricingTiersProps {
  plans: Plan[];
  heading?: string;
  subheading?: string;
  /** Currency symbol rendered before the price. Defaults to "€". */
  currency?: string;
  /** Label rendered after the price (e.g. "pagamento único"). */
  priceSuffix?: string;
  /** CTA button text. */
  ctaLabel?: string;
  /** CTA button href. */
  ctaHref?: string;
}

export default function PricingTiers({
  plans,
  heading = "Investimento único e transparente",
  subheading = "Um valor fixo, sem mensalidades. A sua loja em conformidade com a lei.",
  currency = "€",
  priceSuffix = "pagamento único",
  ctaLabel = "Garantir Vaga em 24h",
  ctaHref = "#formulario",
}: PricingTiersProps) {
  const [isAnnual, setIsAnnual] = React.useState(false);
  const isSingle = plans.length === 1;

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-4xl font-semibold lg:text-5xl">{heading}</h1>
          <Description>{subheading}</Description>

          {/* Billing toggle — only when there are recurring plans */}
          {!isSingle && (
            <div className="flex items-center justify-center gap-3 pt-4">
              <Label
                htmlFor="billing-toggle"
                className={cn(
                  "cursor-pointer text-sm transition-colors",
                  !isAnnual ? "text-foreground font-medium" : "text-muted-foreground"
                )}
              >
                Mensal
              </Label>
              <Switch
                id="billing-toggle"
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
              />
              <Label
                htmlFor="billing-toggle"
                className={cn(
                  "cursor-pointer text-sm transition-colors",
                  isAnnual ? "text-foreground font-medium" : "text-muted-foreground"
                )}
              >
                Anual
                <span className="ml-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-600 dark:text-emerald-400">
                  Poupe 20%
                </span>
              </Label>
            </div>
          )}
        </div>

        <div
          className={cn(
            "mt-12 grid gap-6 md:mt-16",
            isSingle ? "mx-auto max-w-md" : "md:grid-cols-3"
          )}
        >
          {plans.map((plan, idx) => {
            const price = isSingle
              ? plan.monthlyPrice
              : isAnnual
              ? plan.annualPrice
              : plan.monthlyPrice;

            return (
              <Card key={idx}>
                <Header glassEffect>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <PlanName className="text-foreground text-base">
                      {plan.title}
                    </PlanName>
                    {plan.badge && <Badge>{plan.badge}</Badge>}
                  </div>
                  <div className="mb-3 flex items-baseline gap-1.5">
                    <span className="text-5xl font-extrabold tracking-tight">
                      {currency}
                      <NumberFlow value={price} />
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {isSingle ? priceSuffix : `/${isAnnual ? "ano" : "mês"}`}
                    </span>
                  </div>
                  <Description>{plan.description}</Description>
                  <Button asChild variant={isSingle ? "default" : "outline"} className="mt-4 w-full">
                    {(() => {
                      const href = isSingle ? ctaHref : "#formulario";
                      const label = isSingle ? ctaLabel : "Começar";
                      const isExternal = href.startsWith("http");
                      return isExternal ? (
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          {label}
                        </a>
                      ) : (
                        <Link href={href}>{label}</Link>
                      );
                    })()}
                  </Button>
                </Header>

                <Body>
                  <Separator>Incluído</Separator>
                  <List>
                    {plan.features.map((feature, i) => (
                      <ListItem key={i} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                        {feature}
                      </ListItem>
                    ))}
                  </List>

                  {isSingle && (
                    <div className="rounded-lg border bg-secondary/40 p-4">
                      <p className="text-foreground text-sm font-semibold">Prazo e garantia</p>
                      <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                        Entregamos em 24h após recebermos os acessos. Se algum item incluído não ficar operacional,
                        corrigimos sem custo.
                      </p>
                    </div>
                  )}
                </Body>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
