import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * On route change: scroll to top for a plain path, or smooth-scroll to the
 * matching section when a hash like "/#menu" is used from another page.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        const t = setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80)
        return () => clearTimeout(t)
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" })
    }
  }, [pathname, hash])

  return null
}
