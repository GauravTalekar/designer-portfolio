"use client";

import { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

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
    <div className="relative" role="region" aria-labelledby="gallery-controls" tabIndex={0}>
      <h3 id="gallery-controls" className="sr-only">
        Image Gallery Navigation
      </h3>
      
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800/70 text-white p-3 rounded-full z-10"
        aria-label="Scroll Left through the images"
        title="Scroll Left"
        tabIndex={0}
      >
        <HiChevronLeft />
      </button>
      
      <div
        ref={galleryRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide mt-12"
        aria-live="polite" // To announce the image change to screen readers
        role="list"
      >
        {children}
      </div>
      
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800/70 text-white p-3 rounded-full z-10"
        aria-label="Scroll Right through the images"
        title="Scroll Right"
        tabIndex={0}
      >
        <HiChevronRight />
      </button>
    </div>
  );
};

export default ImageGalleryControls;
