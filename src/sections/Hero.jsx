import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Button from "../components/Button"
import { premium } from "../lib/motion"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: premium } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.img
          src="/images/hero-feast.avif"
          alt="Generous Bengali feast served on a banana leaf"
          className="h-full w-full object-cover animate-slow-zoom"
          initial={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/50 to-ink-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 to-transparent" />
      </div>

      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-turmeric-500 to-transparent"
        initial={{ opacity: 0, scaleX: 0.3 }}
        animate={{ opacity: 0.6, scaleX: 1 }}
        transition={{ duration: 1.6, ease: premium, delay: 0.2 }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-24 text-center"
      >
        <motion.div variants={item}>
          <p className="mb-3 font-bengali text-lg tracking-wide text-turmeric-400">
            মায়ের হাতের স্বাদ
          </p>
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-cream-200">
            Homestyle Kitchen &middot; Kolkata
          </p>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-6xl font-bold leading-none text-cream-50 text-shadow-lg sm:text-7xl md:text-8xl lg:text-9xl"
        >
          We Madam
        </motion.h1>

        <motion.div variants={item} className="ornament-divider my-8 w-64 text-turmeric-400">
          <span className="text-2xl">&#10047;</span>
        </motion.div>

        <motion.p
          variants={item}
          className="max-w-2xl text-lg font-light leading-relaxed text-cream-100/90 text-shadow-md md:text-xl"
        >
          A homestyle Bengali kitchen where heritage recipes meet the warmth
          of a madam&rsquo;s own ghar. Every dish is a memory &mdash; of
          monsoon afternoons, Sunday lunches, and the quiet joy of sharing
          a meal.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button as="a" href="#menu" variant="solid">
            Explore the Menu
          </Button>
          <Button as="a" href="/contact" variant="outline" icon={false}>
            Reserve a Table
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <ArrowDown className="text-cream-100/60" size={32} />
      </motion.div>
    </section>
  )
}
