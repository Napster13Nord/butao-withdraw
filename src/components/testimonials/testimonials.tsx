import { Badge } from "@/components/ui/badge";
import { TestimonialMarquee } from "@/components/testimonials/testimonial-marquee";

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
};

const testimonials = [
  {
    name: "Ricardo Marques",
    date: "Loja de moda",
    title: "Ficou tudo resolvido num dia",
    content: `"Andava preocupado com a nova diretiva e não sabia por onde começar. Instalaram o botão na minha loja WooCommerce em menos de 24h. Simples e sem stress."`,
    rating: 5,
  },
  {
    name: "Sofia Antunes",
    date: "Cosmética natural",
    title: "Preço justo e transparente",
    content: `"100€ fixos, sem mensalidades nem surpresas. Recebi o e-mail de confirmação legal a funcionar e testámos tudo ao vivo. Recomendo a qualquer e-commerce."`,
    rating: 5,
  },
  {
    name: "João Pereira",
    date: "Equipamento desportivo",
    title: "Poupou-me de uma coima",
    content: `"Não fazia ideia que a devolução podia saltar para 1 ano sem o botão. Trataram de toda a parte técnica e agora estou em conformidade com a lei europeia."`,
    rating: 5,
  },
  {
    name: "Marta Figueiredo",
    date: "Artigos para casa",
    title: "Profissional do início ao fim",
    content: `"Comunicação clara, entrega rápida e o fluxo de livre resolução ficou exatamente como exige a diretiva. Suporte impecável nas 24h seguintes."`,
    rating: 5,
  },
] satisfies Testimonial[];

export function Testimonials() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-14 sm:px-6 md:py-25">
      <Badge variant="secondary" className="mb-2 uppercase">
        Testemunhos
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Lojas que já estão<div className="text-muted-foreground">em conformidade</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight text-muted-foreground sm:text-xl lg:mb-8">
        Donos de e-commerce em Portugal que adequaram a sua loja WooCommerce e deixaram de correr riscos.
      </p>
      <div className="relative w-[calc(100%+3rem)] overflow-x-hidden py-4 lg:w-full">
        <TestimonialMarquee testimonials={testimonials} className="mb-4" />
        <TestimonialMarquee testimonials={testimonials} reverse />
      </div>
    </div>
  );
}
