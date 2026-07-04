import { Reveal } from "@/components/ui/reveal";
import { FeatureGrid, type Feature } from "@/components/ui/feature-grid";
import { CalendarClock, FileWarning, Radar, ShieldAlert } from "lucide-react";

const riskFeatures: Feature[] = [
  {
    icon: ShieldAlert,
    iconLabel: "Alerta de coima",
    eyebrow: "Coimas",
    title: (
      <>
        Multas de até <span className="text-destructive">4%</span> do volume de negócios
      </>
    ),
    description: (
      <>
        A sanção pode chegar a <strong className="text-foreground">4% do volume anual</strong> ou a{" "}
        <strong className="text-foreground">2 milhões de euros</strong>, consoante o valor mais elevado.
      </>
    ),
    stat: "até €2.000.000",
    href: "#preco",
    ctaLabel: "Ver solução para reduzir risco de coimas",
  },
  {
    icon: CalendarClock,
    iconLabel: "Prazo de devolução",
    eyebrow: "Prazo alargado",
    title: (
      <>
        Devolução salta de <span className="text-destructive">14 dias</span> para{" "}
        <span className="text-destructive">1 ano</span>
      </>
    ),
    description: (
      <>
        Sem o botão obrigatório, o prazo de livre resolução pode passar automaticamente de{" "}
        <strong className="text-foreground">14 dias</strong> para{" "}
        <strong className="text-foreground">1 ano e 14 dias</strong>.
      </>
    ),
    stat: "1 ano + 14 dias",
    href: "#faq",
    ctaLabel: "Ler dúvidas sobre o prazo de devolução",
  },
  {
    icon: Radar,
    iconLabel: "Fiscalização automática",
    eyebrow: "Web sweeps",
    title: "A fiscalização não depende de uma denúncia manual",
    description:
      "Autoridades europeias usam varreduras automatizadas para encontrar lojas com fluxos de devolução incompletos ou difíceis de aceder.",
    stat: "deteção automática",
    href: "#solucao",
    ctaLabel: "Ver como a solução resolve a fiscalização automática",
  },
  {
    icon: FileWarning,
    iconLabel: "Falha documental",
    eyebrow: "Prova legal",
    title: "Sem registo claro, a loja fica mais frágil numa reclamação",
    description:
      "O fluxo deve gerar confirmação e e-mail legal, para que a loja consiga demonstrar que o pedido foi recebido e tratado corretamente.",
    stat: "e-mail legal",
    href: "#como-funciona",
    ctaLabel: "Ver como funciona a instalação do fluxo legal",
  },
];

export function RiskSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/5 px-3 py-1 text-xs font-medium tracking-wide text-destructive">
            Risco de incumprimento
          </span>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            O que acontece se a sua loja não tiver este botão?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            As autoridades europeias utilizam sistemas automatizados de varredura
            (<span className="italic">web sweeps</span>) para detetar e-commerce em
            incumprimento.
          </p>
        </div>

        <Reveal from="up">
          <FeatureGrid features={riskFeatures} />
        </Reveal>
      </div>
    </section>
  );
}
