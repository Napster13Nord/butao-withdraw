import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer/footer";
import { COMPANY, LEGAL_LAST_UPDATED, PRICE_EUR } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos e Condições — Adequação Digital",
  description: "Termos de utilização e condições do serviço de instalação do Botão de Livre Resolução.",
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-semibold tracking-tight">{children}</h2>;
}

export default function Termos() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
        <Link
          href="/"
          className="text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground"
        >
          ← Voltar ao início
        </Link>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          Termos e Condições
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última atualização: {LEGAL_LAST_UPDATED}
        </p>

        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <H2>1. Prestador do serviço</H2>
          <p>
            {COMPANY.legalName} ({COMPANY.tradeName}), {COMPANY.form}, Business ID{" "}
            {COMPANY.businessId}, {COMPANY.address}. Contacto:{" "}
            <a className="underline underline-offset-2 hover:text-foreground" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>

          <H2>2. Objeto</H2>
          <p>
            Prestação de um serviço técnico de <strong>instalação e configuração do Botão de Livre
            Resolução</strong> (direito de arrependimento) em lojas WooCommerce, incluindo o fluxo
            em 2 passos, o e-mail legal de confirmação e testes ao vivo.
          </p>

          <H2>3. Preço e pagamento</H2>
          <p>
            O serviço tem o preço único de <strong>{PRICE_EUR}€</strong> (pagamento único, sem
            mensalidades). O pagamento é efetuado de forma segura através da Stripe. Quaisquer
            impostos aplicáveis são apresentados no momento do pagamento.
          </p>

          <H2>4. Prazo e execução</H2>
          <p>
            A instalação é concluída no prazo de <strong>24 horas</strong> a contar da receção dos
            acessos necessários à loja. O cliente obriga-se a fornecer acessos válidos (de
            preferência um utilizador administrador temporário) e informação correta.
          </p>

          <H2>5. Direito de livre resolução e reembolsos</H2>
          <p>
            Nos termos da legislação de defesa do consumidor, dispõe de um prazo de{" "}
            <strong>14 dias</strong> para resolver o contrato sem indicar motivo. Contudo, tratando-se
            de um serviço, ao solicitar o início imediato da execução o cliente reconhece e aceita
            que:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              se o serviço for <strong>totalmente executado</strong> dentro do prazo de resolução,
              com o seu consentimento prévio expresso, <strong>perde o direito de livre resolução</strong>;
            </li>
            <li>
              se solicitar a resolução <strong>antes</strong> da conclusão, terá direito ao reembolso
              proporcional ao serviço ainda não prestado;
            </li>
            <li>
              não haverá reembolso após a conclusão do serviço, salvo em caso de defeito imputável
              ao prestador.
            </li>
          </ul>
          <p>
            Para exercer o direito de resolução ou solicitar reembolso, contacte{" "}
            <a className="underline underline-offset-2 hover:text-foreground" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>

          <H2>6. Responsabilidade e âmbito</H2>
          <p>
            O serviço é de natureza <strong>técnica</strong> e <strong>não constitui aconselhamento
            jurídico</strong>. A instalação visa cumprir os requisitos técnicos do Botão de Livre
            Resolução decorrentes da Diretiva (UE) 2023/2673, mas a conformidade global da loja com a
            legislação aplicável permanece da responsabilidade do cliente. O prestador não se
            responsabiliza por danos indiretos nem por incumprimentos resultantes de informação ou
            acessos incorretos fornecidos pelo cliente.
          </p>

          <H2>7. Proteção de dados</H2>
          <p>
            O tratamento de dados pessoais rege-se pela nossa{" "}
            <Link href="/privacidade" className="underline underline-offset-2 hover:text-foreground">
              Política de Privacidade
            </Link>
            .
          </p>

          <H2>8. Lei aplicável e resolução de litígios</H2>
          <p>
            Aos contratos com consumidores aplica-se a lei imperativa de defesa do consumidor do seu
            país de residência. Em caso de litígio, o consumidor pode recorrer a entidades de
            Resolução Alternativa de Litígios (RAL) e à plataforma de Resolução de Litígios em Linha
            da União Europeia:{" "}
            <a className="underline underline-offset-2 hover:text-foreground" href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              ec.europa.eu/consumers/odr
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
