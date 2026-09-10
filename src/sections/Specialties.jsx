import { Fish, Flame, Soup, Cookie } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import Reveal from "../components/Reveal"

const dishes = [
  {
    icon: Fish,
    tag: "Seasonal · Monsoon",
    tagPos: "left",
    bengali: "সরষে ইলিশ",
    name: "Shorshe Ilish",
    desc: "The undisputed queen of Bengali cuisine. Hilsa fish bathed in a sharp mustard and green chili gravy, served with steamed rice — the taste of monsoon in Bengal.",
    img: "/images/dish-ilish.avif",
  },
  {
    icon: Flame,
    tag: "Sunday Classic",
    tagPos: "right",
    bengali: "কষা মাংস",
    name: "Kosha Mangsho",
    desc: "Mutton slow-cooked for hours in mustard oil with whole spices and caramelized onions until the gravy turns dark, thick, and deeply luxurious. Best with luchi or gorom bhat.",
    img: "/images/dish-mangsho.avif",
  },
  {
    icon: Soup,
    tag: "Chef's Pride",
    tagPos: "left",
    bengali: "ভাপা ভেটকি",
    name: "Bhapa Bhetki",
    desc: "Silky Bhetki steamed in a paste of mustard, coconut, and green chili, wrapped in banana leaf. Delicate, aromatic, and the very definition of Bengali finesse.",
    img: "/images/dish-bhetki.avif",
  },
  {
    icon: Cookie,
    tag: "House Special",
    tagPos: "right",
    bengali: "মিষ্টি দই",
    name: "Mishti Doi",
    desc: "Sweet yogurt fermented overnight in earthen pots, developing a caramelized depth that no modern container can replicate. The only way to end a meal, our madam's way.",
    img: "/images/dish-doi.avif",
  },
]

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="relative bg-cream-100 py-24 md:py-32 paper-grain overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="বিশেষ পদ"
          title="Signature Dishes"
          subtitle="Four plates that tell the story of Bengal — from river to kitchen, from festival to everyday comfort."
          className="mb-16"
        />

        <div className="space-y-20">
          {dishes.map((d, i) => {
            const flip = i % 2 === 1
            const Icon = d.icon
            return (
              <div
                key={d.name}
                className={`grid gap-8 md:gap-12 lg:grid-cols-2 items-center ${
                  flip ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal
                  variant={flip ? "fromRight" : "fromLeft"}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-ink-900/20">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      className="h-[360px] md:h-[420px] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 to-transparent" />
                  </div>
                  <div
                    className={`absolute top-4 ${
                      d.tagPos === "left" ? "left-4" : "right-4"
                    } bg-cream-50/95 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold tracking-wider uppercase text-spice-700 shadow-lg`}
                  >
                    {d.tag}
                  </div>
                </Reveal>

                <Reveal
                  variant={flip ? "fromLeft" : "fromRight"}
                  delay={0.12}
                  className={flip ? "lg:pr-8" : "lg:pl-8"}
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-spice-100 text-spice-600">
                    <Icon size={28} />
                  </div>
                  <p className="font-bengali text-spice-500 text-lg mb-1">
                    {d.bengali}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-ink-900 mb-4">
                    {d.name}
                  </h3>
                  <p className="text-ink-600 text-lg leading-relaxed">
                    {d.desc}
                  </p>
                  <div className="mt-6 h-px w-24 bg-gradient-to-r from-spice-400 to-transparent" />
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
