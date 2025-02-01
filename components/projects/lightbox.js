"use client";

import { LazyMotion, domAnimation } from "motion/react"
import * as m from "motion/react-m"

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

export default function ProjectLightbox({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <LazyMotion features={domAnimation}>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <m.div
            key={i}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1280}
              height={800}
              className="cursor-pointer rounded w-full shadow-md hover:scale-105 transition"
              onClick={() => { setOpen(true); setIndex(i); }}
            />
          </m.div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map(img => ({ src: img.src, alt: img.alt }))}
        index={index}
        plugins={[Zoom]}
      />
    </LazyMotion >
  );
}