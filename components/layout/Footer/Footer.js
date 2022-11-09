import Image from 'next/image';

import styles from './Footer.module.css';


const Footer = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.footerTop}>
                <div className={styles.box1}>
                    <div className={styles.logoContainer}>
                        <Image width={150} height={50} alt="" src='/logo/logo-light-text.png' />
                    </div>
                    {/* <p>Think marketing for grow and development</p> */}
                </div>
                <div className={styles.box2}>
                    <h3>Quick Access</h3>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Products
                        </li>
                        <li>
                            About us
                        </li>
                    </ul>
                </div>
                <div className={styles.box3}>
                    <h3>Follow us</h3>
                    <div className={styles.socialLinks}>
                        <ul>
                            <li><Image width={100} height={100} src="/icons/facebook-block.png" alt="" /></li>
                            <li><Image width={100} height={100} src="/icons/instagram-block.png" alt="" /></li>
                            <li><Image width={100} height={100} src="/icons/whatsapp-block.png" alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.box4}>
                    <h3>Call us</h3>
                    <p>+234 7754212120</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.copyright}>
                    <p>&copy; Delight Stores | Powered by Delight Stores </p>
                </div>
                {/* <div className={styles.terms}><p>Terms and Conditions</p></div> */}
            </div>
        </div>
    )
}

export default Footer