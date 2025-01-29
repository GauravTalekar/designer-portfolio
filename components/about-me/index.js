import Image from "next/image"
import Link from "next/link"
import React from "react"

import { MdArrowForward } from "react-icons/md"
import { LazyMotion, domAnimation } from "motion/react"
import * as m from "motion/react-m"

const AboutMe = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section id="about-me" className="flex items-center justify-center mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8 text-shark-800 font-nunito">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="md:w-2/3">
            <m.h2
              className="heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Meet Gaurav Talekar
            </m.h2>
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              <p className="mt-4 text-lg leading-relaxed">
                Gaurav Talekar is a <span className="text-cerise-600 font-semibold">Bremen, Germany</span> based designer who was born in <span className="text-cerise-600 font-semibold">Bombay, India</span>. His creative journey started at the age of 8 when he first began drawing in his school drawing book.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                His work oscillates between the playful and the optimistic, making heavy use of colors and illustrations. From paper sketches to digital artistry, his exploration of shapes and the meaning behind colors is a testament to his craft.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                Gaurav draws inspiration from his heritage, using abundant colors to tell stories. He&apos;s fascinated by{" "}
                <span className="text-dull-lavender-600 font-semibold relative underline decoration-wavy decoration-1 underline-offset-2">
                  typography, design, animation, and print
                </span>.
                When he&apos;s not designing, you might find him in a ceramic studio, crafting pottery.
              </p>
              <div className="my-9">
                <Link
                  className="cursor-pointer bg-shark-950 p-4 rounded font-montserrat text-xl text-cerise-600 hover:text-dull-lavender-600 hover:transform hover:scale-110 transition duration-300 ease-in"
                  title="Know more"
                  href="/about"
                >
                  Know More <MdArrowForward className="inline-block" />
                </Link>
              </div>
            </m.div>
          </div>
          <m.div className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <div className="w-72 h-72 md:w-96 md:h-96 relative">
              <Image
                src="/images/gaurav-talekar.jpg"
                alt="Gaurav Talekar Portrait"
                className="rounded-full object-cover"
                fill
              />
            </div>
          </m.div>
        </div>
      </section >
    </LazyMotion>
  )
}

export default AboutMe