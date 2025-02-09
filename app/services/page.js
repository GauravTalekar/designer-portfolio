import FadeInObserver from "@/components/fade-in-observer"
import SectionComponent from "@/components/section-component"
import SectionHeader from "@/components/section-header"
import { services, processes } from "@/data/services"
import { data } from "@/data/site-details"
import Image from "next/image"

export async function generateMetadata() {
  return {
    title: "Gaurav Talekar - Services",
    alternates: {
      canonical: `https://${data.domain}/services`,
    },
    description: "Discover services offered by Gaurav Talekar",
    openGraph: {
      title: "Gaurav Talekar - Services",
      description: "Discover services offered by Gaurav Talekar",
      url: `https://${data.domain}/services`,
      images: [
        {
          url: "/images/gaurav-talekar.jpg",
          width: 1080,
          height: 1080,
          alt: "Portrait of Gaurav Talekar"
        },
      ],
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      title: "Gaurav Talekar - Services",
      description: "Discover services offered by Gaurav Talekar",
      images: ["/images/gaurav-talekar.jpg"],
    },
  }
}

const ServicesPage = () => {
  return (
    <>
      <FadeInObserver />
      <SectionComponent id="contact-section" aria-label="List of services offered by Gaurav Talekar" bgColor="bg-white">
        <SectionHeader headingLevel="h1" title={"Services"} clx={"text-shark-800 font-montserrat font-bold"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {services.map((service, idx) => (
            <article
              key={idx}
              className="bg-white px-8 py-6 border rounded-xl hover:shadow-md fade-in transition-all duration-500 ease-out delay-200"
              aria-labelledby={`service-title-${idx}`}
            >
              <div className="flex items-start space-x-4 mb-4">
                <figure className="w-16 h-16 flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </figure>
                <h2
                  id={`service-title-${idx}`}
                  className=" text-2xl md:text-3xl flex-grow font-montserrat font-semibold"
                >
                  {service.title}
                </h2>
              </div>

              <ul className="font-nunito list-inside flex flex-wrap justify-start gap-x-4 mt-6">
                {service.offering.map((item, subIdx) => (
                  <li key={subIdx} className="flex items-center space-x-2 text-lg">
                    {/* Decorative checkmark icon */}
                    <svg
                      className="shrink-0 w-3.5 h-3.5"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.686295"
                        y="12"
                        width="16"
                        height="16"
                        transform="rotate(-45 0.686295 12)"
                        fill="#212121"
                      />
                    </svg>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-nunito text-lg mt-6">
                {service.details}
              </p>
            </article>
          ))}
        </div>
      </SectionComponent>
      <SectionComponent id="contact-section" aria-label="Process followed by Gaurav Talekar" bgColor="bg-white">
        <SectionHeader headingLevel="h1" title={"Process"} clx={"text-shark-800 font-montserrat font-bold"} />
        <div className="mt-6">
          <ul className="mx-auto grid grid-cols-1 gap-10 sm:mt-16 lg:grid-cols-4">
            {
              processes.map((process, idx) => (
                <li className="flex-start group relative flex lg:flex-col" key={idx}>
                  {idx !== processes.length - 1 && ( // To not render the span for last item
                    <span
                      className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                      aria-hidden="true"
                    ></span>
                  )}
                  <div
                    className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-shark-950 group-hover:bg-shark-950">

                    <Image
                      src={process.icon}
                      alt={"desgin"}
                      height={512}
                      width={512}
                      className="h-12 w-12"
                    />
                  </div>
                  <div className="ml-6 lg:ml-0 lg:mt-3">
                    <h2
                      className="text-xl font-bold text-shark-950 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                      {idx + 1}{". "}{process.title}
                    </h2>
                    <p className="mt-2 text-lg text-shark-900">{process.details}</p>
                  </div>
                </li>
              ))
            }

          </ul>
        </div>
      </SectionComponent>
    </>
  )
}

export default ServicesPage