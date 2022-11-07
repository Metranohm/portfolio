import { Link } from 'react-router-dom'
import hyphenateWords from '../utilities/hyphenateWords'
import styles from './ProjectPreview.module.css'

function ProjectPreview(props) {
    const projectPath = hyphenateWords(props.project.title)
    console.log(projectPath)
    return (
        <div className={styles.container}>
            <img 
                src={props.project.image} 
                alt={props.project.title}
            />

            <section>
                <h3>
                    {props.project.title}
                </h3>
                
                <Link to={projectPath}>
                    <button type="button" class="btn btn-primary">
                        Learn more
                    </button>
                </Link>
            </section>
        </div>
    )
}

export default ProjectPreview