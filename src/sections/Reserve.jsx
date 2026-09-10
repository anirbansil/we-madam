import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, Users, CheckCircle2 } from "lucide-react"
import Reveal from "../components/Reveal"
import { silk } from "../lib/motion"

const guestOptions = ["1", "2", "3", "4", "5", "6", "7+"]

export default function Reserve() {
  const [guests, setGuests] = useState("2")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reserve" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/reserve-bg.avif"
          alt="Vintage restaurant interior"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink-950/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:py-32">
        <Reveal variant="fadeUp" className="text-center mb-12">
          <p className="font-bengali text-turmeric-400 text-lg mb-2">
            স্থান বুক করুন
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream-50 mb-4">
            Reserve Your Table
          </h2>
          <div className="ornament-divider w-48 mx-auto mb-4 text-turmeric-400">
            <span className="text-xl">&#10047;</span>
          </div>
          <p className="text-cream-200/70 max-w-xl mx-auto text-lg font-light">
            Come sit with us. Whether it&rsquo;s a Sunday lunch for the family
            or a quiet dinner for two &mdash; there&rsquo;s always a plate
            waiting.
          </p>
        </Reveal>

        <Reveal variant="scaleIn" delay={0.15}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: silk }}
                className="mx-auto max-w-2xl rounded-2xl border border-turmeric-500/30 bg-ink-900/70 backdrop-blur-md p-10 text-center"
              >
                <CheckCircle2 className="mx-auto mb-4 text-turmeric-400" size={48} />
                <h3 className="font-display text-2xl font-bold text-cream-50 mb-2">
                  Thank you, we&rsquo;ll see you soon
                </h3>
                <p className="text-cream-200/70">
                  Your table request has been noted. Our team will call to
                  confirm your reservation shortly.
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
                className="mx-auto max-w-2xl rounded-2xl border border-ink-700 bg-ink-900/70 backdrop-blur-md p-8 md:p-10"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold tracking-wide text-cream-200/80">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-lg border border-ink-600 bg-ink-950/50 px-4 py-3 text-cream-50 placeholder-cream-200/30 transition-colors focus:border-turmeric-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold tracking-wide text-cream-200/80">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full rounded-lg border border-ink-600 bg-ink-950/50 px-4 py-3 text-cream-50 placeholder-cream-200/30 transition-colors focus:border-turmeric-500 focus:outline-none"
                      placeholder="+91 98XXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="mb-2 flex items-center text-sm font-semibold tracking-wide text-cream-200/80">
                      <Calendar size={14} className="mr-1.5" /> Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full rounded-lg border border-ink-600 bg-ink-950/50 px-4 py-3 text-cream-50 transition-colors focus:border-turmeric-500 focus:outline-none [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 flex items-center text-sm font-semibold tracking-wide text-cream-200/80">
                      <Clock size={14} className="mr-1.5" /> Time
                    </label>
                    <select
                      name="time"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-ink-600 bg-ink-950/50 px-4 py-3 text-cream-50 transition-colors focus:border-turmeric-500 focus:outline-none"
                    >
                      <option value="" disabled>
                        Select time
                      </option>
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="19:00">7:00 PM (Dinner)</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 flex items-center text-sm font-semibold tracking-wide text-cream-200/80">
                      <Users size={14} className="mr-1.5" /> Number of Guests
                    </label>
                    <div className="flex gap-3 flex-wrap">
                      {guestOptions.map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setGuests(g)}
                          className={`h-12 w-12 rounded-lg border font-semibold transition-all duration-300 ${
                            guests === g
                              ? "border-turmeric-500 bg-turmeric-500 text-ink-950 scale-105"
                              : "border-ink-600 text-cream-200/70 hover:border-turmeric-500/50"
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold tracking-wide text-cream-200/80">
                      Special Requests (optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      className="w-full rounded-lg border border-ink-600 bg-ink-950/50 px-4 py-3 text-cream-50 placeholder-cream-200/30 transition-colors focus:border-turmeric-500 focus:outline-none resize-none"
                      placeholder="Birthday celebration, dietary preferences, seating requests..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full rounded-full bg-turmeric-500 px-8 py-4 text-sm font-bold tracking-wider uppercase text-ink-950 transition-all duration-300 hover:bg-turmeric-400 hover:scale-[1.02] hover:shadow-2xl hover:shadow-turmeric-500/30"
                >
                  Confirm Reservation
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
