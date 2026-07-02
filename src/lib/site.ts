// Central place for external links / offer config.
export const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/6oU7sLeXS0Hm3q98Fw7N602";
export const PRICE_EUR = 50;

// Contact channels (used on the landing + thank-you page)
export const WHATSAPP_NUMBER = "3584578337530"; // internacional, sem "+" nem espaços
export const BUSINESS_EMAIL = "geral@adequacaodigital.store"; // TODO: confirmar/alterar

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
