import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GOOGLE_BUSINESS_PROFILE_URL, IRINA_CASE_STUDY_URL, WPEXPERTS_URL } from "@/lib/site";
import { CheckCircle2, ExternalLink, MonitorCheck, PlayCircle, ShieldCheck, Star } from "lucide-react";

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
};

const proofChecks = [
  {
    title: "Perfil público no Google",
    detail: "5,0 de 5 com 34 avaliações consultáveis.",
  },
  {
    title: "Equipa identificada",
    detail: "Trabalho feito pela WPexperts.pt, com histórico em WordPress e WooCommerce.",
  },
  {
    title: "Case real aberto",
    detail: "A página instalada na Irinas B pode ser conferida numa loja real.",
  },
] as const;

const videoReview = {
  name: "Irinas B",
  src: "/video%20reviews/review%20Irinasb%20.mp4",
  label: "Review em vídeo",
} as const;

function RatingStars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 estrelas no Google">
      {[...Array(5)].map((_, index) => (
        <Star key={index} className="size-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <div className="bg-card text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
              <ShieldCheck className="text-success size-3.5" aria-hidden="true" />
              Prova social verificável
            </div>

            <h2 className="text-foreground mt-5 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Reviews reais de quem já confiou no nosso trabalho
            </h2>

            <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
              A adequação é feita pela equipa WPexperts.pt, com histórico público em WordPress, WooCommerce e projetos
              para clientes reais.
            </p>

            <div className="mt-7 border-y">
              {proofChecks.map((item) => (
                <div key={item.title} className="flex gap-4 border-b py-4 last:border-b-0">
                  <div className="bg-secondary text-primary mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl">
                    <CheckCircle2 className="size-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground text-base font-semibold tracking-tight">{item.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-secondary/50 mt-6 rounded-2xl px-4 py-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-foreground text-sm font-semibold">Google Business Profile</span>
                <div className="flex items-center gap-3">
                  <RatingStars />
                  <span className="text-muted-foreground text-sm">5,0/5 · 34 avaliações</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-sm">
                <a href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                  Ver perfil no Google
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-sm">
                <a href={WPEXPERTS_URL} target="_blank" rel="noopener noreferrer">
                  Ver WPexperts.pt
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <article className="bg-card overflow-hidden rounded-2xl border shadow-sm">
              <div className="bg-secondary/40 relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/case-studies/irina-livre-resolucao.png"
                  alt="Página de Direito de Livre Resolução instalada no site da Irinas B"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 610px, 100vw"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
                    <MonitorCheck className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground text-xl font-semibold tracking-tight">
                      Página de livre resolução instalada
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed sm:text-base">
                      O formulário já está ativo no site da Irinas B, com campos e confirmação preparados para o fluxo
                      legal de devolução.
                    </p>
                  </div>
                </div>

                <Button asChild className="mt-5 w-full rounded-sm sm:w-fit">
                  <a href={IRINA_CASE_STUDY_URL} target="_blank" rel="noopener noreferrer">
                    Ver página real
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </article>

            <article className="bg-card mt-5 grid gap-4 rounded-2xl border p-4 shadow-sm sm:grid-cols-[1fr_190px] sm:items-center">
              <div className="flex h-full flex-col justify-between gap-5 p-1">
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
                    <PlayCircle className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground text-xl font-semibold tracking-tight">
                      Review em vídeo da {videoReview.name}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed sm:text-base">
                      Um depoimento curto de cliente real para complementar o case instalado, sem sobrecarregar a seção.
                    </p>
                  </div>
                </div>
                <span className="text-muted-foreground text-xs font-medium">Cliente WPexperts.pt</span>
              </div>

              <div className="bg-secondary/40 mx-auto aspect-[9/16] w-full max-w-[190px] overflow-hidden rounded-xl">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${videoReview.label} de ${videoReview.name}`}
                >
                  <source src={videoReview.src} type="video/mp4" />O seu navegador não suporta vídeo HTML5.
                </video>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
