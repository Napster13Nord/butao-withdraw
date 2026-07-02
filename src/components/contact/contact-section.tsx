import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/ui/reveal";
import { Clock, ShieldCheck, BadgeEuro, Scale } from "lucide-react";

const reasons = [
  { icon: Clock, text: "Instalação garantida em 24 horas" },
  { icon: ShieldCheck, text: "Proteção imediata contra coimas" },
  { icon: BadgeEuro, text: "Investimento único de 100€" },
  { icon: Scale, text: "Conformidade total com a Diretiva UE" },
];

export function ContactSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Proteja a sua loja ainda hoje
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            Envie os dados da sua loja e trato de toda a adequação técnica nas próximas horas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Info card */}
          <Reveal from="up">
            <div className="flex h-full flex-col rounded-2xl border bg-card p-8 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight">Porquê agir agora?</h3>
              <ul className="mt-6 space-y-5">
                {reasons.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-foreground">
                      <Icon className="size-4" />
                    </span>
                    <span className="text-sm text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal from="up" delayMs={100}>
            <form
              action="https://formspree.io/f/xkolzjow"
              method="POST"
              className="flex flex-col gap-5 rounded-2xl border bg-card p-8 shadow-sm"
            >
              <input type="hidden" name="plataforma" value="WooCommerce" />

              <div className="flex flex-col gap-2">
                <Label htmlFor="nome">
                  Nome completo <span className="text-destructive">*</span>
                </Label>
                <Input id="nome" name="nome" type="text" placeholder="O seu nome completo" required />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">
                  E-mail de contacto <span className="text-destructive">*</span>
                </Label>
                <Input id="email" name="email" type="email" placeholder="exemplo@email.com" required />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="telemovel">
                  Telemóvel / WhatsApp <span className="text-destructive">*</span>
                </Label>
                <div className="flex items-center gap-2">
                  <span className="flex h-9 shrink-0 items-center rounded-lg border border-input bg-background px-3 text-sm text-muted-foreground">
                    +351
                  </span>
                  <Input id="telemovel" name="telemovel" type="tel" placeholder="912 345 678" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="loja-link">
                  Link da loja <span className="text-destructive">*</span>
                </Label>
                <Input id="loja-link" name="loja-link" type="text" placeholder="https://minhaloja.pt" required />
              </div>

              <Button type="submit" size="lg" className="mt-2 w-full">
                Enviar Pedido de Adequação
              </Button>

              <p className="text-center text-xs leading-relaxed text-muted-foreground">
                Os seus dados são tratados com total confidencialidade e utilizados apenas para o
                processo de adequação da sua loja.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
