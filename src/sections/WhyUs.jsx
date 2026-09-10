import { Leaf, Clock, ChefHat, Heart, Award, Users } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { StaggerGroup, StaggerItem } from "../components/Stagger"

const reasons = [
  {
    icon: Leaf,
    title: "Fresh, Local Ingredients",
    desc: "Fish from the morning market, vegetables from the local bazaar, mustard oil pressed in-house. We never compromise on what goes into the pot.",
  },
  {
    icon: Clock,
    title: "Slow-Cooked, Never Rushed",
    desc: "Our kosha mangsho simmers for hours. Our mishti doi ferments overnight. Heritage flavor demands patience, and we give it freely.",
  },
  {
    icon: ChefHat,
    title: "Recipes from Real Kitchens",
    desc: "Every recipe traces back to a home cook's own notebook — handwritten, well-used, and never altered. The taste of real lineage.",
  },
  {
    icon: Heart,
    title: "Cooked with Love",
    desc: "We are not a factory. We are a home. Every plate is made to order, seasoned by hand, and served with genuine warmth.",
  },
  {
    icon: Award,
    title: "Trusted Hospitality Group",
    desc: "As a unit of UUC Hospitality, we bring the same care across our kitchen, café, banquet hall, and turf — one standard, every time.",
  },
  {
    icon: Users,
    title: "Space for Every Occasion",
    desc: "From a solo cup of cha to a 120-guest celebration — our café and banquet hall hold room for every chapter of your story.",
  },
]

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative bg-cream-100 py-24 md:py-32 paper-grain overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="কেন আমরা"
          title="Why Choose Us"
          subtitle="Reasons why families across Kolkata trust us with their meals — and their memories."
          className="mb-16"
        />

        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <StaggerItem
                key={r.title}
                variant="fadeUp"
                className="group rounded-2xl border border-spice-200/50 bg-cream-50 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-ink-900/5 hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-spice-100 text-spice-600 transition-all duration-300 group-hover:bg-spice-600 group-hover:text-cream-50 group-hover:rotate-6">
                  <Icon size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink-900 mb-3">
                  {r.title}
                </h3>
                <p className="text-ink-600 leading-relaxed">{r.desc}</p>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
