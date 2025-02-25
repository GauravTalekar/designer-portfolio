"use client"

import Masonry from "react-masonry-css"
import MasonaryItem from "./masonry-item";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const getRandomImages = (images, count) => {
  const shuffled = images.sort(() => 0.5 - Math.random()); // Shuffle the array
  return shuffled.slice(0, count); // Get the first 'count' items
};

const MasonryGrid = ({ imageList }) => {
  const randomImages = getRandomImages(imageList, 6);

  return (
    <Masonry
      className="flex gap-4 overflow-clip fade-in transition-all ease-out duration-500 delay-100 mt-3"
      columnClassName="bg-clip-padding overflow-clip masonry-columns"
      breakpointCols={breakpointColumnsObj}
    >
      {randomImages.map((img, idx) => (
        <MasonaryItem key={idx} img={img} />
      ))}
    </Masonry>
  )
}

export default MasonryGrid