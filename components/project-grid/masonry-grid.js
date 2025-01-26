"use client"

import { images } from "@/data/projects"
import Image from "next/image"
import Masonry from "react-masonry-css"

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

import { motion } from "motion/react"

const MasonryGrid = () => {
  return (
    <Masonry 
      className="flex gap-4 overflow-clip" 
      columnClassName="bg-clip-padding overflow-clip masonry-columns" 
      breakpointCols={breakpointColumnsObj}
    >
      {images.map((img, idx) => (
        <motion.div
          key={idx}
          whileTap={{ scale: 0.95 }}
          className="group relative overflow-hidden rounded-xl mt-4 shadow-md hover:shadow-lg"
        >

          <Image
            key={idx}
            className="hover:opacity-80 cursor-pointer rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            loading="lazy"
          />
          <div className="absolute rounded-xl inset-0 bg-cerise-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <h3 className="text-dull-lavender-50 text-lg font-semibold">
              {img.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </Masonry>
  )
}

export default MasonryGrid