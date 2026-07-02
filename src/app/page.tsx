import { ContactSection } from "@/components/contact/contact-section";
import { FAQs } from "@/components/faqs/faqs";
import { FeaturedSection } from "@/components/featured/featured-section";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { RiskSection } from "@/components/risk/risk-section";
import PricingTiers, { Plan } from "@/components/ruixen/pricing-tiers";
import { Testimonials } from "@/components/testimonials/testimonials";
import { WhatsAppFloat } from "@/components/whatsapp/whatsapp-float";
import { STRIPE_CHECKOUT_URL, PRICE_EUR } from "@/lib/site";

const plan: Plan[] = [
  {
    title: "Instalação Completa",
    monthlyPrice: PRICE_EUR,
    annualPrice: PRICE_EUR,
    description: "Valor fixo, sem mensalidades. A sua loja em conformidade.",
    badge: "Oferta Limitada",
    features: [
      "Integração técnica completa",
      "Testes ao vivo na sua loja",
      "Fluxo de e-mail legal configurado",
      "Botão em 2 passos exigidos por lei",
      "Suporte pós-venda em 24h",
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
      <div id="testemunhos" className="scroll-mt-20">
        <Testimonials />
      </div>
      <div id="preco" className="scroll-mt-20">
        <PricingTiers plans={plan} ctaHref={STRIPE_CHECKOUT_URL} ctaLabel="Adequar Agora por 75€" />
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
