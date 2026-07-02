import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer/footer";
import { COMPANY, LEGAL_LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade — Adequação Digital",
  description: "Como recolhemos, usamos e protegemos os seus dados pessoais (RGPD).",
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-semibold tracking-tight">{children}</h2>;
}

export default function Privacidade() {
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
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última atualização: {LEGAL_LAST_UPDATED}
        </p>

        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Esta política explica como são tratados os seus dados pessoais quando utiliza este site
            e contrata os nossos serviços, em conformidade com o Regulamento Geral sobre a Proteção
            de Dados (RGPD — Regulamento (UE) 2016/679).
          </p>

          <H2>1. Responsável pelo tratamento</H2>
          <p>
            {COMPANY.legalName} ({COMPANY.tradeName}), {COMPANY.form}, com o número de contribuinte
            (Business ID) {COMPANY.businessId}, com sede em {COMPANY.address}.
            <br />
            Contacto: <a className="underline underline-offset-2 hover:text-foreground" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </p>

          <H2>2. Que dados recolhemos</H2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Dados de identificação e contacto</strong>: nome, e-mail, telemóvel/WhatsApp.
            </li>
            <li>
              <strong>Dados da loja</strong>: URL da loja e, quando nos concede acesso, credenciais
              de administrador (idealmente um utilizador temporário criado por si).
            </li>
            <li>
              <strong>Dados de pagamento</strong>: o pagamento é processado pela Stripe. Não
              armazenamos dados do seu cartão; recebemos apenas a confirmação e dados de faturação.
            </li>
            <li>
              <strong>Dados de navegação</strong>: cookies e identificadores de utilização do site
              (Google Analytics), apenas mediante o seu consentimento.
            </li>
          </ul>

          <H2>3. Finalidades e base legal</H2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Responder a pedidos e prestar o serviço contratado —{" "}
              <em>execução de contrato ou diligências pré-contratuais</em>.
            </li>
            <li>
              Faturação e cumprimento de obrigações fiscais e legais —{" "}
              <em>obrigação legal</em>.
            </li>
            <li>
              Análise de tráfego e melhoria do site (Google Analytics) —{" "}
              <em>consentimento</em>.
            </li>
          </ul>

          <H2>4. Subcontratantes e partilha de dados</H2>
          <p>Recorremos a fornecedores que tratam dados em nosso nome:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Stripe</strong> — processamento de pagamentos.</li>
            <li><strong>Formspree</strong> — receção de formulários de contacto.</li>
            <li><strong>Google (Analytics)</strong> — estatísticas de utilização.</li>
            <li><strong>Vercel</strong> — alojamento do site.</li>
            <li><strong>WhatsApp / Meta</strong> — quando nos contacta por esse canal.</li>
          </ul>
          <p>
            Alguns destes fornecedores podem tratar dados fora do Espaço Económico Europeu (ex.:
            EUA). Nesses casos, existem salvaguardas adequadas (Cláusulas Contratuais-Tipo da UE
            e/ou EU-US Data Privacy Framework).
          </p>

          <H2>5. Conservação dos dados</H2>
          <p>
            Conservamos os dados apenas pelo tempo necessário às finalidades acima e ao cumprimento
            de obrigações legais (nomeadamente fiscais). As credenciais de acesso à sua loja são
            eliminadas após a conclusão do serviço; recomendamos que remova o utilizador temporário
            que nos concedeu.
          </p>

          <H2>6. Os seus direitos</H2>
          <p>
            Tem o direito de aceder, retificar, apagar, limitar ou opor-se ao tratamento, à
            portabilidade dos dados e a retirar o consentimento a qualquer momento. Para exercer os
            seus direitos, contacte{" "}
            <a className="underline underline-offset-2 hover:text-foreground" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>
          <p>
            Pode ainda apresentar reclamação a uma autoridade de controlo — em Portugal, a{" "}
            <strong>CNPD</strong> (
            <a className="underline underline-offset-2 hover:text-foreground" href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer">cnpd.pt</a>
            ); no país de estabelecimento do responsável, a autoridade finlandesa de proteção de
            dados (Tietosuojavaltuutetun toimisto).
          </p>

          <H2>7. Cookies</H2>
          <p>
            Utilizamos cookies essenciais ao funcionamento do site e cookies de análise (Google
            Analytics). Os cookies de análise só são ativados depois de aceitar no banner de
            cookies. Pode alterar a sua escolha limpando os cookies/armazenamento do navegador e
            recarregando o site.
          </p>

          <H2>8. Alterações</H2>
          <p>
            Podemos atualizar esta política. A versão em vigor é sempre a publicada nesta página,
            com a respetiva data de atualização.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
