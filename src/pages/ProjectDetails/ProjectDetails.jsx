// import { useParams } from 'react-router-dom'
import findProject from '../../utilities/findProject'
import { useLocation } from 'react-router-dom'
import styles from './ProjectDetails.module.css'

function ProjectDetails() {
    const location = useLocation()
    const project = findProject(location.pathname)
    return (
        <main>
            <section className={styles.section}>
            <h1 className={styles.h1}>{project.title}</h1>
            <img className={styles.img2}
                src={project.image} 
                alt={project.title}
            />
            <p className={styles.text}>{project.description}</p>
            <article>
                <a 
                    href={project.deploymentLink}
                    target='_blank'
                    rel='noreferrer'
                >
                    <button type="button" class="btn btn-primary">
                        View deployed {project.type}
                    </button>
                </a>

                <a 
                    href={project.repositoryLink}
                    target='_blank'
                    rel='noreferrer'
                >
                    <button type="button" class="btn btn-primary">
                        View code
                    </button>
                </a>
                <a 
                    href='/projects'
                    target='_blank'
                    rel='noreferrer'
                >
                    <button type="button" class="btn btn-primary">
                        Go Back
                    </button>
                </a>
            </article> 
            </section>
        </main>
    )
}

export default ProjectDetails