import styles from "./../styles/specialize.module.css";
import img1 from "./../images/Group.png";

const Specialize = () => {
  return (
    <div className={styles.specialize}>
      <div className={styles.specializehead}>I Specialize In</div>
      <div className={styles.ccscard}>
        <div className={styles.cscard}>
          <div className={styles.scard}>
            <img src={img1} alt="" />
          </div>
          <span>Women's Health</span>
        </div>
        <div className={styles.cscard}>
          <div className={styles.scard}>
            <img src={img1} alt="" />
          </div>
          <span>Skin Care</span>
        </div>
        <div className={styles.cscard}>
          <div className={styles.scard}>
            <img src={img1} alt="" />
          </div>
          <span>Immunity</span>
        </div>
        <div className={styles.cscard}>
          <div className={styles.scard}>
            <img src={img1} alt="" />
          </div>
          <span>Hair Care</span>
        </div>
      </div>
    </div>
  );
};

export default Specialize;
