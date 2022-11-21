import Headshot from '../../assets/ProfilePic.png';
import styles from './Home.module.css';

function Home() {
  return (
    <>
    <div className={styles.container}>
      <img className={styles.pic} src={Headshot} alt="pic" />
      <h3 class={styles.job}>Full-Stack Software Engineer</h3>
      </div>
      </>
  )
}

export default Home;