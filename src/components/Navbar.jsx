import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { premium } from "../lib/motion"

const links = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/#story" },
  { label: "Menu", to: "/#menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const solid = scrolled || open

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-ink-950/95 py-3 shadow-2xl shadow-black/40 backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="We Madam logo"
            className={`w-auto object-contain transition-all duration-500 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] ${
              solid ? "h-11" : "h-14"
            }`}
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wider uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-turmeric-400 after:transition-all after:duration-300 hover:after:w-full ${
                    isActive
                      ? "text-turmeric-400 after:w-full"
                      : "text-cream-100/80 hover:text-turmeric-400"
                  }`
                }
                end={l.to === "/"}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden items-center rounded-full border border-turmeric-400/60 px-6 py-2.5 text-sm font-semibold tracking-wider uppercase text-turmeric-400 transition hover:scale-105 hover:bg-turmeric-400 hover:text-ink-950 xl:inline-flex"
        >
          Book a Table
        </Link>

        <button
          className="text-cream-100 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="block"
              >
                <X size={28} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="block"
              >
                <Menu size={28} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: premium }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mt-4 flex flex-col gap-1 bg-ink-950/98 px-6 pb-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.35 }}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `block border-b border-ink-700/50 py-3 text-base font-medium tracking-wider uppercase ${
                        isActive ? "text-turmeric-400" : "text-cream-100/80"
                      }`
                    }
                    end={l.to === "/"}
                  >
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * links.length, duration: 0.35 }}
                className="pt-3"
              >
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-turmeric-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-ink-950"
                >
                  Book a Table
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
