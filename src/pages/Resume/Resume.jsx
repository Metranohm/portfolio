import { Link } from "react-router-dom";
import styles from './Resume.module.css';

function Resume() {
  
  return (
    <>
      <div className={styles.container}>
      <Link to="Resume.pdf" target="_blank" download>Download my resume!</Link>
      </div>
      <div>
        <img src="https://i.postimg.cc/jjqxd5kS/Andrew-Winkler-Resume-1.png" className={styles.image} alt="resume" />
      </div>
    </>
  )
}

export default Resume;