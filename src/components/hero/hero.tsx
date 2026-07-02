import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, ListChecks, Mail } from "lucide-react";
import Link from "next/link";
import { STRIPE_CHECKOUT_URL } from "@/lib/site";

const trustBadges = [
  { icon: Clock, label: "Instalação em 24h" },
  { icon: ListChecks, label: "Fluxo em 2 passos" },
  { icon: Mail, label: "E-mail automático" },
];

export function Hero() {
  return (
    <div className="z-1 flex w-full flex-col items-center px-4 pb-0 pt-8 sm:px-6">
      <BackgroundBlur className="-top-40 md:-top-0" />
      <Nav />
      <div className="mt-28 flex w-full flex-col items-center gap-6 sm:mt-48">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3.5 py-1.5 text-xs font-medium tracking-tight text-muted-foreground backdrop-blur">
          <ShieldCheck className="size-3.5 text-foreground" />
          Diretiva UE 2023/2673 · Obrigatório desde junho de 2026
        </div>

        <h1 className="max-w-4xl text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-6xl">
          A sua loja WooCommerce cumpre a lei do
          <span className="text-muted-foreground block">Botão de Arrependimento?</span>
        </h1>

        <p className="max-w-xl text-center leading-6 tracking-tight text-muted-foreground sm:text-xl">
          Evite coimas pesadas e a extensão das devoluções por 1 ano. Instalamos o
          botão obrigatório na sua loja em 24 horas.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="w-fit rounded-sm" size="lg" asChild>
            <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              Adequar Agora por 50€
            </a>
          </Button>
          <Button className="w-fit rounded-sm" size="lg" asChild variant="outline">
            <Link href="#preco">Ver o que está incluído</Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mb-4 mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:mb-10">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon className="size-4 text-foreground" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
