import { Reveal } from "@/components/ui/reveal";
import { FeatureGrid, type Feature } from "@/components/ui/feature-grid";

const riskFeatures: Feature[] = [
  {
    imageSrc: "/coima-icone.webp",
    imageAlt: "Ícone de documento com escudo de alerta e símbolo de euro",
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
  },
  {
    imageSrc: "/prazo-icone.webp",
    imageAlt: "Ícone de calendário com relógio e seta de prazo",
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
