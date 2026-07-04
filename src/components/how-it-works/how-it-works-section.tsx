import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { STRIPE_CHECKOUT_URL } from "@/lib/site";
import { ShieldCheck } from "lucide-react";

const steps = [
  {
    iconSrc: "/icons/pagamento-icon.webp",
    iconAlt: "Ícone de pagamento com símbolo de euro",
    title: "Paga a instalação",
    description: "Finaliza o pagamento seguro de 75€ e recebe as próximas instruções no e-mail.",
  },
  {
    iconSrc: "/icons/account-icon.webp",
    iconAlt: "Ícone de utilizador com símbolo de adicionar",
    title: "Cria um acesso temporário",
    description: "Segue o guia para criar um utilizador temporário no WooCommerce, apenas para esta configuração.",
  },
  {
    iconSrc: "/icons/setup-icon.webp",
    iconAlt: "Ícone de ferramenta com confirmação",
    title: "Nós configuramos e testamos",
    description: "Configuramos o botão, o fluxo em 2 passos e o e-mail legal. Depois validamos tudo ao vivo.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal from="up">
          <div className="bg-card overflow-hidden rounded-2xl border shadow-sm">
            <div className="grid lg:grid-cols-[0.95fr_1.45fr]">
              <div className="bg-secondary/25 border-b p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-10">
                <div className="bg-background text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
                  <ShieldCheck className="text-foreground size-3.5" />
                  Como funciona
                </div>
                <h2 className="text-foreground mt-5 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                  Do pagamento à loja em conformidade
                </h2>
                <p className="text-muted-foreground mt-4 max-w-md text-base leading-relaxed sm:text-lg">
                  Paga o serviço, cria um acesso temporário e nós deixamos o botão legal configurado na sua loja em 24h.
                </p>
                <Button className="mt-7 w-full rounded-sm sm:w-fit" size="lg" asChild>
                  <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                    Adequar Agora por 75€
                  </a>
                </Button>
              </div>

              <div className="divide-y">
                {steps.map(({ iconSrc, iconAlt, title, description }) => (
                  <article key={title} className="flex gap-4 p-6 sm:p-8">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary/70">
                      <img src={iconSrc} alt={iconAlt} className="size-10 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-foreground text-lg font-semibold tracking-tight">{title}</h3>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed sm:text-base">{description}</p>
                    </div>
                  </article>
                ))}

                <div className="bg-background/60 p-6 sm:p-8">
                  <div className="bg-card flex gap-4 rounded-2xl border p-4">
                    <div className="bg-success/10 text-success flex size-10 shrink-0 items-center justify-center rounded-xl">
                      <ShieldCheck className="size-5" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      O acesso é usado apenas para a instalação e pode ser removido assim que a entrega estiver
                      concluída.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
