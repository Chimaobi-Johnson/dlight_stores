import Image from "next/image";

import styles from "./Footer.module.css";
import GoogleMap from "../../Map/GoogleMap";
import Link from "next/link";

const Footer = (props) => {

  return (
      <div className={styles.wrapper}>
        <div className={styles.footerTop}>
          <div className={styles.box1}>
            <div className={styles.mapContainer}>
              <GoogleMap />
            </div>
          </div>
          <div className={styles.box2}>
            <h3>Quick Access</h3>
            <ul>
              <Link href={'/'}><li>Home</li></Link>
              <Link href={'/products'}><li>Products</li></Link>
              <Link href={'/about'}><li>About us</li></Link>
            </ul>
          </div>
          <div className={styles.box3}>
            <h3>Follow us</h3>
            <div className={styles.socialLinks}>
              <ul>
                <li>
                  <Image
                    width={100}
                    height={100}
                    src="/icons/facebook-block.png"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    width={100}
                    height={100}
                    src="/icons/instagram-block.png"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    width={100}
                    height={100}
                    src="/icons/whatsapp-block.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.box4}>
            <h3>Call us</h3>
            <p>+234 7754212120</p>
            <p style={{ fontSize: '.8rem' }}>Visit us at our store in Port Harcourt <br />@ No. 26 Destiny Drive rd, Abuloma, 500101, Port Harcourt, Nigeria</p>

          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; Delight Stores | Powered by Delight Stores </p>
          </div>
          {/* <div className={styles.terms}><p>Terms and Conditions</p></div> */}
        </div>
      </div>
  );
  
};

export default Footer;
