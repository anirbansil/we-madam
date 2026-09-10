import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import SectionHeading from "../components/SectionHeading"
import { silk } from "../lib/motion"

const categories = [
  {
    label: "Starters & Snacks",
    items: [
      { name: "Mochar Chop", bengali: "মোচার চপ", veg: true, price: 180, desc: "Banana flower croquettes with green chili and peanuts, crumb-fried to golden perfection." },
      { name: "Beguni", bengali: "বেগুনি", veg: true, price: 120, desc: "Thinly sliced eggplant bathed in gram flour batter, deep-fried until crisp — a monsoon evening classic." },
      { name: "Fish Fry", bengali: "মাছের ফ্রাই", veg: false, price: 260, tag: "Signature", desc: "Bhetki fillet marinated in green chili and lime, coated in golden breadcrumbs — the iconic Kolkata street snack." },
      { name: "Aloor Dom", bengali: "আলুর দম", veg: true, price: 160, desc: "Baby potatoes simmered in a rich, spiced yogurt gravy — the beloved companion to luchis." },
    ],
  },
  {
    label: "Mutton & Chicken",
    items: [
      { name: "Kosha Mangsho", bengali: "কষা মাংস", veg: false, price: 420, tag: "Signature", desc: "Mutton slow-cooked for hours in mustard oil with whole spices until dark, thick, and luxurious." },
      { name: "Chicken Rezala", bengali: "রেজালা", veg: false, price: 340, desc: "Chicken simmered in a mild, creamy white gravy scented with cardamom and rosewater." },
      { name: "Mutton Biryani", bengali: "বিরিয়ানি", veg: false, price: 380, desc: "Fragrant long-grain rice layered with tender mutton, potato, and a whisper of saffron." },
      { name: "Chicken Kosha", bengali: "চিকেন কষা", veg: false, price: 300, desc: "Bone-in chicken, dry-roasted spices, and slow patience — an everyday Bengali favorite." },
    ],
  },
  {
    label: "Fish — The Heart of Bengal",
    items: [
      { name: "Shorshe Ilish", bengali: "সরষে ইলিশ", veg: false, price: 520, tag: "Seasonal", desc: "Hilsa fish in a sharp mustard and green chili gravy — the taste of monsoon in Bengal." },
      { name: "Bhapa Bhetki", bengali: "ভাপা ভেটকি", veg: false, price: 360, tag: "Signature", desc: "Silky Bhetki steamed in mustard, coconut, and green chili, wrapped in banana leaf." },
      { name: "Chingri Malai Curry", bengali: "চিংড়ি মালাইকারি", veg: false, price: 450, desc: "Plump prawns in a delicate coconut-milk curry, lightly spiced and deeply comforting." },
      { name: "Doi Maach", bengali: "দই মাছ", veg: false, price: 320, desc: "Fish simmered gently in a yogurt-based gravy — subtle, tangy, and wonderfully mild." },
    ],
  },
  {
    label: "Vegetarian Delights",
    items: [
      { name: "Shukto", bengali: "শুক্তো", veg: true, price: 180, desc: "A bittersweet medley of seasonal vegetables in a light milk-and-mustard gravy." },
      { name: "Dhokar Dalna", bengali: "ঢোকার ডালনা", veg: true, price: 220, desc: "Steamed lentil cakes simmered in a warm, spiced tomato gravy." },
      { name: "Chholar Dal", bengali: "ছোলার ডাল", veg: true, price: 150, desc: "Bengal gram cooked sweet-and-savory with coconut shavings and bay leaf." },
      { name: "Labra", bengali: "লাবড়া", veg: true, price: 170, desc: "A festive mixed-vegetable curry, slow-cooked the way pujo bhog is made." },
    ],
  },
  {
    label: "Mishti — Sweets",
    items: [
      { name: "Mishti Doi", bengali: "মিষ্টি দই", veg: true, price: 90, tag: "House Special", desc: "Sweet yogurt fermented overnight in earthen pots for a caramelized depth." },
      { name: "Rasgulla", bengali: "রসগোল্লা", veg: true, price: 80, desc: "Soft cottage-cheese balls in a light, fragrant sugar syrup." },
      { name: "Sandesh", bengali: "সন্দেশ", veg: true, price: 100, desc: "Delicately sweetened cottage cheese, shaped and finished by hand." },
      { name: "Payesh", bengali: "পায়েস", veg: true, price: 120, desc: "Slow-simmered rice pudding with jaggery, cardamom, and cashew." },
    ],
  },
]

function VegDot({ veg }) {
  return (
    <span
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 ${
        veg ? "border-veg-500" : "border-nonveg-500"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${veg ? "bg-veg-500" : "bg-nonveg-500"}`} />
    </span>
  )
}

export default function Menu() {
  const [active, setActive] = useState(0)

  return (
    <section id="menu" className="relative bg-ink-950 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-paper-texture opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="আমাদের মেনু"
          title="The Menu"
          tone="dark"
          subtitle="From the river's catch to the madam's own pot — a journey through the five flavors of Bengal."
          className="mb-12"
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setActive(i)}
              className={`group relative rounded-full px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                active === i
                  ? "bg-turmeric-500 text-ink-950 shadow-lg shadow-turmeric-500/20"
                  : "border border-ink-700 text-cream-200/70 hover:border-turmeric-500/50 hover:text-turmeric-400"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: silk }}
            className="grid gap-6 md:grid-cols-2"
          >
            {categories[active].items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: silk, delay: i * 0.08 }}
                className="group rounded-2xl border border-ink-800 bg-ink-900/60 p-6 transition-all duration-500 hover:border-turmeric-500/40 hover:bg-ink-900"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <VegDot veg={item.veg} />
                      <h3 className="font-display text-xl font-semibold text-cream-50 group-hover:text-turmeric-400 transition-colors">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="rounded-full bg-turmeric-500/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase text-turmeric-400 border border-turmeric-500/30">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="font-bengali text-spice-400 text-sm mb-2">
                      {item.bengali}
                    </p>
                    <p className="text-cream-200/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <p className="font-display text-2xl font-bold text-turmeric-400 whitespace-nowrap">
                    &#8377;{item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center">
          <p className="font-bengali text-spice-500/40 text-5xl">শুরু</p>
        </div>
      </div>
    </section>
  )
}
