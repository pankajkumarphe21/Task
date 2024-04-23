import styles from './../styles/about.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.abouthead}>
        <p>A Little About Me</p>
        <button>Follow <span className={styles.follow}>+</span></button>
      </div>
    </div>
  )
}

export default About
