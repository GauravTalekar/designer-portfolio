import { projects } from "@/data/projects";
import * as motion from "motion/react-client"
import Image from "next/image";
import Link from "next/link";
import React from "react"
import { MdArrowForward } from "react-icons/md";
import MasonryGrid from "./masonry-grid";

const ProjectGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8 bg-bone-white-50">
      <h2 className="flex justify-center text-4xl md:text-5xl font-montserrat font-bold leading-tight text-shark-800">
        My Work
      </h2>
      <MasonryGrid />
      <div className="flex justify-center my-9">
        <Link
          className="cursor-pointer bg-shark-950 p-3 rounded font-montserrat text-xl text-cerise-600 hover:text-dull-lavender-600 transition duration-300 ease-in"
          title=""
          href="/work"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show More <MdArrowForward className="inline-block" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectGrid