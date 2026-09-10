export const silk = [0.16, 1, 0.3, 1]
export const premium = [0.22, 1, 0.36, 1]

// A library of distinct entrance behaviors so sections don't all move the same way.
export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 46 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: silk } },
  },
  fadeUpSm: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: silk } },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.1, ease: silk } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1, transition: { duration: 1, ease: premium } },
  },
  fromLeft: {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: silk } },
  },
  fromRight: {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: silk } },
  },
  maskUp: {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.4 },
    show: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: { duration: 1.1, ease: premium },
    },
  },
  maskReveal: {
    hidden: { clipPath: "inset(0% 0% 0% 100%)" },
    show: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1.2, ease: premium },
    },
  },
  imageZoomIn: {
    hidden: { opacity: 0, scale: 1.18, filter: "blur(8px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.3, ease: premium },
    },
  },
}

export const staggerContainer = (stagger = 0.14, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})
