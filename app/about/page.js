import FadeInObserver from "@/components/fade-in-observer"
import ImageGallery from "@/components/horizontal-scroll-gallery/image-gallery"
import ParagraphTemplate from "@/components/paragraph-template"
import SectionComponent from "@/components/section-component"
import SectionHeader from "@/components/section-header"
import { images } from "@/data/hobbies-image-list"
import { about, data } from "@/data/site-details"
import Image from "next/image"
import Link from "next/link"
import { MdArrowForward } from "react-icons/md"

export async function generateMetadata() {
  return {
    title: "About Gaurav Talekar - Developer & Creator",
    description: "Discover more about Gaurav Talekar, a passionate full-stack developer, and learn about his journey, passions, and personal life beyond coding.",
    openGraph: {
      title: "About Gaurav Talekar - Developer & Creator",
      description: "Discover more about Gaurav Talekar, a passionate full-stack developer, and learn about his journey, passions, and personal life beyond coding.",
      url: `https://${data.domain}/about`,
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
      title: "About Gaurav Talekar - Developer & Creator",
      description: "Discover more about Gaurav Talekar, a passionate full-stack developer, and learn about his journey, passions, and personal life beyond coding.",
      images: ["/images/gaurav-talekar.jpg"],
    },
  }
}

const AboutPage = () => {

  return (
    <>
      <FadeInObserver />
      <SectionComponent id="about-section-header" aria-label="About Section Header">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-16">
          <div className="md:w-2/3">
            <h2 className="heading fade-in transition-all ease-out duration-500" aria-level="2">
              Meet Gaurav Talekar
            </h2>
            <div className="fade-in transition-all ease-out duration-500 delay-100 font-nunito text-lg">
              <ParagraphTemplate paragraphs={about} />
            </div>
            <div className="my-9 fade-in transition-all ease-out duration-500 delay-200">
              <Link
                className="inline-flex items-center bg-shark-950 px-5 py-3 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 transition duration-300 ease-in-out"
                href="/contact"
                title="Connect with Gaurav Talekar"
                aria-label="Go to the contact page to get in touch with Gaurav"
              >
                {"Let's Connect "}
                <MdArrowForward className="ml-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center fade-in transition-all ease-out duration-500 delay-100">
            <div className="w-72 h-72 md:w-96 md:h-96 relative">
              <Image
                src="/images/gaurav-talekar.jpg"
                alt="Portrait of Gaurav Talekar"
                className="rounded-md object-cover"
                fill
                sizes="(max-width: 768px) 100vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </SectionComponent>

      <SectionComponent id="about-image-section" aria-label="About Image Section" bgColor="bg-white">
        <SectionHeader
          title={"Who I am beyond the pixels"}
          clx={"text-shark-800 font-montserrat font-bold"}
        />

        <div className="flex flex-col lg:flex-row gap-4 text-lg font-nunito fade-in transition-all ease-out duration-500 delay-100">
          <p>
            As I step away from the digital canvas, my hands find their way to clay and soil. Unconsciously the process of shaping clay inspires me to appreciate form, texture, and flow in design—lessons I often bring back to my digital work.
          </p>
          <p>
            {"Gardening, on the other hand, brings me back to the roots—quite literally. It’s my quiet rebellion against the fast pace of the online world. Observing plants grow, each leaf, allows me to slow down and notice the details that often go unseen."}
          </p>
        </div>

        <ImageGallery images={images} />
      </SectionComponent>
    </>
  )
}

export default AboutPage
