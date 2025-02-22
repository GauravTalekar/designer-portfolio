import Image from "next/image";
import Link from "next/link";

import { MdArrowForward } from "react-icons/md";
import ParagraphTemplate from "../paragraph-template";
import SectionComponent from "../section-component";

const AboutMe = () => {
  return (
    <SectionComponent id="about-me" aria-label="About Gaurav Talekar">
      <div>
        <div>
          <div className="fade-in transition-all ease-out duration-500 delay-100">
            <div className="w-32 h-32 relative">
              <Image
                src="/images/gaurav-talekar.jpg"
                alt="Gaurav Talekar Portrait"
                className="rounded-full object-cover"
                fill
                priority
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </div>
          <h2 className="mt-10 mb-10 text-4xl md:text-6xl font-montserrat fade-in transition-all ease-out duration-500 delay-200">
            I am Gaurav Talekar, an illustrator, graphic and UX/UI-designer specialized in transforming concepts into engaging and impactful visual storytelling. I am based in Bremen, Germany.
          </h2>
          <div className="font-nunito text-xl fade-in transition-all ease-out duration-500 delay-300">
            <ParagraphTemplate paragraphs={[{
              text: "From pixels to prototypes, my approach employs insights from human psychology and aesthetics to bring ideas to life with style and purpose."
            }]} />
          </div>
          <div className="my-9 fade-in transition-all ease-out duration-500 delay-400">
            <Link
              className="inline-flex items-center bg-shark-950 px-5 py-3 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 transition duration-300 ease-in-out"
              href="/about"
              aria-label="Learn more about Gaurav Talekar"
            >
              Know More
              <MdArrowForward className="ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

export default AboutMe;