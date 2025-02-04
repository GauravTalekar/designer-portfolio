import Link from "next/link"
import { MdArrowForward } from "react-icons/md"
import SectionHeader from "../section-header"
import ServicesGrid from "./services-grid"

import { services } from "@/data/services"


const ServicesSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8 bg-bone-white-50">
      <hr className="border-shark-950" />
      <SectionHeader title={"Services"} clx={"flex justify-center items-center text-center text-shark-800 font-montserrat font-bold"} />
      <hr className="border-shark-950" />
      <ServicesGrid services={services} />
      <div className="flex justify-center my-9">
        <Link
          className="inline-block transform cursor-pointer bg-shark-950 p-4 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out"
          href="/services"
        >
          Show More <MdArrowForward className="inline-block" />
        </Link>
      </div>
    </section>
  )
}

export default ServicesSection