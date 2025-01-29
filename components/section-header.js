import clsx from "clsx"
import { LazyMotion, domAnimation } from "motion/react"
import * as m from "motion/react-m"

const SectionHeader = ({ title, clx }) => {

  return (
    <LazyMotion features={domAnimation}>
      <m.h2
        className={
          clsx(
            "section-heading",
            clx
          )
        }
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {title}
      </m.h2>
    </LazyMotion>
  )
}

export default SectionHeader