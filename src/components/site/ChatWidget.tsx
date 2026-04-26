import { useEffect, useRef, useState } from "react";
import { WHATSAPP_URL } from "@/lib/site";

type Msg = {
  id: number;
  from: "bot" | "user";
  text: string;
  showWhatsApp?: boolean;
};

type KBEntry = {
  keywords: string[];
  reply: string;
};

const KB: KBEntry[] = [
  {
    keywords: ["dor", "dói", "doi", "doendo", "incomodo", "incômodo"],
    reply:
      "Dores na face, mandíbula ou na boca podem indicar problemas que vão de bruxismo a disfunções da ATM. Uma avaliação clínica permite identificar a origem precisa e o melhor tratamento.",
  },
  {
    keywords: ["siso", "sisos", "terceiro molar", "molar"],
    reply:
      "A extração de sisos é indicada quando há dor, inflamação ou risco de mau posicionamento. Realizamos o procedimento com técnicas modernas, sedação opcional e pós-operatório confortável.",
  },
  {
    keywords: ["ortognática", "ortognatica", "mandíbula", "mandibula", "mordida"],
    reply:
      "A cirurgia ortognática corrige desalinhamentos esqueléticos da face e mandíbula, melhorando função mastigatória, respiração e estética. O planejamento é digital e personalizado.",
  },
  {
    keywords: ["implante", "implantes", "dente", "dentes"],
    reply:
      "Implantes dentários reabilitam função e estética com soluções como carga imediata, All-on-4 e All-on-6. Avaliamos qualidade óssea e expectativas para o melhor protocolo.",
  },
  {
    keywords: ["atm", "estalo", "estalos", "bruxismo", "ranger"],
    reply:
      "Disfunções da ATM podem causar dor, estalos e dores de cabeça. O tratamento é multidisciplinar e pode envolver placas oclusais, fisioterapia e, em casos selecionados, cirurgia minimamente invasiva.",
  },
  {
    keywords: ["preço", "preco", "valor", "custo", "quanto custa"],
    reply:
      "Os valores variam conforme o tratamento e a complexidade do caso. Preferimos apresentar o orçamento após uma avaliação presencial — assim conseguimos personalizar o plano para você.",
  },
  {
    keywords: ["agendar", "consulta", "horario", "horário", "marcar"],
    reply:
      "Posso te encaminhar agora mesmo para o WhatsApp da equipe — eles confirmam horários disponíveis e organizam sua avaliação.",
  },
];

const FALLBACK =
  "Posso encaminhar sua dúvida diretamente ao Dr. Odeni e à equipe pelo WhatsApp — eles avaliam seu caso de forma personalizada.";

const WELCOME =
  "Olá! Sou a assistente virtual do Dr. Odeni 👋. Posso ajudar com dúvidas sobre dor, sisos, ortognática, implantes ou ATM. Como posso te ajudar hoje?";

const findReply = (text: string): KBEntry | null => {
  const t = text.toLowerCase();
  return KB.find((e) => e.keywords.some((k) => t.includes(k))) ?? null;
};

let nextId = 1;

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize once when first opened
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ id: nextId++, from: "bot", text: WELCOME }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 9e9, behavior: "smooth" });
  }, [messages, typing]);

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    setMessages((m) => [...m, { id: nextId++, from: "user", text }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const match = findReply(text);
      const reply = match?.reply ?? FALLBACK;
      setMessages((m) => [
        ...m,
        { id: nextId++, from: "bot", text: reply, showWhatsApp: true },
      ]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir chat"
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-gold text-navy-deep shadow-gold grid place-items-center text-2xl pulse-ring hover:scale-105 transition-transform"
        >
          <span className="relative z-10">
            <i className="fa-solid fa-comments" />
          </span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="fixed z-50 animate-scale-in
            inset-x-4 bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-6
            sm:w-[380px] max-h-[85vh] sm:max-h-[600px]
            flex flex-col rounded-2xl overflow-hidden
            bg-card border border-border shadow-elegant"
        >
          {/* Header */}
          <div className="bg-gradient-navy text-white px-5 py-4 flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full bg-gradient-gold grid place-items-center text-navy-deep text-lg shrink-0">
              <i className="fa-solid fa-user-doctor" />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-gold border-2 border-navy-deep" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-display text-base">Assistente Dr. Odeni</div>
              <div className="text-xs text-white/70">Online · responde em segundos</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar chat"
              className="w-9 h-9 rounded-full hover:bg-white/10 grid place-items-center transition-colors"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-secondary/40">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-navy text-white rounded-br-sm"
                      : "bg-card border border-border text-foreground rounded-bl-sm shadow-soft"
                  }`}
                >
                  <p>{m.text}</p>
                  {m.showWhatsApp && (
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-gold text-navy-deep text-xs font-semibold w-full justify-center hover:scale-[1.02] transition-transform"
                    >
                      <i className="fa-brands fa-whatsapp text-base" />
                      Falar no WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3 shadow-soft">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-gold animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "120ms" }} />
                    <span className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "240ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          {messages.length <= 1 && (
            <div className="px-4 py-2 flex flex-wrap gap-2 bg-secondary/40 border-t border-border">
              {["Dor na mandíbula", "Sisos", "Ortognática", "Implantes"].map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-xs px-3 py-1.5 rounded-full border border-gold/40 text-navy hover:bg-gold/10 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="p-3 bg-card border-t border-border flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua dúvida..."
              className="flex-1 px-4 py-2.5 rounded-full bg-secondary border border-border text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              aria-label="Enviar"
              className="w-10 h-10 grid place-items-center rounded-full bg-gradient-gold text-navy-deep shrink-0 hover:scale-105 transition-transform"
            >
              <i className="fa-solid fa-paper-plane text-sm" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};