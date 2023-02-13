import Image from 'next/image';
import styles from './MobileMenu.module.css';

const MobileMenu = props => {


    return (
        <div id='wrapper' className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.logoContainer}></div>
                <div className={styles.headerText}>
                    <h2>Quick Links</h2>
                </div>
                <div className={styles.closeContainer}>
                    <div className={styles.iconWrapper}>
                       <Image style={{ cursor: 'pointer' }} width={10} height={10} src="/icons/close-icon.png" alt="_search" />
                    </div>
                </div>
            </div>
            <ul className={styles.menuItem}>
                <li className={styles.shop}>
                    Shop
                </li>
                <li>Care Guide</li>
                <li>Blog</li>
                <li>Reviews</li>
            </ul>
        </div>
    )
}

export default MobileMenu