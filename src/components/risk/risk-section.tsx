import { Reveal } from "@/components/ui/reveal";
import { ShieldAlert, CalendarClock, ArrowRight } from "lucide-react";

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

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Coimas */}
          <Reveal from="up">
            <article className="flex h-full flex-col rounded-2xl border bg-card p-8 shadow-sm">
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <ShieldAlert className="size-6" />
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Coimas
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                Multas de até <span className="text-destructive">4%</span> do volume de negócios
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Multas de até <strong className="text-foreground">4% do volume de negócios anual</strong> ou
                até <strong className="text-foreground">2 milhões de euros</strong>, consoante o que for mais elevado.
              </p>
              <div className="mt-auto pt-6">
                <div className="text-3xl font-bold tracking-tight text-destructive">até €2.000.000</div>
              </div>
            </article>
          </Reveal>

          {/* Devolução */}
          <Reveal from="up" delayMs={100}>
            <article className="flex h-full flex-col rounded-2xl border bg-card p-8 shadow-sm">
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <CalendarClock className="size-6" />
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Punição automática
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                Devolução salta de <span className="text-destructive">14 dias</span> para{" "}
                <span className="text-destructive">1 ano</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                O direito do cliente devolver o produto salta automaticamente de{" "}
                <strong className="text-foreground">14 dias</strong> para{" "}
                <strong className="text-foreground">1 ano e 14 dias</strong> se o botão não existir.
              </p>
              <div className="mt-auto flex items-center gap-4 pt-6">
                <div className="rounded-lg border bg-background px-4 py-3 text-center">
                  <div className="text-[11px] text-muted-foreground">Com botão</div>
                  <div className="text-sm font-semibold">14 dias</div>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-center">
                  <div className="text-[11px] text-muted-foreground">Sem botão</div>
                  <div className="text-sm font-semibold text-destructive">1 ano + 14 dias</div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
