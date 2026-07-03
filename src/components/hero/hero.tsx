import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, ListChecks, Star } from "lucide-react";
import Link from "next/link";
import { GOOGLE_BUSINESS_PROFILE_URL, STRIPE_CHECKOUT_URL } from "@/lib/site";

const trustBadges = [
  { icon: Clock, label: "Entrega em 24h" },
  { icon: ListChecks, label: "Preço fechado: 75€" },
  { icon: ShieldCheck, label: "Garantia de ajuste" },
];

export function Hero() {
  return (
    <div className="z-1 flex w-full flex-col items-center px-4 pb-0 pt-8 sm:px-6">
      <BackgroundBlur className="-top-40 md:-top-0" />
      <Nav />
      <div className="mt-28 flex w-full flex-col items-center gap-6 sm:mt-48">
        <div className="inline-flex w-full max-w-[21.5rem] items-center justify-center gap-2 rounded-2xl border bg-background/70 px-3 py-2 text-center text-[0.72rem] leading-snug font-medium tracking-tight text-muted-foreground backdrop-blur sm:w-auto sm:max-w-none sm:rounded-full sm:px-3.5 sm:py-1.5 sm:text-left sm:text-xs">
          <ShieldCheck className="size-3.5 shrink-0 text-foreground" />
          <span className="hidden sm:inline">
            Diretiva UE 2023/2673 · Prazo legal em vigor
          </span>
          <span className="flex flex-col sm:hidden">
            <span>Diretiva UE 2023/2673</span>
            <span>Prazo legal em vigor</span>
          </span>
        </div>

        <h1 className="max-w-4xl text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-6xl">
          Botão de Arrependimento obrigatório no WooCommerce,
          <span className="text-muted-foreground block">instalado em 24h por 75€</span>
        </h1>

        <p className="max-w-xl text-center leading-6 tracking-tight text-muted-foreground sm:text-xl">
          Configuramos o fluxo de Livre Resolução em 2 passos, o e-mail automático e os testes ao vivo para deixar a
          sua loja pronta sem parar as vendas.
        </p>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button className="w-fit rounded-sm" size="lg" asChild>
              <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Adequar agora por 75€
              </a>
            </Button>
            <Button className="w-fit rounded-sm" size="lg" asChild variant="outline">
              <Link href="#preco">Ver garantia e entregáveis</Link>
            </Button>
          </div>

          <a
            href={GOOGLE_BUSINESS_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary/55 hover:bg-secondary/75 inline-flex w-full max-w-[21.5rem] flex-col items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-center text-sm shadow-sm backdrop-blur transition-colors sm:w-auto sm:max-w-none sm:flex-row sm:rounded-full sm:px-5 sm:py-2"
            aria-label="Google Business Profile: 5,0 de 5 com 34 avaliações"
          >
            <span className="text-foreground font-semibold">Google Business Profile</span>
            <span className="flex items-center gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </span>
            <span className="text-muted-foreground whitespace-nowrap">5,0/5 · 34 avaliações</span>
          </a>
        </div>

        {/* Trust badges */}
        <div className="mb-4 mt-3 flex w-full max-w-xs flex-col items-stretch gap-2 sm:mb-10 sm:mt-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 rounded-full border bg-background/55 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none"
            >
              <Icon className="size-4 shrink-0 text-foreground" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
