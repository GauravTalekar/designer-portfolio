import { projects } from "@/data/projects"
import ProjectCard from "./project-card"

const ProjectList = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {
        projects.map((project, index) => (
          <ProjectCard key={index} title={project["project-name"]} link={project.link} src={project.thumbnail} alt={project["project-name"]} />
        ))
      }
    </ul>
  )
}

export default ProjectList