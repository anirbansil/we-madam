import { ArrowUpRight } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { StaggerGroup, StaggerItem } from "../components/Stagger"

const units = [
  {
    tag: "Homestyle Kitchen",
    title: "We Madam",
    desc: "Heritage thalis, soulful curries, and the warmth of a Bengali home, plated fresh every single day.",
    img: "/images/unit-restaurant.avif",
    cta: "View Menu",
    href: "#menu",
  },
  {
    tag: "All-Day Café",
    title: "Café Firefly",
    desc: "Slow mornings, fragrant cha, quiet corners, and easy-going adda under warm light.",
    img: "/images/unit-cafe.avif",
    cta: "Enquire Now",
    href: "/contact",
  },
  {
    tag: "Celebrations",
    title: "Banquet Hall",
    desc: "Chandeliers, thoughtful service, and feasts made for weddings, receptions, and milestones.",
    img: "/images/unit-banquet.avif",
    cta: "Enquire Now",
    href: "/contact",
  },
  {
    tag: "Nights Under Lights",
    title: "Turf & Game Zone",
    desc: "Play under floodlights, compete with friends, and make your own match day.",
    img: "/images/unit-catering.avif",
    cta: "Enquire Now",
    href: "/contact",
  },
]

export default function Units() {
  return (
    <section
      id="units"
      className="relative bg-ink-950 py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-paper-texture opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="আমাদের পরিবার"
          title="One Family, Four Rooms"
          tone="dark"
          subtitle="From a slow cup of cha to a full-scale celebration or a match-day turf night — there is room for every kind of joy."
          className="mb-14"
        />

        <StaggerGroup className="grid gap-6 sm:grid-cols-2" stagger={0.12}>
          {units.map((u) => (
            <StaggerItem key={u.title} variant="fadeUp">
              <article className="group relative min-h-[340px] overflow-hidden rounded-2xl border border-ink-700">
                <img
                  src={u.img}
                  alt={u.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/65 to-transparent" />
                <div className="relative flex h-full min-h-[340px] flex-col justify-end p-7 md:p-9">
                  <p className="font-bengali text-turmeric-300 text-sm transition-transform duration-500 group-hover:-translate-y-1">
                    {u.tag}
                  </p>
                  <h3 className="mt-1 font-display text-3xl font-bold text-cream-50 transition-transform duration-500 group-hover:-translate-y-1">
                    {u.title}
                  </h3>
                  <p className="mt-2 max-w-md text-cream-200/75 leading-relaxed">
                    {u.desc}
                  </p>
                  <a
                    href={u.href}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-turmeric-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-ink-950 transition-all duration-300 hover:bg-turmeric-300 hover:gap-3"
                  >
                    {u.cta}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
