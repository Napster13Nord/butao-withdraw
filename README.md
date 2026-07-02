# Adequação Digital

Landing page comercial para o serviço de instalação do Botão de Livre Resolução em lojas WooCommerce.

O projeto comunica a obrigatoriedade associada à Diretiva Europeia (UE) 2023/2673, apresenta o risco de incumprimento, vende a instalação técnica por valor fixo e encaminha o cliente para pagamento seguro via Stripe.

## Objetivo do projeto

A Adequação Digital ajuda donos de lojas WooCommerce a cumprir a obrigação do Botão de Livre Resolução / Arrependimento de forma rápida, clara e sem fricção técnica.

O funil principal é:

1. O utilizador entende o risco legal.
2. Vê a solução técnica e como funciona o processo.
3. Compra a instalação através de Stripe Checkout.
4. Após o pagamento, recebe instruções para criar um utilizador temporário no WordPress.
5. A equipa configura o botão, o fluxo em 2 passos e o e-mail legal automático.
6. O cliente pode remover o acesso temporário após a entrega.

## Funcionalidades principais

- Landing page em português de Portugal para donos de e-commerce.
- Copy orientada a conversão, risco legal e confiança.
- Checkout externo via Stripe.
- Página de obrigado com instruções pós-pagamento.
- Formulário Formspree para dúvidas antes da compra.
- Botão flutuante de WhatsApp.
- Banner de consentimento de cookies.
- Google Analytics 4 com consent mode.
- Páginas legais de privacidade e termos.
- Layout responsivo com navegação mobile.

## Stack técnica

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI primitives
- Motion
- Lucide React
- Sonner
- Vercel

O projeto também mantém algumas dependências e componentes herdados do starter original de Paddle. O fluxo comercial ativo da landing usa Stripe Checkout através de link externo centralizado em `src/lib/site.ts`.

## Estrutura principal

```text
src/
  app/
    page.tsx              Página principal
    layout.tsx            Metadata, tema, GA4 e cookies
    obrigado/page.tsx     Página pós-pagamento
    privacidade/page.tsx  Política de privacidade
    termos/page.tsx       Termos e condições
  components/
    hero/                 Hero e navegação
    risk/                 Seção de risco legal
    featured/             Blocos de solução técnica
    how-it-works/         Processo após pagamento
    testimonials/         Testemunhos
    contact/              Formulário de dúvidas pré-compra
    footer/               Rodapé e links legais
    whatsapp/             Botão flutuante de WhatsApp
    analytics/            Consentimento e evento de compra
    ui/                   Componentes base
  lib/
    site.ts               Configuração comercial e dados legais
```

## Configuração comercial

As principais constantes do produto ficam em:

```text
src/lib/site.ts
```

Neste ficheiro é possível alterar:

- `STRIPE_CHECKOUT_URL` - link de pagamento Stripe.
- `PRICE_EUR` - preço apresentado na landing e nos documentos legais.
- `GA_MEASUREMENT_ID` - ID do Google Analytics 4.
- `WHATSAPP_NUMBER` - número internacional usado no botão de WhatsApp.
- `BUSINESS_EMAIL` - e-mail de contacto.
- `COMPANY` - identificação legal usada nas páginas legais.
- `LEGAL_LAST_UPDATED` - data de atualização dos documentos legais.

O formulário de dúvidas antes da compra usa Formspree em:

```text
src/components/contact/contact-section.tsx
```

Para trocar o endpoint, altere o atributo `action` do formulário.

## Páginas e rotas

| Rota           | Descrição                 |
| -------------- | ------------------------- |
| `/`            | Landing page principal    |
| `/obrigado`    | Instruções após pagamento |
| `/privacidade` | Política de privacidade   |
| `/termos`      | Termos e condições        |

## Scripts disponíveis

```bash
npm run dev
```

Inicia o servidor local em modo desenvolvimento.

```bash
npm run build
```

Gera a build de produção e valida tipos.

```bash
npm run start
```

Inicia a aplicação já compilada.

```bash
npm run format
```

Formata o projeto com Prettier.

## Como correr localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra:

```text
http://localhost:3000
```

## Variáveis de ambiente

O fluxo atual da landing não depende de variáveis de ambiente obrigatórias para funcionar em produção, porque Stripe, GA4, WhatsApp, e-mail e dados legais estão centralizados em `src/lib/site.ts`.

Existem hooks e componentes legados relacionados com Paddle que ainda leem:

- `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN`
- `NEXT_PUBLIC_PADDLE_ENV`
- `NEXT_PUBLIC_APP_REDIRECT_URL`

Essas variáveis só são necessárias se o fluxo legado de checkout Paddle voltar a ser usado.

## Serviços externos

### Stripe

Usado para o pagamento do serviço. A landing envia o utilizador para o link configurado em `STRIPE_CHECKOUT_URL`.

### Formspree

Usado no formulário de dúvidas antes da compra. O formulário não substitui o checkout, apenas serve para contactos pré-venda.

### Google Analytics 4

Configurado em `src/app/layout.tsx` e controlado pelo banner de cookies em `src/components/analytics/cookie-consent.tsx`.

### WhatsApp

Usado para contacto rápido e envio de acessos após pagamento. O link é gerado por `whatsappLink` em `src/lib/site.ts`.

## Fluxo de conteúdo da landing

1. Hero com promessa principal e CTA de compra.
2. Seção de risco legal e consequências.
3. Seção de solução técnica.
4. Bloco "Como funciona".
5. Testemunhos.
6. Preço e checkout.
7. Perguntas frequentes.
8. Formulário de dúvidas antes da compra.
9. Footer com links legais e contacto.

## Manutenção editorial

Ao alterar textos da landing, verificar:

- Consistência de tom: usar "nós" como voz da marca.
- Preço: manter `PRICE_EUR`, CTAs e termos legais alinhados.
- Prazo: manter "24h" consistente no hero, preço, FAQ e pós-pagamento.
- Diretiva: manter a referência "Diretiva Europeia (UE) 2023/2673" consistente.
- Formulário: manter claro que é para dúvidas antes da compra, não para iniciar a instalação.

## Checklist antes de publicar

- `npm run build` passa sem erros.
- CTAs principais apontam para o link correto da Stripe.
- Formspree recebe uma submissão de teste.
- WhatsApp abre com a mensagem correta.
- Página `/obrigado` explica corretamente como criar o acesso temporário.
- Páginas `/privacidade` e `/termos` refletem preço, contacto e entidade legal atuais.
- Menu desktop e mobile mostram "Como funciona".
- Footer mantém links legais e copyright no final.

## Deploy

O projeto está preparado para Vercel.

Configuração atual:

```json
{
  "framework": "nextjs",
  "buildCommand": "next build",
  "installCommand": "npm install"
}
```

Após push para a branch principal, a plataforma de deploy deve executar `npm install` e `next build`.

## Licença

Este repositório inclui um ficheiro `LICENSE`. Verifique esse ficheiro antes de reutilizar ou distribuir o código.
