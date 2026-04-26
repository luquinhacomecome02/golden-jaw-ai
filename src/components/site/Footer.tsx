import { DOCTOR, WHATSAPP_URL } from "@/lib/site";
import logoOW from "@/assets/logo-ow.png";

export const Footer = () => (
  <footer className="bg-navy-deep text-white/80 pt-20 pb-10">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <img
              src={logoOW}
              alt="Brasão Dr. Odeni Woelbert"
              className="w-10 h-10 object-contain"
            />
            <span className="font-display text-white text-lg">{DOCTOR.name}</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            Cirurgia bucomaxilofacial conduzida com precisão técnica,
            sensibilidade humana e foco em resultados duradouros.
          </p>
        </div>

        <div>
          <h4 className="font-display text-gold text-sm tracking-[0.25em] uppercase mb-5">Navegação</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#sintomas" className="hover:text-gold transition-colors">Sintomas</a></li>
            <li><a href="#especialidades" className="hover:text-gold transition-colors">Especialidades</a></li>
            <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre o doutor</a></li>
            <li><a href="#faq" className="hover:text-gold transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-gold text-sm tracking-[0.25em] uppercase mb-5">Contato</h4>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-gold text-navy-deep font-semibold text-sm mb-5 shadow-gold hover:scale-[1.03] transition-transform"
          >
            <i className="fa-brands fa-whatsapp text-lg" />
            Agendar Avaliação
          </a>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition-colors">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition-colors">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition-colors">
              <i className="fa-brands fa-whatsapp" />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <p>© {new Date().getFullYear()} {DOCTOR.name}. Todos os direitos reservados.</p>
        <p>{DOCTOR.cro} · {DOCTOR.rqe}</p>
      </div>
    </div>
  </footer>
);