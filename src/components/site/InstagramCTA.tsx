import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/site";

export const InstagramCTA = () => (
  <section id="instagram" className="py-16 sm:py-24 bg-background">
    <div className="container">
      <div className="reveal relative max-w-4xl mx-auto rounded-3xl overflow-hidden bg-gradient-navy text-white px-5 sm:px-10 lg:px-14 py-12 sm:py-16 shadow-elegant border border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--gold)/0.18),transparent_60%)] pointer-events-none" />

        <div className="relative flex flex-col items-center text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-gold text-navy-deep grid place-items-center text-2xl sm:text-3xl shadow-gold mb-6">
            <i className="fa-brands fa-instagram" />
          </div>

          <p className="inline-flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold mb-4">
            <span className="w-8 h-px bg-gold" /> Instagram
          </p>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight mb-4">
            Acompanhe nosso trabalho no{" "}
            <em className="text-gradient-gold not-italic">Instagram</em>
          </h2>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mb-2">
            Veja resultados, bastidores e conteúdos exclusivos sobre tratamentos.
          </p>
          <p className="text-gold/90 text-xs sm:text-sm tracking-wide mb-8">
            Conteúdo atualizado frequentemente
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-elevate group inline-flex w-full sm:w-auto items-center justify-center gap-3 px-7 sm:px-8 py-4 sm:py-5 rounded-full bg-gradient-gold text-navy-deep font-semibold text-base shadow-gold"
          >
            <i className="fa-brands fa-instagram text-xl" />
            Ver no Instagram
            <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm text-white/60 hover:text-gold transition-colors"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </div>
  </section>
);
