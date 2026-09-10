import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SectionHeading from "../components/SectionHeading"
import Reveal from "../components/Reveal"
import { StaggerGroup, StaggerItem } from "../components/Stagger"
import { silk } from "../lib/motion"

const photos = [
  { img: "/images/hero-feast.avif", alt: "A generous Bengali feast on banana leaf", cat: "Food" },
  { img: "/images/gallery-thali.avif", alt: "A homestyle thali", cat: "Food" },
  { img: "/images/gallery-biryani.avif", alt: "Chicken biryani in a brass bowl", cat: "Food" },
  { img: "/images/gallery-dal.avif", alt: "Dal makhani with a cream swirl", cat: "Food" },
  { img: "/images/gallery-sweet.avif", alt: "Gulab jamun in a steel pot", cat: "Food" },
  { img: "/images/gallery-meal.avif", alt: "A traditional meal with rice and spices", cat: "Food" },
  { img: "/images/dish-ilish.avif", alt: "Shorshe Ilish", cat: "Food" },
  { img: "/images/dish-mangsho.avif", alt: "Kosha Mangsho", cat: "Food" },
  { img: "/images/dish-bhetki.avif", alt: "Bhapa Bhetki", cat: "Food" },
  { img: "/images/dish-doi.avif", alt: "Mishti Doi", cat: "Food" },
  { img: "/images/story-kolkata.avif", alt: "Kolkata's yellow taxi", cat: "Kolkata" },
  { img: "/images/gallery-city.avif", alt: "Colonial-era buildings of Kolkata", cat: "Kolkata" },
  { img: "/images/unit-restaurant.avif", alt: "Inside We Madam Kitchen", cat: "Spaces" },
  { img: "/images/unit-cafe.avif", alt: "Café Firefly storefront", cat: "Spaces" },
  { img: "/images/unit-banquet.avif", alt: "Our banquet hall", cat: "Spaces" },
  { img: "/images/unit-catering.avif", alt: "The turf, lit up at night", cat: "Spaces" },
]

const cats = ["All", "Food", "Kolkata", "Spaces"]

export default function GalleryPage() {
  const [filter, setFilter] = useState("All")
  const visible = filter === "All" ? photos : photos.filter((p) => p.cat === filter)

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/gallery-thali.avif"
            alt="A homestyle thali"
            className="h-full w-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/60 to-ink-950" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <Reveal variant="fadeUpSm" as="p" className="font-bengali text-turmeric-400 text-lg mb-2">
            আমাদের জগৎ
          </Reveal>
          <Reveal variant="maskUp" delay={0.1} as="h1" className="font-display text-5xl md:text-7xl font-bold text-cream-50">
            A Glimpse Inside
          </Reveal>
        </div>
      </section>

      <section className="relative bg-ink-950 pb-24 md:pb-32 pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                  filter === c
                    ? "bg-turmeric-500 text-ink-950 shadow-lg shadow-turmeric-500/20"
                    : "border border-ink-700 text-cream-200/70 hover:border-turmeric-500/50 hover:text-turmeric-400"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <StaggerGroup
              key={filter}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              stagger={0.06}
            >
              {visible.map((p) => (
                <StaggerItem
                  key={p.img + p.alt}
                  variant="scaleIn"
                  className="group relative aspect-[4/5] overflow-hidden rounded-xl"
                >
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink-950/0 transition-all duration-500 group-hover:bg-ink-950/30" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-cream-50 text-sm font-medium tracking-wide">
                      {p.alt}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
