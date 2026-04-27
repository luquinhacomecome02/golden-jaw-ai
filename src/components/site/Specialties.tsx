import { SectionTitle } from "./SectionTitle";
import { WHATSAPP_URL } from "@/lib/site";

const specialties = [
  {
    icon: "fa-tooth",
    title: "Cirurgia Ortognática",
    desc: "Correção cirúrgica de deformidades faciais e desalinhamentos da mandíbula, integrando estética e função.",
    points: ["Planejamento 3D", "Recuperação acelerada", "Acompanhamento ortodôntico"],
  },
  {
    icon: "fa-screwdriver-wrench",
    title: "Implantes Dentários",
    desc: "Reabilitação completa com implantes osseointegrados — soluções de carga imediata e protocolos avançados.",
    points: ["All-on-4 / All-on-6", "Enxertos ósseos", "Estética digital"],
  },
  {
    icon: "fa-brain",
    title: "Disfunção da ATM",
    desc: "Diagnóstico e tratamento de dores e disfunções da articulação temporomandibular com abordagem multidisciplinar.",
    points: ["Análise funcional", "Placas oclusais", "Cirurgia minimamente invasiva"],
  },
  {
    icon: "fa-tooth",
    title: "Cirurgia de Sisos",
    desc: "Extração de terceiros molares com técnicas modernas, sedação consciente e pós-operatório confortável.",
    points: ["Sedação opcional", "Suturas reabsorvíveis", "Retorno rápido"],
  },
  {
    icon: "fa-bone",
    title: "Traumatologia Facial",
    desc: "Tratamento de fraturas e lesões da face com técnicas reconstrutivas precisas e estética preservada.",
    points: ["Atendimento de urgência", "Reconstrução estética", "Reabilitação funcional"],
  },
  {
    icon: "fa-stethoscope",
    title: "Patologia Bucal",
    desc: "Diagnóstico, biópsia e remoção de lesões da cavidade bucal com acompanhamento histopatológico.",
    points: ["Biópsias guiadas", "Diagnóstico precoce", "Acompanhamento oncológico"],
  },
];

export const Specialties = () => (
  <section id="especialidades" className="py-20 sm:py-32 bg-navy-deep relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--gold)/0.08),transparent_60%)]" />
    <div className="container relative">
      <SectionTitle
        invert
        eyebrow="Especialidades"
        title={<>Procedimentos com <em className="text-gradient-gold not-italic">excelência clínica</em></>}
        description="Cada procedimento é planejado individualmente, com tecnologia de ponta e foco em resultados duradouros."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-16">
        {specialties.map((s, i) => (
          <div
            key={s.title}
            className="reveal hover-lift group relative bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-gold/40 hover:bg-white/[0.07] transition-colors duration-500"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-gold text-navy-deep grid place-items-center text-xl sm:text-2xl mb-4 sm:mb-5 shadow-gold">
              <i className={`fa-solid ${s.icon}`} />
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-white mb-3">{s.title}</h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-5">{s.desc}</p>
            <ul className="space-y-2 mb-6">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-white/80">
                  <i className="fa-solid fa-check text-gold text-xs" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all"
            >
              Saber mais <i className="fa-solid fa-arrow-right text-xs" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);