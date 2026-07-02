import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";

function AccordionItemFAQs(props: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      {...props}
      className={cn(
        "bg-secondary/30 data-[state=open]:bg-card data-[state=open]:border-border rounded-lg border border-transparent px-5 py-2 transition-colors data-[state=open]:shadow-sm lg:px-7",
        props.className,
      )}
    />
  );
}

function AccordionTriggerFAQs(props: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      {...props}
      className={cn("[&[data-state=open]>svg]:text-foreground text-base lg:text-lg", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-muted-foreground lg:text-base", props.className)} />;
}

export function FAQs() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-25">
      {/* Section header — stacked like every other section */}
      <div className="mb-10 flex flex-col items-center gap-4 text-center">
        <Badge variant="secondary" className="uppercase">
          FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Perguntas <span className="text-muted-foreground">Frequentes</span>
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Respostas às dúvidas mais comuns. Ainda tem questões?{" "}
          <Link href="#formulario" className="underline underline-offset-2 hover:text-foreground transition-colors">
            Fale connosco.
          </Link>
        </p>
      </div>

      <Accordion type="single" collapsible defaultValue="lei" className="mx-auto grid w-full max-w-2xl gap-3">
        <AccordionItemFAQs value="lei">
          <AccordionTriggerFAQs>O que é o Botão de Arrependimento / Livre Resolução?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              É um mecanismo obrigatório imposto pela Diretiva Europeia (UE) 2023/2673 que permite
              ao consumidor exercer o direito de livre resolução de forma simples e visível, em
              apenas 2 passos, diretamente na sua loja online.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="obrigatorio">
          <AccordionTriggerFAQs>A minha loja é mesmo obrigada a ter o botão?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Sim. Qualquer e-commerce que venda a consumidores na União Europeia é abrangido. As
              autoridades utilizam sistemas automatizados de varredura (web sweeps) para detetar
              lojas em incumprimento.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="coima">
          <AccordionTriggerFAQs>O que acontece se não cumprir?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Fica exposto a coimas de até 4% do volume de negócios anual ou 2 milhões de euros, e o
              prazo de devolução do cliente salta automaticamente de 14 dias para 1 ano e 14 dias.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="plataforma">
          <AccordionTriggerFAQs>Funciona na minha loja WooCommerce?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Sim. A instalação é feita diretamente na sua loja WooCommerce, sem plugins de terceiros
              e sem interromper as suas vendas.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="prazo">
          <AccordionTriggerFAQs>Quanto tempo demora a instalação?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              A instalação é garantida em 24 horas após o envio dos acessos. Trato de toda a
              integração técnica, testes ao vivo e configuração do e-mail legal.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="preco">
          <AccordionTriggerFAQs>Quanto custa e há mensalidades?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              É um investimento único de 75€, valor fixo e sem mensalidades. Inclui integração
              completa, testes ao vivo, fluxo de e-mail configurado e suporte pós-venda em 24h.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="dados">
          <AccordionTriggerFAQs>Os meus dados e acessos estão seguros?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Sim. Todos os dados e acessos são tratados com total confidencialidade e utilizados
              apenas para o processo de adequação da sua loja.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
      </Accordion>
    </div>
  );
}

