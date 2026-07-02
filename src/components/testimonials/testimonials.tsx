import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GOOGLE_BUSINESS_PROFILE_URL, IRINA_CASE_STUDY_URL, WPEXPERTS_URL } from "@/lib/site";
import { ExternalLink, MonitorCheck, PlayCircle, ShieldCheck, Star, Video } from "lucide-react";

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
};

const proofStats = [
  {
    value: "5,0/5",
    label: "avaliação no Google",
    detail: "perfil público da equipa",
  },
  {
    value: "34",
    label: "avaliações públicas",
    detail: "prova social consultável",
  },
  {
    value: "2",
    label: "reviews em vídeo",
    detail: "clientes da WPexperts.pt",
  },
] as const;

const videoReviews = [
  {
    name: "Sollua Milfontes",
    src: "/video%20reviews/review%20solluamilfontes.mp4",
    label: "Review em vídeo",
  },
  {
    name: "Irina SB",
    src: "/video%20reviews/review%20Irinasb%20.mp4",
    label: "Review em vídeo",
  },
] as const;

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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="bg-card text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
              <ShieldCheck className="text-success size-3.5" aria-hidden="true" />
              Prova social da equipa
            </div>

            <h2 className="text-foreground mt-5 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Reviews reais de quem já confiou no nosso trabalho
            </h2>

            <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
              A adequação é feita pela equipa WPexperts.pt, com histórico público em WordPress, WooCommerce e projetos
              para clientes reais.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {proofStats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-2xl border p-5 shadow-sm">
                  <div className="text-foreground text-3xl font-semibold tracking-tight">{stat.value}</div>
                  <div className="text-foreground mt-2 text-sm font-medium">{stat.label}</div>
                  <div className="text-muted-foreground mt-1 text-xs leading-relaxed">{stat.detail}</div>
                </div>
              ))}
            </div>

            <div className="bg-card mt-4 rounded-2xl border p-5 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-foreground text-lg font-semibold">Google Business Profile</span>
                    <RatingStars />
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    5,0 de 5 com 34 avaliações. Reviews referentes ao trabalho da equipa responsável por esta
                    instalação.
                  </p>
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
          </div>

          <div>
            <article className="bg-card mb-6 overflow-hidden rounded-2xl border shadow-sm">
              <div className="bg-secondary/40 relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/case-studies/irina-livre-resolucao.png"
                  alt="Página de Direito de Livre Resolução instalada no site da Irina SB"
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
                    <h3 className="text-foreground text-xl font-semibold tracking-tight">Case real instalado</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed sm:text-base">
                      O formulário de livre resolução já está ativo no site da Irina SB, cliente também presente nos
                      reviews em vídeo.
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

            <div className="mb-4 flex items-center gap-3">
              <div className="bg-secondary text-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
                <Video className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-foreground text-xl font-semibold tracking-tight">Reviews em vídeo</h3>
                <p className="text-muted-foreground text-sm">Feedback de clientes da equipa WPexperts.pt.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {videoReviews.map((review) => (
                <article key={review.name} className="bg-card overflow-hidden rounded-2xl border shadow-sm">
                  <div className="bg-secondary/40 relative aspect-[9/16] overflow-hidden">
                    <video
                      className="h-full w-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={`${review.label} de ${review.name}`}
                    >
                      <source src={review.src} type="video/mp4" />O seu navegador não suporta vídeo HTML5.
                    </video>
                  </div>
                  <div className="flex items-center justify-between gap-3 p-4">
                    <div>
                      <h4 className="text-foreground font-semibold tracking-tight">{review.name}</h4>
                      <p className="text-muted-foreground text-sm">{review.label}</p>
                    </div>
                    <PlayCircle className="text-primary size-6 shrink-0" aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
