import SectionComponent from "../section-component";
import SectionHeader from "../section-header";
import ProjectList from "./project-list";

const ProjectsSection = () => {
  return (
    <SectionComponent id="project-list" aria-label="Project List Section" bgColor="bg-white">
      <SectionHeader
        title={"All Projects"}
        clx={"flex justify-center items-center text-center text-shark-800 font-montserrat font-bold"}
      />
      <div className="mt-6 inline-block">
        <ProjectList />
      </div>
    </SectionComponent>
  )
}

export default ProjectsSection;