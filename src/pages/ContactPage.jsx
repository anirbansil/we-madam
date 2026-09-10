import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react"
import Reveal from "../components/Reveal"
import { silk } from "../lib/motion"

const info = [
  { icon: MapPin, title: "Address", lines: ["42 College Street, College Square", "Kolkata, West Bengal 700012"] },
  { icon: Phone, title: "Phone", lines: ["+91 33 2241 1962", "+91 98300 12345"] },
  { icon: Mail, title: "Email", lines: ["hello@wemadam.in"] },
  { icon: Clock, title: "Hours", lines: ["Mon – Fri: 12:00 PM – 10:30 PM", "Sat – Sun: 11:30 AM – 11:00 PM"] },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/story-kolkata.avif"
            alt="Kolkata's yellow taxi in front of a heritage building"
            className="h-full w-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/75 via-ink-950/65 to-ink-950" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <Reveal variant="fadeUpSm" as="p" className="font-bengali text-turmeric-400 text-lg mb-2">
            যোগাযোগ করুন
          </Reveal>
          <Reveal variant="maskUp" delay={0.1} as="h1" className="font-display text-5xl md:text-7xl font-bold text-cream-50">
            Contact Us
          </Reveal>
          <Reveal variant="fadeUp" delay={0.25} as="p" className="mt-4 max-w-xl text-cream-200/70 text-lg font-light">
            Questions about a reservation, a celebration, or a franchise
            enquiry? We&rsquo;d love to hear from you.
          </Reveal>
        </div>
      </section>

      <section className="relative bg-cream-100 py-24 md:py-32 paper-grain overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-5">
          <Reveal variant="fromLeft" className="lg:col-span-2 flex flex-col gap-5">
            {info.map((it) => {
              const Icon = it.icon
              return (
                <div
                  key={it.title}
                  className="flex items-start gap-4 rounded-2xl border border-spice-200/50 bg-cream-50 p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-spice-100 text-spice-600">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-ink-900 mb-1">
                      {it.title}
                    </h4>
                    {it.lines.map((l) => (
                      <p key={l} className="text-ink-600 text-sm leading-relaxed">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </Reveal>

          <Reveal variant="fromRight" delay={0.1} className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: silk }}
                  className="flex h-full flex-col items-center justify-center rounded-2xl border border-spice-200/50 bg-cream-50 p-10 text-center shadow-lg shadow-ink-900/5"
                >
                  <CheckCircle2 className="mb-4 text-spice-600" size={48} />
                  <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">
                    Message sent
                  </h3>
                  <p className="text-ink-600">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-spice-200/50 bg-cream-50 p-8 md:p-10 shadow-lg shadow-ink-900/5"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-lg border border-spice-200 bg-cream-100 px-4 py-3 text-ink-900 placeholder-ink-400 transition-colors focus:border-spice-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98XXX XXXXX"
                        className="w-full rounded-lg border border-spice-200 bg-cream-100 px-4 py-3 text-ink-900 placeholder-ink-400 transition-colors focus:border-spice-500 focus:outline-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-700">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-spice-200 bg-cream-100 px-4 py-3 text-ink-900 placeholder-ink-400 transition-colors focus:border-spice-500 focus:outline-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-700">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us how we can help..."
                        className="w-full rounded-lg border border-spice-200 bg-cream-100 px-4 py-3 text-ink-900 placeholder-ink-400 transition-colors focus:border-spice-500 focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-8 w-full rounded-full bg-spice-600 px-8 py-4 text-sm font-bold tracking-wider uppercase text-cream-50 transition-all duration-300 hover:bg-spice-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-spice-600/30"
                  >
                    Send Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>
    </>
  )
}
