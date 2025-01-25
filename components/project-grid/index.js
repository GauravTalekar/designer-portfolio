import { projects } from "@/data/projects";
import * as motion from "motion/react-client"
import Image from "next/image";
import Link from "next/link";
import React from "react"
import { MdArrowForward } from "react-icons/md";

const ProjectGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8 bg-bone-white-50">
      <h2 className="text-4xl md:text-5xl font-montserrat font-bold leading-tight text-shark-800">
        My Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded shadow-md bg-bone-white-100"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full md:h-[600] object-cover transition-transform duration-300 group-hover:scale-105"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-cerise-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-dull-lavender-50 text-lg font-semibold">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="my-9">
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