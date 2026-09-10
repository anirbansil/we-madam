import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { StaggerGroup, StaggerItem } from "../components/Stagger"

const items = [
  {
    img: "/images/gallery-thali.avif",
    alt: "A generous homestyle thali",
    span: "lg:col-span-2 lg:row-span-2",
  },
  { img: "/images/gallery-biryani.avif", alt: "Chicken biryani in a brass bowl" },
  { img: "/images/gallery-dal.avif", alt: "Dal makhani with a cream swirl" },
  { img: "/images/gallery-sweet.avif", alt: "Gulab jamun in a steel pot" },
  {
    img: "/images/gallery-city.avif",
    alt: "Colonial-era buildings of Kolkata",
    span: "lg:col-span-2",
  },
  { img: "/images/gallery-meal.avif", alt: "A traditional meal with rice and spices" },
  { img: "/images/dish-doi.avif", alt: "Mishti doi, made the old way" },
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative bg-ink-950 py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="আমাদের জগৎ"
          title="A Glimpse Inside"
          tone="dark"
          subtitle="The colors of our kitchen, the streets that raised us, and the plates that carry our story."
          className="mb-16"
        />

        <StaggerGroup
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[200px]"
          stagger={0.08}
        >
          {items.map((it) => (
            <StaggerItem
              key={it.img + it.alt}
              variant="scaleIn"
              className={`group relative overflow-hidden rounded-xl ${it.span ?? ""}`}
            >
              <img
                src={it.img}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full min-h-[200px] object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink-950/0 transition-all duration-500 group-hover:bg-ink-950/30" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-cream-50 text-sm font-medium tracking-wide">
                  {it.alt}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-12 flex justify-center">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 rounded-full border border-turmeric-400/50 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-turmeric-400 transition-all duration-300 hover:bg-turmeric-400 hover:text-ink-950"
          >
            View Full Gallery
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
