import { ArrowRight } from "lucide-react"

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"

const variants = {
  solid:
    "bg-turmeric-500 text-ink-950 px-8 py-4 hover:scale-[1.04] hover:shadow-2xl hover:shadow-turmeric-500/30",
  outline:
    "border-2 border-cream-100/40 text-cream-100 px-8 py-4 hover:scale-[1.04] hover:border-cream-100 hover:bg-cream-100/10",
  outlineDark:
    "border-2 border-ink-800/30 text-ink-900 px-8 py-4 hover:scale-[1.04] hover:border-ink-900 hover:bg-ink-900/5",
  ghost:
    "bg-turmeric-500 text-ink-950 px-5 py-3 text-xs hover:bg-turmeric-300",
}

export default function Button({
  children,
  as = "a",
  variant = "solid",
  icon = true,
  className = "",
  ...rest
}) {
  const Tag = as
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span className="relative z-10 transition-transform duration-500 group-hover:-translate-x-0.5">
        {children}
      </span>
      {icon && (
        <ArrowRight
          size={16}
          className="relative z-10 -mr-1 transition-transform duration-500 group-hover:translate-x-1"
        />
      )}
    </Tag>
  )
}
