import { SectionTitle } from "./SectionTitle";

const items = [
  { icon: "fa-face-frown", title: "Dor na mandíbula", desc: "Estalos, travamentos e desconforto ao mastigar ou abrir a boca." },
  { icon: "fa-tooth", title: "Sisos inclusos", desc: "Dores recorrentes, inflamações e desalinhamento dental." },
  { icon: "fa-bed", title: "Bruxismo & ATM", desc: "Tensão facial, dores de cabeça e ranger noturno dos dentes." },
  { icon: "fa-user-doctor", title: "Mordida desalinhada", desc: "Mandíbula projetada, retraída ou assimetria facial visível." },
  { icon: "fa-tooth", title: "Falta de dentes", desc: "Dificuldade para mastigar e perda óssea progressiva." },
  { icon: "fa-bone", title: "Trauma facial", desc: "Fraturas, lesões esportivas ou sequelas de acidentes." },
];

export const Symptoms = () => (
  <section id="sintomas" className="py-20 sm:py-32 bg-secondary">
    <div className="container">
      <SectionTitle
        eyebrow="Você se identifica?"
        title={<>Sinais que merecem <em className="text-gradient-gold not-italic">atenção especializada</em></>}
        description="Reconhecer cedo os sintomas evita tratamentos invasivos. Veja se algum destes quadros faz parte da sua rotina."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-16">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="reveal group relative bg-card rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-elegant border border-border/60 hover:border-gold/40 transition-all duration-500"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-navy text-gold grid place-items-center text-xl sm:text-2xl mb-4 sm:mb-5 group-hover:bg-gradient-gold group-hover:text-navy-deep transition-all duration-500">
              <i className={`fa-solid ${item.icon}`} />
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-navy mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{item.desc}</p>
            <div className="absolute top-6 right-6 w-1 h-8 bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  </section>
);