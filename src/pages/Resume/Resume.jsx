import { Link } from "react-router-dom";
import styles from './Resume.module.css';

function Resume() {
  
  return (
    <>
      <div className={styles.image}>
        <img src="https://i.postimg.cc/6qTKsv9g/ATS-Resume-Andrew-Winkler.png" alt="resume" />
      </div>
      <div className={styles.link}>
      <Link to="Resume.pdf" target="_blank" download>Download my resume!</Link>
      </div>
    </>
    
  )
}

export default Resume;