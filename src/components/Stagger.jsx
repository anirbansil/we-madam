import { motion } from "framer-motion"
import { staggerContainer, variants } from "../lib/motion"

export function StaggerGroup({
  children,
  className = "",
  stagger = 0.14,
  delay = 0,
  once = true,
  amount = 0.2,
  as = "div",
}) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={staggerContainer(stagger, delay)}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerItem({
  children,
  className = "",
  variant = "fadeUp",
  as = "div",
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div
  const v = variants[variant] ?? variants.fadeUp
  return (
    <MotionTag className={className} variants={v} {...rest}>
      {children}
    </MotionTag>
  )
}
