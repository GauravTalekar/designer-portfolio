"use client";

import { useRef } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"

const ImageGalleryControls = ({ children }) => {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    galleryRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10"
        aria-label="Scroll Left"
      >
        <HiChevronLeft />
      </button>
      <div
        ref={galleryRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide mt-12"
      >
        {children}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800/70 text-white p-3 rounded-full z-10"
        aria-label="Scroll Right"
      >
        <HiChevronRight />
      </button>
    </div>
  );
};

export default ImageGalleryControls;