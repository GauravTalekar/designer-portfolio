import Image from "next/image"
import Link from "next/link"
import { LazyMotion, domAnimation } from "motion/react"
import * as m from "motion/react-m"

const ProjectCard = ({ src, alt, title, link }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.li
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="group relative overflow-hidden rounded-xl mt-4 shadow-md hover:shadow-lg">
        <Link
          className="overflow-hidden rounded mt-4 shadow-md hover:shadow-lg"
          href={`/work/${link}`}
          title="Click to know more about screen title">
          <Image
            src={src}
            alt={alt}
            width={1080}
            height={1080}
            loading="lazy"
            className="rounded h-full w-full"
          />
        </Link>
        <div className="absolute rounded inset-0 bg-cerise-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3">
          <h3 className="text-dull-lavender-50 text-3xl font-montserrat font-semibold uppercase text-center">
            {title}
          </h3>
          <p className="text-dull-lavender-50 text-lg font-montserrat uppercase mt-24">LEARN MORE</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center md:hidden lg:hidden">
          <h3 className="text-sm font-semibold p-2">{title}</h3>
        </div>
      </m.li>
    </LazyMotion>
  )
}

export default ProjectCard