import Link from "next/link"
import { MdArrowForward } from "react-icons/md"
import SectionHeader from "../section-header"
import ImageList from "./image-list"
import MasonryGrid from "./masonry-grid"
import { images } from "@/data/landing-masonry-images"


const ProjectGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8 bg-bone-white-50">
      <SectionHeader
        title={"My Work"}
        clx={"flex justify-center items-center text-center text-shark-800 font-montserrat font-bold"}
      />
      <MasonryGrid imageList={<ImageList images={images} />} />
      <div className="flex justify-center my-9">
        <Link
          className="cursor-pointer bg-shark-950 p-4 rounded font-montserrat text-xl text-cerise-600 hover:text-dull-lavender-600 transition duration-300 ease-in"
          title="Show more"
          href="/work"
        >
          Show More <MdArrowForward className="inline-block" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectGrid