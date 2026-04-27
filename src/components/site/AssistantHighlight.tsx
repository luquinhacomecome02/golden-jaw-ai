const benefits = [
  "Resposta imediata",
  "Tire dúvidas sobre tratamentos",
  "Atendimento rápido",
];

export const AssistantHighlight = () => {
  const openChat = () => {
    window.dispatchEvent(new CustomEvent("open-chat-widget"));
  };

  return (
    <section id="assistente" className="py-14 sm:py-20 lg:py-24 bg-secondary">
      <div className="container">
        <div className="reveal relative max-w-4xl mx-auto rounded-3xl bg-gradient-navy text-white px-5 sm:px-10 lg:px-12 py-9 sm:py-12 lg:py-14 shadow-elegant border border-gold/20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.18),transparent_60%)] pointer-events-none" />

          <div className="relative grid md:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-center">
            <div className="mx-auto md:mx-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-gold text-navy-deep grid place-items-center text-3xl sm:text-4xl shadow-gold shrink-0">
              <i className="fa-solid fa-robot" />
            </div>

            <div className="text-center md:text-left">
              <p className="inline-flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold mb-3">
                <span className="w-8 h-px bg-gold" /> Assistente Virtual
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight mb-3">
                Tire suas dúvidas com nosso{" "}
                <em className="text-gradient-gold not-italic">assistente virtual</em>
              </h2>
              <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-6">
                Respostas rápidas sobre tratamentos, dores e cirurgias —
                atendimento imediato.
              </p>

              <ul className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-8 text-sm">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-center justify-center md:justify-start gap-2 text-white/85"
                  >
                    <span className="w-5 h-5 rounded-full bg-gradient-gold grid place-items-center shrink-0">
                      <i className="fa-solid fa-check text-[10px] text-navy-deep" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <button
                onClick={openChat}
                className="btn-elevate group inline-flex w-full sm:w-auto items-center justify-center gap-3 px-7 sm:px-8 py-4 sm:py-5 rounded-full bg-gradient-gold text-navy-deep font-semibold text-base shadow-gold"
              >
                <i className="fa-solid fa-comments text-lg" />
                Abrir assistente agora
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
