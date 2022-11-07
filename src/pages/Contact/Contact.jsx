import styles from './Contact.module.css';

function Contact() {
  return (
    <>
    <div className={styles.container}>
      <h2>Let's connect!  Send me an email and let's get the ball rolling</h2>
      <div className={styles.links}>
      <a href="mailto:andrewwink@gmail.com" >Email Me</a>
      <a href="https://github.com/Metranohm">My GitHub</a>
      <a href="https://www.linkedin.com/in/andrewjwinkler1/">My LinkedIn</a>
      </div>
      </div>
    </>
  );
}

export default Contact;