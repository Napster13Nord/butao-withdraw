import type { FeaturedItem } from "./types";
import { AiDesignVisual } from "./visuals/ai-design-visual";
import { TemplatesVisual } from "./visuals/templates-visual";
import { SeoVisual } from "./visuals/seo-visual";
import { SeamlessIntegrationsVisual } from "./visuals/seamless-integrations-visual";
import { ResponsiveVisual } from "./visuals/responsive-visual";

export const defaultFeaturedItems: FeaturedItem[] = [
  // Row 1: Two half-width cards
  {
    id: "config-woo",
    kind: "feature",
    span: "half",
    title: "Configuração direta no WooCommerce.",
    description:
      "Integração completa na sua loja, sem interromper as suas vendas.",
    href: "#formulario",
    ctaAriaLabel: "Saber mais sobre a configuração",
    visual: <AiDesignVisual />,
    className: "min-h-[420px]",
  },
  {
    id: "dois-passos",
    kind: "feature",
    span: "half",
    title: "Botão visível em 2 passos legais.",
    description:
      "Fluxo de livre resolução com os 2 passos estritos exigidos pela Diretiva Europeia.",
    href: "#formulario",
    ctaAriaLabel: "Saber mais sobre o fluxo em 2 passos",
    visual: <TemplatesVisual />,
    className: "min-h-[420px]",
  },
  // Row 2: Three third-width cards
  {
    id: "formulario-adaptado",
    kind: "feature",
    span: "third",
    title: "Formulário adaptado.",
    description: "Para utilizadores registados e clientes convidados.",
    href: "#formulario",
    ctaAriaLabel: "Saber mais sobre o formulário",
    visual: <SeoVisual />,
  },
  {
    id: "email-legal",
    kind: "feature",
    span: "third",
    title: "E-mail automático.",
    description: "Disparo do e-mail de confirmação legal a cada pedido.",
    href: "#formulario",
    ctaAriaLabel: "Saber mais sobre o e-mail automático",
    visual: <SeamlessIntegrationsVisual />,
  },
  {
    id: "testes-ao-vivo",
    kind: "feature",
    span: "third",
    title: "Testes ao vivo.",
    description: "Validação em ambiente real antes da entrega final.",
    href: "#formulario",
    ctaAriaLabel: "Saber mais sobre os testes",
    visual: <ResponsiveVisual />,
  },
];
