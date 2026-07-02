// Central place for external links / offer config.
export const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/6oU7sLeXS0Hm3q98Fw7N602";
export const PRICE_EUR = 50;

// Google Analytics 4 measurement ID
export const GA_MEASUREMENT_ID = "G-Y7TXP57D8G";

// Contact channels (used on the landing + thank-you page)
export const WHATSAPP_NUMBER = "3584578337530"; // internacional, sem "+" nem espaços
export const BUSINESS_EMAIL = "andre@wpexperts.pt";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
