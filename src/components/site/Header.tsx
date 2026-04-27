import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/site";
import logoOW from "@/assets/logo-ow.png";

const links = [
  { href: "#sintomas", label: "Sintomas" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2 group min-w-0">
          <img
            src={logoOW}
            alt="Brasão Dr. Odeni Woelbert"
            className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] shrink-0"
          />
          <span className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-display text-white text-base">Dr. Odeni Woelbert</span>
            <span className="text-[11px] tracking-[0.18em] uppercase text-gold/90">
              Bucomaxilofacial
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-navy-deep font-semibold text-sm shadow-gold hover:scale-[1.03] transition-transform duration-300"
          >
            <i className="fa-solid fa-calendar-check" />
            Agendar Avaliação
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-white/20 text-white"
            aria-label="Abrir menu"
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl bg-navy-deep/98 backdrop-blur-md border border-white/10 p-5 animate-scale-in">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/85 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-gold text-navy-deep font-semibold"
            >
              <i className="fa-brands fa-whatsapp" />
              Agendar Avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};