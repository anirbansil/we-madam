import { MapPin, Phone, Clock, TramFront, Car } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import Reveal from "../components/Reveal"

export default function Location() {
  return (
    <section
      id="location"
      className="relative bg-cream-100 py-24 md:py-32 paper-grain overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="আমাদের ঠিকানা"
          title="Find Us"
          subtitle="In the heart of Kolkata, easy to reach and easier to fall in love with."
          className="mb-16"
        />

        <div className="grid gap-8 lg:grid-cols-5 items-stretch">
          <Reveal
            variant="maskReveal"
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-2xl shadow-ink-900/20 min-h-[400px]"
          >
            <iframe
              title="We Madam Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=88.3620%2C22.5700%2C88.3780%2C22.5800&layer=mapnik&marker=22.5749%2C88.3700"
              className="h-full w-full min-h-[400px] border-0"
              loading="lazy"
            />
          </Reveal>

          <Reveal
            variant="fromRight"
            delay={0.15}
            className="lg:col-span-2 flex flex-col justify-center rounded-2xl bg-ink-950 p-8 md:p-10 text-cream-100"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-turmeric-500/20 text-turmeric-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-cream-50 mb-1">
                    Address
                  </h4>
                  <p className="text-cream-200/70 text-sm leading-relaxed">
                    42 College Street, College Square
                    <br />
                    Kolkata, West Bengal 700012
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-turmeric-500/20 text-turmeric-400">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-cream-50 mb-1">
                    Phone
                  </h4>
                  <p className="text-cream-200/70 text-sm">+91 33 2241 1962</p>
                  <p className="text-cream-200/70 text-sm">+91 98300 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-turmeric-500/20 text-turmeric-400">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-cream-50 mb-1">
                    Hours
                  </h4>
                  <p className="text-cream-200/70 text-sm">
                    Mon &ndash; Fri: 12:00 PM &ndash; 10:30 PM
                  </p>
                  <p className="text-cream-200/70 text-sm">
                    Sat &ndash; Sun: 11:30 AM &ndash; 11:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-turmeric-500/20 text-turmeric-400">
                  <TramFront size={22} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-cream-50 mb-1">
                    Getting Here
                  </h4>
                  <p className="text-cream-200/70 text-sm">
                    5 min walk from MG Road Metro
                    <br />
                    <Car size={14} className="inline mr-1" />
                    Valet parking available evenings
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://www.openstreetmap.org/?mlat=22.5749&mlon=88.3700#map=16/22.5749/88.3700"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-turmeric-500 px-6 py-3 text-sm font-bold tracking-wider uppercase text-ink-950 transition-all duration-300 hover:bg-turmeric-400 hover:scale-105"
            >
              Get Directions
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
