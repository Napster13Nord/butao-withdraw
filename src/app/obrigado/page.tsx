import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, UserPlus, Send, ShieldCheck, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer/footer";
import { BUSINESS_EMAIL, whatsappLink } from "@/lib/site";
import { PurchaseEvent } from "@/components/analytics/purchase-event";

export const metadata: Metadata = {
  title: "Obrigado! Próximos passos - Adequação Digital",
  description:
    "Pagamento confirmado. Veja como dar-nos acesso à sua loja WordPress para instalarmos o Botão de Livre Resolução em 24h.",
  robots: { index: false },
};

const steps = [
  {
    icon: UserPlus,
    title: "Crie um utilizador Administrador temporário",
    body: (
      <>
        No painel WordPress, vá a <strong>Utilizadores → Adicionar novo</strong>. Preencha nome: <strong>André</strong>,
        e-mail: <strong>andre@wpexperts.pt</strong> e escolha a função <strong>Administrador</strong>. É o método mais
        seguro, não precisa de partilhar a sua palavra-passe pessoal.
      </>
    ),
  },
  {
    icon: Send,
    title: "Envie-nos os acessos",
    body: (
      <>
        Pelo WhatsApp ou e-mail, envie: o <strong>link da sua loja</strong>, o{" "}
        <strong>utilizador e palavra-passe</strong> criados e o <strong>link de login</strong> do WordPress (normalmente{" "}
        <span className="whitespace-nowrap">/wp-admin</span>).
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Nós tratamos do resto em 24h",
    body: (
      <>
        Instalamos e configuramos o <strong>Botão de Livre Resolução</strong> em 2 passos, ativamos o{" "}
        <strong>e-mail legal automático</strong> e testamos tudo ao vivo. No fim, pode <strong>remover o acesso</strong>{" "}
        em segurança.
      </>
    ),
  },
];

export default function Obrigado() {
  const waHref = whatsappLink("Olá! Acabei de efetuar o pagamento. Aqui estão os acessos da minha loja:");

  return (
    <div className="flex min-h-screen flex-col">
      <PurchaseEvent />
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
        {/* Header / logo */}
        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <Link href="/" className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-base font-semibold tracking-tight">Adequação Digital</span>
          </Link>

          {/* Confirmation */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-600">
            <CheckCircle2 className="size-3.5" />
            Pagamento confirmado
          </div>
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Obrigado! Vamos adequar a sua loja.</h1>
        <p className="text-muted-foreground mt-3 flex items-center gap-2 text-base leading-relaxed">
          <Clock className="text-foreground size-4 shrink-0" />
          Falta só um passo: dar-nos acesso à sua loja WordPress. A instalação fica pronta em 24 horas.
        </p>

        {/* Steps */}
        <ol className="mt-10 space-y-4">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li key={i} className="bg-card flex gap-4 rounded-2xl border p-6 shadow-sm">
              <div className="bg-foreground/5 text-foreground flex size-10 shrink-0 items-center justify-center rounded-xl">
                <Icon className="size-5" />
              </div>
              <div>
                <h2 className="font-semibold tracking-tight">
                  <span className="text-muted-foreground">{i + 1}.</span> {title}
                </h2>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Security note */}
        <p className="bg-muted/40 text-muted-foreground mt-6 flex items-start gap-2 rounded-xl border p-4 text-xs leading-relaxed">
          <ShieldCheck className="text-foreground mt-0.5 size-4 shrink-0" />
          Os seus acessos são tratados com total confidencialidade e usados apenas para a instalação. Recomendamos criar
          um utilizador temporário e removê-lo assim que o trabalho estiver concluído.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={waHref} target="_blank" rel="noopener noreferrer">
              Enviar acessos por WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href={`mailto:${BUSINESS_EMAIL}?subject=Acessos%20para%20instalação%20do%20botão`}>
              <Mail className="size-4" />
              Enviar por e-mail
            </a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
