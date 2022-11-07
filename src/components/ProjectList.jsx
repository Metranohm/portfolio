import ProjectPreview from "./ProjectPreview";

function Projects(props) {
  return (
    <>
      <ul>
        {props.projects.map((project) => (
        <li>
          <ProjectPreview project={project}/>
        </li>
        ))}
      </ul>
    </>
  )
}

export default Projects;