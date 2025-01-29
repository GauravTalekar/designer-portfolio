import Link from "next/link"
import { MdArrowForward } from "react-icons/md"
import SectionHeader from "../section-header"
import ServicesGrid from "./services-grid"

import { services } from "@/data/services"


const ServicesSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8 bg-bone-white-50">
      <SectionHeader title={"Services"} clx={"flex justify-center items-center text-center text-shark-800 font-montserrat font-bold"} />
      <ServicesGrid services={services} />
      <div className="flex justify-center my-9">
        <Link
          className="cursor-pointer bg-shark-950 p-4 rounded font-montserrat text-xl text-cerise-600 hover:text-dull-lavender-600 transition duration-300 ease-in"
          title="More About Services"
          href="/services"
        >
          Show More <MdArrowForward className="inline-block" />
        </Link>
      </div>
    </section>
  )
}

export default ServicesSection