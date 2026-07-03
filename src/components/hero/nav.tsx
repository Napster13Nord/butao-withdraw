"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { STRIPE_CHECKOUT_URL } from "@/lib/site";

const menuItems = [
  { name: "O Risco", href: "#risco" },
  { name: "Solução", href: "#solucao" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Prova social", href: "#testemunhos" },
  { name: "Preço", href: "#preco" },
  { name: "Perguntas", href: "#faq" },
];

function Logo() {
  return (
    <Link href="/" aria-label="Adequação Digital">
      <Image src="/logo.webp" alt="Adequação Digital" width={140} height={31} priority />
    </Link>
  );
}

export function Nav() {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuState(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="relative z-30">
      <nav
        data-state={menuState ? "active" : "inactive"}
        className="fixed top-0 left-1/2 z-30 w-full -translate-x-1/2 px-4 sm:px-6 lg:px-2"
      >
        <div
          className={cn(
            "mx-auto mt-3 max-w-6xl rounded-[1.25rem] px-4 transition-all duration-300 ease-out sm:px-6 lg:px-12",
            (isScrolled || menuState) && "bg-background/80 border shadow-sm shadow-zinc-300/20 backdrop-blur-2xl",
            isScrolled && "lg:max-w-4xl lg:px-5",
          )}
        >
          <div className="relative flex items-center justify-between py-3 lg:py-4">
            {/* Left: Logo */}
            <div className="flex shrink-0">
              <Logo />
            </div>

            {/* Center: Desktop menu */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-6 text-sm xl:gap-8">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Desktop action */}
            <div className="hidden lg:flex lg:w-fit lg:items-center lg:justify-end">
              <Button asChild size="sm">
                <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  Adequar Loja
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-expanded={menuState}
              aria-label={menuState ? "Fechar Menu" : "Abrir Menu"}
              className="text-foreground hover:bg-secondary relative z-20 inline-flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors lg:hidden"
            >
              <Menu className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
              <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
            </button>

            {/* Mobile menu panel */}
            <div
              className={cn(
                "bg-background absolute top-[calc(100%+0.75rem)] right-0 left-0 hidden rounded-2xl border p-3 shadow-2xl shadow-zinc-300/30 lg:hidden dark:shadow-none",
                menuState && "block",
              )}
            >
              <ul className="grid gap-1 text-base font-medium">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-muted-foreground hover:bg-secondary hover:text-foreground block rounded-xl px-4 py-3 text-center transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Button asChild size="sm" className="mt-3 h-10 w-full rounded-xl">
                <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  Adequar Loja
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
