import SectionHeader from "../section-header";
import ProjectList from "./project-list";

const ProjectsSection = () => {
  return (
    <section id="project-list" className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8 mt-20 text-shark-800 font-nunito">
      <SectionHeader
        title={"All Projects"}
        clx={"flex justify-center items-center text-center text-shark-800 font-montserrat font-bold"}
      />
      <div className="mt-6 inline-block">
        <ProjectList />
      </div>
    </section>
  )
}

export default ProjectsSection;