import styles from "./../styles/about.module.css";
import facebook from "./../images/Vector.png";
import twitter from "./../images/Vector (1).png";
import instagram from "./../images/Group 39479.png";
import youtube from "./../images/Group 39481.png";


const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.abouthead}>
        <p>A Little About Me</p>
        <button>
          Follow <span className={styles.follow}>+</span>
        </button>
      </div>
      <p>
        Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat.
        love to work with all my hospital staff and seniour doctors. Completed
        my graduation in Gynaecologist Medicine from the
      </p>
      <div className={styles.readmore}>
        <span></span>
        <a href="">Read More</a>
      </div>
      <div className={styles.language}>
        Language Spoken <button>English</button>
        <button>Hindi</button>
        <button>Telugu</button>
      </div>
      <div className={styles.media}>
        <button>
          <img src={facebook} alt="" />
        </button>
        <button>
          <img src={instagram} alt="" />
        </button>
        <button>
          <img src={youtube} alt="" />
        </button>
        <button>
          <img src={twitter} alt="" />
        </button>
      </div>
    </div>
  );
};

export default About;
