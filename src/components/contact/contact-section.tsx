import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/ui/reveal";
import { Clock, HelpCircle, MessageCircle, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: HelpCircle, text: "Esclarecemos se a sua loja é abrangida" },
  { icon: ShieldCheck, text: "Explicamos o acesso temporário com segurança" },
  { icon: Clock, text: "Respondemos antes de avançar para o pagamento" },
  { icon: MessageCircle, text: "Ajudamos a decidir com informação clara" },
];

export function ContactSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Tem dúvidas antes de comprar?
          </h2>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
            Envie a sua pergunta antes do pagamento. Nós respondemos para confirmar se este serviço faz sentido para a
            sua loja.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Info card */}
          <Reveal from="up">
            <div className="bg-card flex h-full flex-col rounded-2xl border p-8 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight">Podemos ajudar antes do pagamento</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                Use este formulário se ainda quer perceber a obrigação legal, o processo técnico ou a criação do acesso
                temporário.
              </p>
              <ul className="mt-6 space-y-5">
                {reasons.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <span className="bg-foreground/5 text-foreground flex size-9 shrink-0 items-center justify-center rounded-lg">
                      <Icon className="size-4" />
                    </span>
                    <span className="text-muted-foreground text-sm">{text}</span>
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
              className="bg-card flex flex-col gap-5 rounded-2xl border p-8 shadow-sm"
            >
              <input type="hidden" name="plataforma" value="WooCommerce" />
              <input type="hidden" name="tipo_contacto" value="Dúvida antes da compra" />

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
                <Label htmlFor="telemovel">Telemóvel / WhatsApp</Label>
                <div className="flex items-center gap-2">
                  <span className="border-input bg-background text-muted-foreground flex h-9 shrink-0 items-center rounded-lg border px-3 text-sm">
                    +351
                  </span>
                  <Input id="telemovel" name="telemovel" type="tel" placeholder="912 345 678" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="loja-link">Link da loja</Label>
                <Input id="loja-link" name="loja-link" type="url" placeholder="https://minhaloja.pt" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="mensagem">
                  A sua dúvida <span className="text-destructive">*</span>
                </Label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  placeholder="Explique a sua dúvida antes de comprar ou pagar."
                  required
                  className="border-input bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/20 min-h-28 w-full resize-y rounded-lg border px-3 py-2 text-sm shadow-sm shadow-black/5 transition-shadow focus-visible:ring-[3px] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <Button type="submit" size="lg" className="mt-2 w-full">
                Enviar dúvida
              </Button>

              <p className="text-muted-foreground text-center text-xs leading-relaxed">
                Os seus dados são tratados com total confidencialidade e utilizados apenas para responder à sua dúvida.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
