import SectionComponent from "../section-component";
import SectionHeader from "../section-header";
import Pagination from "./pagination";
import ProjectList from "./project-list";
import SearchFilter from "./search-filter";

const ProjectsSection = ({ projects, currentPage, totalPages, queryParams }) => {
  return (
    <SectionComponent id="project-list" aria-label="List of project created by Gaurav Talekar" bgColor="bg-white">
      <SectionHeader
        headingLevel="h1"
        title={"Projects"}
        clx={"flex justify-center items-center text-center text-shark-800 font-montserrat font-bold"}
      />
      <div className="mt-12 flex justify-center">
        <SearchFilter
          q={queryParams?.q || ""}
          type={queryParams?.type || ""}
          sort={queryParams?.sort || "desc"}
        />
      </div>
      <div className="mt-16 inline-block">
        <ProjectList projects={projects} />
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} queryParams={queryParams} />
    </SectionComponent>
  )
}

export default ProjectsSection;