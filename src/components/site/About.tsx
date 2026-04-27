import drImg from "@/assets/dr-portrait.jpg";
import { WHATSAPP_URL, DOCTOR } from "@/lib/site";

const credentials = [
  "Especialista em Cirurgia e Traumatologia Bucomaxilofacial",
  "Mais de 15 anos de prática cirúrgica hospitalar",
  "Formação complementar em Implantodontia Avançada",
  "Membro do Colégio Brasileiro de Cirurgia Bucomaxilofacial",
  "Atendimento humanizado e abordagem multidisciplinar",
];

export const About = () => (
  <section id="sobre" className="py-20 sm:py-32 bg-background overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      {/* Image */}
      <div className="reveal relative max-w-md mx-auto lg:mx-0 w-full">
        <div className="absolute -inset-3 sm:-inset-6 border-2 border-gold rounded-2xl translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5" />
        <img
          src={drImg}
          alt={`${DOCTOR.name}, ${DOCTOR.title}`}
          width={1024}
          height={1024}
          loading="lazy"
          className="relative rounded-2xl shadow-elegant w-full object-cover"
        />
        <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-navy-deep text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-elegant border border-gold/30">
          <div className="text-gold font-display text-xl sm:text-2xl">15+</div>
          <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70">anos de carreira</div>
        </div>
      </div>

      {/* Content */}
      <div className="reveal">
        <p className="inline-flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold-dark mb-4">
          <span className="w-8 h-px bg-gold" /> Sobre o profissional
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy leading-tight mb-5 sm:mb-6">
          {DOCTOR.name},<br />
          <em className="text-gradient-gold not-italic">{DOCTOR.title}</em>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
          Com formação sólida e atuação dedicada à cirurgia bucomaxilofacial, o
          Dr. Odeni Woelbert combina técnica refinada e visão clínica integrada
          para oferecer aos seus pacientes resultados estéticos e funcionais
          excepcionais.
        </p>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
          Cirurgião Bucomaxilofacial com atuação em DTM, cirurgia ortognática,
          implantes dentários, extração de sisos e prótese facial.
        </p>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
          Cada plano de tratamento é construído de forma única, respeitando a
          individualidade, o tempo e os objetivos de cada pessoa.
        </p>

        <ul className="space-y-3 mb-10">
          {credentials.map((c) => (
            <li key={c} className="flex items-start gap-3">
              <span className="mt-1 w-5 h-5 rounded-full bg-gradient-gold grid place-items-center shrink-0">
                <i className="fa-solid fa-check text-[10px] text-navy-deep" />
              </span>
              <span className="text-foreground/85">{c}</span>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-7 py-4 rounded-full bg-navy text-white font-medium hover:bg-navy-deep transition-colors duration-300 shadow-soft"
        >
          <i className="fa-brands fa-whatsapp text-xl text-gold" />
          Conversar com o doutor
        </a>
      </div>
    </div>
  </section>
);