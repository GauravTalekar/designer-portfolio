import * as motion from "motion/react-client"
import Image from "next/image"


const MasonaryItem = ({ idx, img }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
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
    </motion.div>
  )
}

export default MasonaryItem