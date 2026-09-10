import { motion } from "framer-motion"
import { variants } from "../lib/motion"

/**
 * Generic viewport-triggered reveal. `as` lets the variant apply to any
 * element (div, span, h2...) while keeping the animation logic centralized.
 */
export default function Reveal({
  children,
  variant = "fadeUp",
  className = "",
  delay = 0,
  once = true,
  amount = 0.25,
  as = "div",
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div
  const v = variants[variant] ?? variants.fadeUp

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={v}
      transition={{ ...v.show.transition, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
