import ProjectCard from "./project-card";

const ProjectList = ({ projects }) => {
  return (
    <ul
      className="columns-1 md:columns-3 gap-4 space-y-4"
      role="list"
      aria-label="List of projects"
    >
      {projects?.map((project, index) => (
        <li key={index} role="listitem">
          <ProjectCard
            title={project["project-name"]}
            link={project.link}
            src={project.thumbnail}
            alt={`Thumbnail image of ${project["project-name"]}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
