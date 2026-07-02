"use client";

import { useEffect } from "react";
import { PRICE_EUR } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a GA4 `purchase` event once, when the thank-you page loads.
 * Reads a Stripe id from the URL (if present) as transaction_id to help dedupe.
 */
export function PurchaseEvent() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;

    const params = new URLSearchParams(window.location.search);
    const transactionId =
      params.get("session_id") ||
      params.get("payment_intent") ||
      `obg_${Date.now()}`;

    window.gtag("event", "purchase", {
      transaction_id: transactionId,
      value: PRICE_EUR,
      currency: "EUR",
      items: [
        {
          item_id: "botao-livre-resolucao",
          item_name: "Instalação Botão de Livre Resolução",
          price: PRICE_EUR,
          quantity: 1,
        },
      ],
    });
  }, []);

  return null;
}
