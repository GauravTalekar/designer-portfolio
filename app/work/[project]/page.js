import ParagraphTemplate from "@/components/paragraph-template";
import ProjectLightbox from "@/components/projects/lightbox";
import SectionHeader from "@/components/section-header";
import { projects } from "@/data/projects";
import { LazyMotion, domAnimation } from "motion/react"
import * as m from "motion/react-m"

export async function generateStaticParams() {
  return projects.map((project) => ({
    project: project["link"], // Generates routes dynamically
  }));
}

function getDateInFormat(date) {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let formattedDate = months[date.getMonth()] + " " + date.getFullYear();

  return formattedDate;
}

export default async function ProjectPage({ params }) {
  const slug = (await params)
  const project = projects.find((p) => p.link === slug.project);

  if (!project) return <h1>Project not found</h1>;

  return (
    <LazyMotion features={domAnimation}>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8 mt-20 md:mt-0 bg-bone-white-50 font-nunito">
        <SectionHeader
          title={project["project-name"]}
          clx={"flex justify-center items-center text-center text-shark-800 font-montserrat font-bold"}
        />
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="md:w-2/3">
            <ParagraphTemplate paragraphs={project.about} />
          </m.div>
          <m.div className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <ul className="list-group border border-gray-400 h-full w-full text-base mt-4">
              <li className="list-group-item p-4 border-b text-lg font-montserrat">
                <strong className="font-montserrat uppercase">Summary</strong>
              </li>
              <li className="list-group-item p-4 border-b">
                <strong className="font-montserrat uppercase">Type</strong>
                <p className="capitalize">
                  {project.type}
                </p>
              </li>
              <li className="list-group-item p-4 border-b">
                <strong className="font-montserrat uppercase">Created On</strong>
                <p className="capitalize">
                  {getDateInFormat(project["made-in"])}
                </p>
              </li>
              <li className="list-group-item p-4">
                <strong className="font-montserrat uppercase">Created With</strong>
                <p className="capitalize">{project["tools-used"].join(", ")}</p>
              </li>
            </ul>
          </m.div>
        </div>
        <div className="mt-12">
          <ProjectLightbox images={project["images-list"]} />
        </div>

      </section >
      {/* <div>
      <h1>{project["project-name"]}</h1>
      <img src={project.thumbnail} alt={project["project-name"]} />
      <p>{project.about.map((a, i) => <span key={i}>{a.text}</span>)}</p>
      <p><strong>Type:</strong> {project.type}</p>
      <p><strong>Tools Used:</strong> {project["tools-used"].join(", ")}</p>
      <p><strong>Made In:</strong> {project["made-in"]}</p>
    </div> */}
    </LazyMotion >
  );
}