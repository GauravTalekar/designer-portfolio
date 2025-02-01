import { LazyMotion, domAnimation } from "motion/react"
import * as m from "motion/react-m"
import Image from "next/image"


const MasonaryItem = ({ img }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="group relative overflow-hidden rounded-xl mt-4 shadow-md hover:shadow-lg"
      >

        <Image
          className="hover:opacity-80 cursor-pointer rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          loading="lazy"
        />
        <div className="absolute rounded-xl inset-0 bg-cerise-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <h3 className="text-dull-lavender-50 text-xl font-montserrat font-semibold uppercase">
            {img.title}
          </h3>
        </div>
      </m.div>
    </LazyMotion>
  )
}

export default MasonaryItem