import Image from "next/image";
import * as styles from "./AboutPage.module.css";

const AboutPage = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image src="/site/uju.jpg" alt="_image" layout="fill" />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h4>About Dlight Stores</h4>
          <p>
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
