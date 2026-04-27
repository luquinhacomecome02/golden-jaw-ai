import { SectionTitle } from "./SectionTitle";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

const photos = [
  { src: g1, alt: "Equipe cirúrgica em procedimento bucomaxilofacial" },
  { src: g2, alt: "Cirurgia bucomaxilofacial com equipamentos de precisão" },
  { src: g3, alt: "Centro cirúrgico moderno durante procedimento" },
  { src: g4, alt: "Dr. Odeni Woelbert em procedimento clínico" },
  { src: g5, alt: "Procedimento cirúrgico com tecnologia avançada" },
];

export const Gallery = () => (
  <section id="galeria" className="py-24 sm:py-32 bg-secondary">
    <div className="container">
      <SectionTitle
        eyebrow="Galeria"
        title={
          <>
            Excelência em <em className="text-gradient-gold not-italic">cada detalhe</em>
          </>
        }
        description="Atendimento humanizado, tecnologia e precisão em cada procedimento."
      />

      <div className="reveal mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {photos.map((p, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl shadow-soft border border-border bg-card aspect-square"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);