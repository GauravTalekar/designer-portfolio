"use client"

import Masonry from "react-masonry-css"

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const MasonryGrid = ({ imageList }) => {
  return (
    <Masonry
      className="flex gap-4 overflow-clip fade-in transition-all ease-out duration-500 delay-100"
      columnClassName="bg-clip-padding overflow-clip masonry-columns"
      breakpointCols={breakpointColumnsObj}
    >
      {imageList}
    </Masonry>
  )
}

export default MasonryGrid