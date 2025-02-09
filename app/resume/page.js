import FadeInObserver from "@/components/fade-in-observer";
import ParagraphTemplate from "@/components/paragraph-template";
import SectionComponent from "@/components/section-component";
import { data } from "@/data/site-details";
import clsx from "clsx";
import Link from "next/link";
import { HiArrowDownTray } from "react-icons/hi2";


export async function generateMetadata() {
  return {
    title: "Gaurav Talekar - Resume",
    description: "Explore my professional journey, including my education, experience, and skills in UI/UX design, web development, and more. Download my resume in English or German.",
    openGraph: {
      title: "Gaurav Talekar - Resume",
      description: "Explore my professional journey, including my education, experience, and skills in UI/UX design, web development, and more. Download my resume in English or German.",
      url: `https://${data.domain}/resume`,
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
      title: "Gaurav Talekar - Resume",
      description: "Explore my professional journey, including my education, experience, and skills in UI/UX design, web development, and more. Download my resume in English or German.",
      images: ["/images/gaurav-talekar.jpg"],
    },
  }
}

const ResumePage = () => {
  return (
    <>
      <FadeInObserver />

      {/* Main Resume Section */}
      <SectionComponent id="resume-section-header" aria-label="Resume Section Header" role="article">
        <h1 className={clsx(
          "tracking-wider uppercase transition-all ease-out duration-500 fade-in",
          "my-10 text-4xl leading-10", // Small screens
          "md:my-10 md:text-4xl md:leading-10", // Medium screens
          "lg:my-12 lg:text-6xl lg:leading-[60px]", // Large screens
          "text-shark-800 font-montserrat font-bold"
        )}>
          Graduation Behind. Dedication Ahead.
        </h1>
        <div className="font-nunito text-xl fade-in transition-all ease-out duration-500 delay-300">
          <ParagraphTemplate paragraphs={[
            {
              text: "I believe in creating work that is simple, clear, and speaks volumes."
            },
            {
              text: "My work flows seamlessly between visual aesthetics and clear communication, ensuring every design serves a purpose. Rooted in thorough research and shaped by extensive experience, my work spans in diverse design fields and software products."
            },
          ]} />
        </div>

        {/* Download Links */}
        <div className="flex flex-col text-center md:flex-row mt-4 gap-4 fade-in transition-all ease-out duration-500 delay-300">
          <Link
            className="inline-flex items-center bg-shark-950 px-5 py-3 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 transition duration-300 ease-in-out"
            href={data.resume.english}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume in English"
            title="Download Resume in English"
          >
            Download Resume (English) <HiArrowDownTray className="ml-2" />
          </Link>
          <Link
            className="inline-flex items-center bg-shark-950 px-5 py-3 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 transition duration-300 ease-in-out"
            href={data.resume.german}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume in German"
            title="Download Resume in German"
          >
            Download Resume (German) <HiArrowDownTray className="ml-2" />
          </Link>
        </div>
      </SectionComponent>

      {/* Resume Details Section */}
      <SectionComponent id="resume-details" aria-label="Resume Details" bgColor="bg-white" role="region">
        <div>
          <h2 className="mt-10 mb-6 text-2xl md:text-3xl font-montserrat font-medium fade-in transition-all ease-out duration-500 delay-200">
            Education
          </h2>
          <div className="mt-6 text-lg fade-in transition-all ease-out duration-500 delay-200">
            <h3 className="font-montserrat"><strong className="font-semibold">Master in Digital Media</strong>, University of Bremen & University of the Arts Bremen, Bremen, Germany, 2018-2024</h3>
          </div>
          <div className="mt-6 text-lg fade-in transition-all ease-out duration-500 delay-200">
            <h3 className="font-montserrat"><strong className="font-semibold">Bachelor in Information Technology</strong>, University of Mumbai, Bombay, India, 2008-2011</h3>
          </div>
        </div>

        <div>
          <h2 className="mt-10 mb-6 text-2xl md:text-3xl font-montserrat font-medium fade-in transition-all ease-out duration-500 delay-200">
            Experience
          </h2>
          {/* Experience Section */}
          <div className="mt-6 text-lg fade-in transition-all ease-out duration-500 delay-200">
            <h3 className="font-montserrat"><strong className="font-semibold capitalize">UI/UX Designer</strong>, Contact Software, Bremen, Germany, August 2019–August 2023</h3>
            <ul className="list-inside list-disc">
              <li>
                Assisted in creating website wireframes and mock-ups, working closely with senior designers to refine
                and finalize designs.
              </li>
              <li>
                {"Conducted research and developed a plugin for Adobe XD, resulting in a 15% increase in design workflow efficiency; successfully packaged the plugin, reducing design time."}
              </li>
              <li>
                {"Conducting research and implementing solutions to improve the company's documentation site."}
              </li>
              <li>
                Engaged in continuous learning and application of new design technologies and methodologies.
              </li>
            </ul>
          </div>
          <div className="mt-6 text-lg fade-in transition-all ease-out duration-500 delay-200">
            <h3 className="font-montserrat"><strong className="font-semibold capitalize">UI designer</strong>, Webbrand, Kirchweyhe, Germany, April 2019–July 2019</h3>
            <ul className="list-inside list-disc">
              <li>Designing and implementing web design utilizing the Adobe suite.</li>
              <li>{"Gained hands-on experience with a content management system called 'Contao', managing content updates and website maintenance tasks."}</li>
              <li>Collaborated closely with the development team to implement HTML and CSS code, ensuring seamless integration and functionality.</li>
              <li>{"Designed and implemented responsive websites, focusing on UI/UX best practices to improve usability and aesthetics."}</li>
            </ul>
          </div>
          <div className="mt-6 text-lg fade-in transition-all ease-out duration-500 delay-200">
            <h3 className="font-montserrat"><strong className="font-semibold capitalize">Front-end developer</strong>, Tata Power SED, Bombay, India, July 2015–October 2018</h3>
            <ul className="list-inside list-disc">
              <li>
                Developed comprehensive wireframes and screen designs for Border management system,
                translating client requirements into visually appealing and user-friendly interfaces.
              </li>
              <li>
                Conducted UI/UX audits and implemented improvements based on user feedback and
                analytics, resulting in a 20% increase in user retention.
              </li>
              <li>
                Designed and developed responsive websites using Adobe Creative Suite, focusing on face
                recognition.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="mt-10 mb-6 text-2xl md:text-3xl font-montserrat font-medium fade-in transition-all ease-out duration-500 delay-200">
            Skills
          </h2>
          {/* Skills Section */}
          <div className="mt-6 text-lg fade-in transition-all ease-out duration-500 delay-200">
            <h3 className="font-montserrat font-semibold">Design Tools</h3>
            <ul className="list-inside list-disc">
              <li>
                {"Adobe Creative Suite (Photoshop, Illustrator, InDesign, XD, After effects), Figma, Unity, Blender, Sketchbook, Procreate"}
              </li>
            </ul>
          </div>
          <div className="mt-6 text-lg fade-in transition-all ease-out duration-500 delay-200">
            <h3 className="font-montserrat font-semibold">Web Development</h3>
            <ul className="list-inside list-disc">
              <li>
                {"HTML5, CSS3, JavaScript, ReactJS, AngularJS, SASS, Bootstrap, jQuery, Node.js, Git, Agile"}
              </li>
            </ul>
          </div>
          <div className="mt-6 text-lg fade-in transition-all ease-out duration-500 delay-200">
            <h3 className="font-montserrat font-semibold">Databases</h3>
            <ul className="list-inside list-disc">
              <li>
                {"SQL, MySQL"}
              </li>
            </ul>
          </div>
          <div className="mt-6 text-lg fade-in transition-all ease-out duration-500 delay-200">
            <h3 className="font-montserrat font-semibold">Prototyping & Wireframing</h3>
            <ul className="list-inside list-disc">
              <li>
                {"Adobe XD, Figma, Balsamiq, Sketch, Miro, Axure RP"}
              </li>
            </ul>
          </div>
          <div className="mt-6 text-lg fade-in transition-all ease-out duration-500 delay-200">
            <h3 className="font-montserrat font-semibold">UI/UX Design</h3>
            <ul className="list-inside list-disc">
              <li>
                {"User research, Wireframing, Interaction Design, Usability Testing"}
              </li>
            </ul>
          </div>
          <div className="mt-6 text-lg fade-in transition-all ease-out duration-500 delay-200">
            <h3 className="font-montserrat font-semibold">Content Management Systems</h3>
            <ul className="list-inside list-disc">
              <li>
                {"Contao, Joomla"}
              </li>
            </ul>
          </div>
          <div className="mt-6 text-lg fade-in transition-all ease-out duration-500 delay-200">
            <h3 className="font-montserrat font-semibold">Soft Skills</h3>
            <ul className="list-inside list-disc">
              <li>
                {"Teamwork, Problem-solving, Project Management, Work Ethic, Storytelling"}
              </li>
            </ul>
          </div>
        </div>
      </SectionComponent>
    </>
  )
}

export default ResumePage