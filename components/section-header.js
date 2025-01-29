import clsx from "clsx"
import * as motion from "motion/react-client"

const SectionHeader = ({ title, clx }) => {

  return (
    <motion.h2
      className={
        clsx(
          "section-heading",
          clx
        )
      }
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {title}
    </motion.h2>
  )
}

export default SectionHeader