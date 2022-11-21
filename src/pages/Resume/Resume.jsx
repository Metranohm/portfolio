import { Link } from "react-router-dom";
import styles from './Resume.module.css';

function Resume() {
  
  return (
    <>
      <div className={styles.link}>
      <Link to="Resume.pdf" target="_blank" download>Download my resume!</Link>
      </div>
      <div className={styles.image}>
        <img src="https://i.postimg.cc/jjqxd5kS/Andrew-Winkler-Resume-1.png" alt="resume" />
      </div>
    </>
  )
}

export default Resume;