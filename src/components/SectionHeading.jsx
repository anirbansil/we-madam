import Reveal from "./Reveal"

/**
 * eyebrow (Bengali) -> heading -> ornament -> subtitle, each revealing in
 * sequence with a short delay stagger, matching the reference's rhythm of
 * "eyebrow fades/slides in, heading reveals, paragraph follows slightly after".
 */
export default function SectionHeading({
  eyebrow,
  eyebrowEn,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className = "",
}) {
  const isDark = tone === "dark"
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center mx-auto"

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <Reveal variant="fadeUpSm" as="p" className={`font-bengali text-lg mb-2 ${isDark ? "text-turmeric-400" : "text-spice-600"}`}>
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        variant="maskUp"
        as="h2"
        delay={0.08}
        className={`font-display text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-cream-50" : "text-ink-900"}`}
      >
        {title}
      </Reveal>
      <Reveal variant="fade" delay={0.25} as="div" className={`ornament-divider w-40 mb-4 ${isDark ? "text-turmeric-400" : "text-spice-500"}`}>
        <span className="text-xl">&#10047;</span>
      </Reveal>
      {subtitle && (
        <Reveal
          variant="fadeUp"
          delay={0.3}
          as="p"
          className={`max-w-2xl text-lg font-light leading-relaxed ${
            align === "left" ? "" : "mx-auto"
          } ${isDark ? "text-cream-200/70" : "text-ink-600"}`}
        >
          {subtitle}
        </Reveal>
      )}
      {eyebrowEn && (
        <span className="sr-only">{eyebrowEn}</span>
      )}
    </div>
  )
}
