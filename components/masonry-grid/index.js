import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import SectionHeader from "../section-header";
import MasonryGrid from "./masonry-grid";
import { images } from "@/data/landing-masonry-images";
import SectionComponent from "../section-component";

const MasonryGridSection = () => {
  return (
    <SectionComponent
      id="project-showcase-section"
      aria-label="Project Showcase Section"
      bgColor={"bg-white"}
    >
      {/* Section Header */}
      <SectionHeader
        title={"My Work"}
        clx={"flex justify-center items-center text-center text-shark-800 font-montserrat font-bold"}
      />

      {/* Masonry Grid with Image List */}
      <MasonryGrid imageList={images} />

      {/* Show More Link */}
      <div className="flex justify-center my-9">
        <Link
          className="inline-flex items-center bg-shark-950 px-5 py-3 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 transition duration-300 ease-in-out"
          href="/work"
          aria-label="View more projects by Gaurav Talekar"
        >
          Show More <MdArrowForward className="ml-2" aria-hidden="true" />
        </Link>
      </div>
    </SectionComponent>
  );
};

export default MasonryGridSection;