interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}

export const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
}: Props) => (
  <div
    className={`reveal max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {eyebrow && (
      <p
        className={`inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase mb-4 ${
          invert ? "text-gold" : "text-gold-dark"
        }`}
      >
        <span className="w-8 h-px bg-gold" />
        {eyebrow}
      </p>
    )}
    <h2
      className={`font-display text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 sm:mb-5 ${
        invert ? "text-white" : "text-navy"
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`text-base sm:text-lg leading-relaxed ${
          invert ? "text-white/75" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>
    )}
  </div>
);