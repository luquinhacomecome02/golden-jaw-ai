import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionTitle } from "./SectionTitle";

const faqs = [
  {
    q: "Como funciona a primeira avaliação?",
    a: "A consulta inicial inclui anamnese completa, exame clínico e análise de exames de imagem. O Dr. Odeni explica o diagnóstico em detalhes e propõe um plano de tratamento individualizado.",
  },
  {
    q: "A cirurgia ortognática é dolorosa?",
    a: "O procedimento é realizado sob anestesia geral em ambiente hospitalar. O pós-operatório é controlado com medicação adequada — a maioria dos pacientes relata desconforto leve a moderado nos primeiros dias.",
  },
  {
    q: "Em quanto tempo posso voltar à rotina após uma extração de siso?",
    a: "Em geral, 3 a 5 dias para atividades leves. Recomendamos repouso relativo, alimentação fria e medicação prescrita. O retorno completo às atividades varia conforme cada caso.",
  },
  {
    q: "Os implantes são para qualquer pessoa?",
    a: "A maioria dos pacientes adultos é candidata a implantes. Avaliamos saúde geral, qualidade óssea e expectativas. Quando necessário, realizamos enxertos ósseos prévios para garantir o sucesso do tratamento.",
  },
  {
    q: "O consultório atende convênios?",
    a: "Trabalhamos com modelo particular, com possibilidade de reembolso por convênios. Oferecemos planos personalizados de pagamento para cada tratamento.",
  },
  {
    q: "Como agendar uma consulta?",
    a: "O contato direto e mais rápido é via WhatsApp. Nossa equipe responde em horário comercial e organiza sua agenda conforme sua disponibilidade.",
  },
];

export const Faq = () => (
  <section id="faq" className="py-24 sm:py-32 bg-secondary">
    <div className="container max-w-4xl">
      <SectionTitle
        eyebrow="Dúvidas frequentes"
        title={<>Respostas claras para <em className="text-gradient-gold not-italic">decisões seguras</em></>}
        description="Reunimos as perguntas mais comuns dos nossos pacientes. Se a sua dúvida não estiver aqui, fale com nosso assistente."
      />

      <div className="reveal mt-14">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-6 shadow-soft data-[state=open]:border-gold/50 data-[state=open]:shadow-elegant transition-all"
            >
              <AccordionTrigger className="text-left font-display text-lg sm:text-xl text-navy hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);