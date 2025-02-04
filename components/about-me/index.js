import Image from "next/image"
import Link from "next/link"
import React from "react"

import { MdArrowForward } from "react-icons/md"
import { about } from "@/data/site-details"
import ParagraphTemplate from "../paragraph-template"
import LinkButton from "../link-button"

const AboutMe = () => {
  return (
    <section id="about-me" className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8 text-shark-800 font-nunito">
      <div className="flex flex-col-reverse md:flex-row items-center gap-16">
        <div className="md:w-2/3">
          <h2 className="heading fade-in transition-all ease-out duration-500">
            Meet Gaurav Talekar
          </h2>
          <div className="fade-in transition-all ease-out duration-500 delay-100">
            <ParagraphTemplate paragraphs={about} />
          </div>
          <div className="my-9 fade-in transition-all ease-out duration-500 delay-200">
            <Link
              className="inline-block transform cursor-pointer bg-shark-950 p-4 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out"
              href="/about"
            >
              Know More <MdArrowForward className="inline-block" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center fade-in transition-all ease-out duration-500 delay-100">
          <div className="w-72 h-72 md:w-96 md:h-96 relative">
            <Image
              src="/images/gaurav-talekar.jpg"
              alt="Gaurav Talekar Portrait"
              className="rounded-full object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section >
  )
}

export default AboutMe