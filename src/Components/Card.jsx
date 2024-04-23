import styles from './../styles/card.module.css'
import img1 from './../images/Frame.png';
import img2 from './../images/Frame(1).png';
import img3 from './../images/2d51c94620b579efef8a7a0016be5616.png';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <div className={styles.rating}>4.5 <div>&#9733;</div></div>
      </div>
      <h1>Dr. Prerna Narang</h1>
      <p>
        <img src={img1} alt="" />
        Male-Female Infertility
      </p>
      <p><img src={img2} alt="" />7 years of Experience</p>
      <p><img src={img3} alt="" />Speaks: English, Hindi, Marathi</p>
      <div className={styles.consult}>
        <div className={styles.consultation}>
            Video Consultation
            <span>&#8377;800</span>
        </div>
        <div className={styles.consultation}>
          Chat Consultation
          <span>Free</span>
        </div>
      </div>
      <button className={styles.profile}>View Profile</button>
      <button className={styles.booking}>Book Consultation</button>
    </div>
  )
}

export default Card
