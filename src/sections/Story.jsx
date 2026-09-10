import Reveal from "../components/Reveal"

export default function Story() {
  return (
    <section
      id="story"
      className="relative bg-cream-100 py-24 md:py-32 paper-grain overflow-hidden"
    >
      <div className="absolute top-8 left-8 font-bengali text-spice-300/30 text-7xl select-none">
        মা
      </div>
      <div className="absolute bottom-8 right-8 font-bengali text-spice-300/30 text-7xl select-none">
        দ
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 grid gap-12 md:gap-16 lg:grid-cols-2 items-center">
        <Reveal variant="imageZoomIn" className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-ink-900/30">
            <img
              src="/images/story-kolkata.avif"
              alt="Kolkata's yellow taxi in front of a heritage building"
              className="h-[480px] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
          </div>
          <Reveal
            variant="scaleIn"
            delay={0.4}
            className="absolute -bottom-6 -right-4 md:-right-8 bg-ink-950 rounded-2xl px-8 py-6 shadow-xl border border-turmeric-500/20"
          >
            <p className="font-display text-4xl font-bold text-turmeric-400">
              Ghar
            </p>
            <p className="text-cream-200 text-xs tracking-widest uppercase mt-1">
              The taste of
              <br />
              home
            </p>
          </Reveal>
        </Reveal>

        <div>
          <Reveal variant="fadeUpSm" as="p" className="font-bengali text-spice-600 text-lg mb-2">
            আমাদের গল্প
          </Reveal>
          <Reveal
            variant="maskUp"
            delay={0.08}
            as="h2"
            className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-6 leading-tight"
          >
            A Story Cooked in <em className="text-spice-600">Memories</em>
          </Reveal>
          <div className="space-y-5 text-ink-700 text-lg leading-relaxed">
            <Reveal variant="fadeUp" delay={0.15} as="p">
              It began with a simple idea &mdash; no one cooks quite like your
              madam. Every recipe at We Madam is drawn from real kitchens:
              mustard oil crackling at just the right temperature, fish
              chosen at dawn, and the kind of patience that only home cooking
              understands.
            </Reveal>
            <Reveal variant="fadeUp" delay={0.24} as="p">
              As a unit of UUC Hospitality, we still cook the slow way. The
              kosha mangsho simmers for hours. The mishti doi ferments
              overnight in earthen pots. Nothing is rushed, because memory
              cannot be.
            </Reveal>
            <Reveal variant="fadeUp" delay={0.33} as="p">
              We are not a restaurant. We are a <em>ghar</em> &mdash; a home
              &mdash; where every plate carries the weight of a Sunday lunch,
              the laughter of a joint family, and the quiet pride of a
              cuisine that was always meant to be shared.
            </Reveal>
          </div>
          <Reveal variant="fade" delay={0.4} className="mt-8 flex items-center gap-6">
            <div className="h-px flex-1 bg-spice-300/40" />
            <span className="font-bengali text-spice-500 text-xl">বাড়ি</span>
            <span className="text-ink-500 text-sm tracking-widest uppercase">Home</span>
            <div className="h-px flex-1 bg-spice-300/40" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
