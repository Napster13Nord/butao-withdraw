import { ContactSection } from "@/components/contact/contact-section";
import { FAQs } from "@/components/faqs/faqs";
import { FeaturedSection } from "@/components/featured/featured-section";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { HowItWorksSection } from "@/components/how-it-works/how-it-works-section";
import { RiskSection } from "@/components/risk/risk-section";
import PricingTiers, { Plan } from "@/components/ruixen/pricing-tiers";
import { Testimonials } from "@/components/testimonials/testimonials";
import { WhatsAppFloat } from "@/components/whatsapp/whatsapp-float";
import { STRIPE_CHECKOUT_URL, PRICE_EUR } from "@/lib/site";

const plan: Plan[] = [
  {
    title: "Adequação WooCommerce",
    monthlyPrice: PRICE_EUR,
    annualPrice: PRICE_EUR,
    description: "Pagamento único. Entrega em 24h após recebermos os acessos da loja.",
    badge: "Garantia incluída",
    features: [
      "Botão de Arrependimento visível na loja",
      "Fluxo de Livre Resolução em 2 passos",
      "Página/formulário ligado ao pedido do cliente",
      "E-mail legal de confirmação automático",
      "Testes ao vivo antes da entrega",
      "Ajustes sem custo se algo não ficar correto",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div id="risco" className="scroll-mt-20">
        <RiskSection />
      </div>
      <div id="solucao" className="scroll-mt-20">
        <FeaturedSection />
      </div>
      <div id="como-funciona" className="scroll-mt-20">
        <HowItWorksSection />
      </div>
      <div id="testemunhos" className="scroll-mt-20">
        <Testimonials />
      </div>
      <div id="preco" className="scroll-mt-20">
        <PricingTiers
          plans={plan}
          heading="Loja adequada em 24h, sem mensalidades"
          subheading="Por 50€, recebe botão, formulário, fluxo em 2 passos, e-mail automático, testes ao vivo e garantia de ajuste."
          ctaHref={STRIPE_CHECKOUT_URL}
          ctaLabel="Adequar loja por 50€"
        />
      </div>
      <div id="faq" className="scroll-mt-20">
        <FAQs />
      </div>
      <div id="formulario" className="scroll-mt-20">
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
