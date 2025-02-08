import Link from "next/link"
import { MdArrowForward } from "react-icons/md"
import SectionHeader from "../section-header"
import ServicesGrid from "./services-grid"

import { services } from "@/data/services"
import SectionComponent from "../section-component"


const ServicesSection = () => {
  return (
    <SectionComponent id="services-section" aria-label="Services Offered By Gaurav Talekar">
      {/* Section Header */}
      <SectionHeader
        title="Services"
        clx="flex justify-center items-center text-center text-shark-800 font-montserrat font-bold"
      />

      {/* Services Grid */}
      <ServicesGrid services={services} />

      {/* Show More Button */}
      <div className="flex justify-center my-9 fade-in transition-all duration-500 ease-out">
        <Link
          href="/services"
          aria-label="Learn more about offerings by Gaurav Talekar"
          className="inline-flex items-center bg-shark-950 px-5 py-3 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 transition duration-300 ease-in-out"
        >
          Show More
          <MdArrowForward className="ml-2" aria-hidden="true" />
        </Link>
      </div>
    </SectionComponent>
  )
}

export default ServicesSection