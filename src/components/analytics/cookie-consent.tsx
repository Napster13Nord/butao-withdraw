"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie-consent")) setVisible(true);
    } catch {
      /* localStorage indisponível */
    }
  }, []);

  const decide = (accepted: boolean) => {
    try {
      localStorage.setItem("cookie-consent", accepted ? "accepted" : "rejected");
    } catch {
      /* ignore */
    }
    if (accepted && typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "granted" });
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border bg-background/95 p-4 shadow-lg backdrop-blur sm:inset-x-auto sm:right-4 sm:bottom-4 sm:p-5">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Usamos cookies para analisar o tráfego do site (Google Analytics) e melhorar a sua
        experiência. Pode aceitar ou recusar. Saiba mais na nossa{" "}
        <Link href="/privacidade" className="underline underline-offset-2 hover:text-foreground">
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <Button variant="outline" size="sm" onClick={() => decide(false)}>
          Recusar
        </Button>
        <Button size="sm" onClick={() => decide(true)}>
          Aceitar
        </Button>
      </div>
    </div>
  );
}
