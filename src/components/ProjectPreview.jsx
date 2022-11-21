import { Link } from 'react-router-dom'
import hyphenateWords from '../utilities/hyphenateWords'
import styles from './ProjectPreview.module.css'

function ProjectPreview(props) {
    const projectPath = hyphenateWords(props.project.title)
    console.log(projectPath)
    return (
        <Link to={projectPath}>
            <div className={styles.container} id="card">
                <img id="image" className={styles.img}
                    src={props.project.image} 
                    alt={props.project.title}
                />
                <section>
                    <h3 className={styles.h3}>
                        {props.project.title}
                    </h3>
                    <h6 className={styles.h6}>
                        Built with {props.project.technology}
                    </h6>
                </section>
            </div>
        </Link>
    )
}

export default ProjectPreview