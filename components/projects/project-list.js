import ProjectCard from "./project-card"

const ProjectList = ({ projects }) => {
  return (
    <ul className="columns-1 md:columns-2 gap-4 space-y-4" aria-label="List of Projects">
      {
        projects?.map((project, index) => (
          <ProjectCard
            key={index}
            title={project["project-name"]}
            link={project.link}
            src={project.thumbnail}
            alt={project["project-name"]}
          />
        ))
      }
    </ul>
  )
}

export default ProjectList