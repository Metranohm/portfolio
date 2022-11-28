import Headshot from '../../assets/ProfilePic.png';
import styles from './About.module.css';

function About() {
  return (
    <>
    <div classname={styles.container}>
      
      <img src={Headshot} alt="pic" className={styles.pic}/>
      <p className={styles.radius}>Hi I'm Andrew, I am a software engineer and musician drawn to innovations that ignite curiosity and creative solutions to bring order to the chaos. I seek to bridge the gap in the relationships between people, technology, and products by emphasizing creativity, empathy, and structural expertise.
      <br></br>
      <br></br>
      My experience in Human Resources and music instruction make communication & leadership come naturally to me and I thrive in a group work environment.  I look forward to combining these talents with my new skills as a software engineer to create innovative solutions to real-world problems.
      </p>
    </div>
    </>
  );
}

export default About;