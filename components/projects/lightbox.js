"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

export default function ProjectLightbox({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <div key={i} className="fade-in transition-all ease-out duration-500 delay-200">
            <Image
              src={img.src}
              alt={img.alt}
              width={1280}
              height={800}
              className="cursor-pointer rounded w-full shadow-md hover:scale-105 transition"
              onClick={() => { setOpen(true); setIndex(i); }}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map(img => ({ src: img.src, alt: img.alt }))}
        index={index}
        plugins={[Zoom]}
      />
    </>
  );
}