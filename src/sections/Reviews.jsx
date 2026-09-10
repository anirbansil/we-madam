import { Quote, Star } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { StaggerGroup, StaggerItem } from "../components/Stagger"

const reviews = [
  {
    quote: "The Shorshe Ilish transported me straight to my Didima's kitchen. I closed my eyes and I was seven again, sitting on the floor, eating with my fingers. This is not food — this is time travel.",
    name: "Anindita Roy",
    place: "Salt Lake, Kolkata",
  },
  {
    quote: "I flew in and came directly here from the airport. The kosha mangsho tasted exactly like my mother used to make on Sundays. Not a single compromise.",
    name: "Pradip Chatterjee",
    place: "London, UK",
  },
  {
    quote: "My family has been coming here for years. My grandmother celebrated her 80th birthday here, and the staff brought out mishti doi with a candle. They are family.",
    name: "Ishita Banerjee",
    place: "Ballygunge, Kolkata",
  },
]

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative bg-cream-100 py-24 md:py-32 paper-grain overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="মুখের স্বাদ"
          title="Words from Our Family"
          className="mb-16"
        />

        <StaggerGroup className="grid gap-8 md:grid-cols-3" stagger={0.15}>
          {reviews.map((r) => (
            <StaggerItem
              key={r.name}
              variant="fadeUp"
              className="relative rounded-2xl bg-cream-50 border border-spice-200/50 p-8 shadow-lg shadow-ink-900/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <Quote size={36} className="text-spice-300 mb-4" fill="currentColor" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-turmeric-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-ink-700 text-lg leading-relaxed italic mb-6">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-spice-200/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-spice-600 text-cream-50 font-display font-bold text-lg">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-ink-900">{r.name}</p>
                  <p className="text-sm text-ink-500">{r.place}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
