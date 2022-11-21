import ProjectPreview from "./ProjectPreview";
import styles from './ProjectList.module.css';

function Projects(props) {
  return (
    <>
      <ul className={styles.container}>
        {props.projects.map((project) => (
        <li className={styles.list}>
          <ProjectPreview project={project}/>
        </li>
        ))}
      </ul>
    </>
  )
}

export default Projects;