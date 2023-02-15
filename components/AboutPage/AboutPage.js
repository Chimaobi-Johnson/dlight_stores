import Image from "next/image";
import * as styles from "./AboutPage.module.css";

const AboutPage = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <div className={styles.imageBackground}>
          <div className={styles.imageWrapper}>
            <Image src="/site/uju2.jpg" alt="_image" layout="fill" />
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textWrapper}>
          <div className={styles.textContainer}>
            <h4>About Dlight Stores</h4>
            <p>
              Hi 😃 My name is Chibuike Obianuju Ifeoma I am the face behind
              Dlight homeware stores. We sell lovely Sourviners for weddings,
              birthday🎊 parties and for corporate events. We also sell quality
              and affordable household, kitchen and gift items🎁
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
