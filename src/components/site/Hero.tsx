import heroImg from "@/assets/hero-clinic.jpg";
import { WHATSAPP_URL, DOCTOR } from "@/lib/site";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Sala de cirurgia bucomaxilofacial moderna"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.15),transparent_60%)]" />

      <div className="container relative z-10 pt-28 sm:pt-32 pb-24 sm:pb-20">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold mb-5 sm:mb-6 animate-fade-in">
            <span className="w-8 h-px bg-gold" />
            Cirurgia Bucomaxilofacial de Excelência
          </p>

          <h1 className="font-display text-white text-[2.5rem] leading-[1.08] sm:text-6xl lg:text-7xl sm:leading-[1.05] mb-6 animate-fade-in-slow">
            Restaurando <span className="text-gradient-gold italic">harmonia</span>,<br />
            função e <span className="text-gradient-gold italic">confiança</span>.
          </h1>

          <p className="text-white text-xs sm:text-base tracking-wide mb-6 animate-fade-in-slow">
            {DOCTOR.cro} • {DOCTOR.specialtiesLong}
          </p>

          <p className="border-l-2 border-gold pl-4 sm:pl-5 text-white/85 text-base sm:text-xl max-w-2xl mb-10 animate-fade-in-slow">
            Tratamentos cirúrgicos avançados em ortognática, implantes,
            ATM e cirurgia de sisos — conduzidos com precisão clínica e
            atendimento humanizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-slow">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-full bg-gradient-gold text-navy-deep font-semibold text-base shadow-gold hover:scale-[1.03] transition-transform duration-300"
            >
              <i className="fa-brands fa-whatsapp text-2xl" />
              Falar no WhatsApp
              <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#especialidades"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-4 sm:py-5 rounded-full border border-white/30 text-white hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Conhecer especialidades
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-12 sm:mt-16 max-w-2xl">
            {[
              { n: "+15", l: "anos de experiência" },
              { n: "+3.000", l: "cirurgias realizadas" },
              { n: "100%", l: "atendimento personalizado" },
            ].map((s) => (
              <div key={s.l} className="border-t border-white/15 pt-3 sm:pt-4">
                <div className="font-display text-2xl sm:text-4xl text-gold">{s.n}</div>
                <div className="text-[11px] sm:text-sm text-white/70 mt-1 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};