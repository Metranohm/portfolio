import Headshot from '../../assets/ProfilePic.png';
import styles from './About.module.css';

function About() {
  return (
    <>
    <div classname={styles.container}>
      
      <img src={Headshot} alt="pic" class="center"/>
      <p>Hi I'm Andrew, I am a software engineer and musician drawn to innovations that ignite curiosity and creative solutions to bring order to the chaos. I seek to bridge the gap in the relationships between people, technology, and products by emphasizing creativity, empathy, and structural expertise.</p>
    </div>
    </>
  );
}

export default About;