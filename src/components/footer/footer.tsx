import { FooterBlur } from "@/components/footer/footer-blur";
import Link from "next/link";

const links = [
  {
    title: "Navegação",
    links: [
      { label: "O Risco", href: "#risco" },
      { label: "Solução", href: "#solucao" },
      { label: "Testemunhos", href: "#testemunhos" },
      { label: "Preço", href: "#preco" },
      { label: "Perguntas frequentes", href: "#faq" },
    ],
  },
  {
    title: "Adequação",
    links: [
      { label: "Regularizar loja", href: "#formulario" },
      { label: "Diretiva UE 2023/2673", href: "#risco" },
      { label: "Falar connosco", href: "#formulario" },
    ],
  },
];

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-base font-semibold tracking-tight">Adequação Digital</span>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Top section with logo and links */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Adequamos a sua loja WooCommerce ao Botão de Livre Resolução, em estrita conformidade
              com a Diretiva Europeia (UE) 2023/2673. Instalação em 24h por 100€.
            </p>
          </div>

          {/* Link columns */}
          {links.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Adequação Digital. Desenvolvido em conformidade com a
            Diretiva Europeia (UE) 2023/2673.
          </p>
          <p className="text-sm text-muted-foreground">
            Concebido por{" "}
            <a
              href="https://wpexperts.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              WPexperts.pt
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
