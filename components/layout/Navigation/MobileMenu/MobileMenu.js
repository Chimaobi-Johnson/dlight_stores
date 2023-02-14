import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { initMobileMenu } from '../../../../store/actions/app';
import styles from './MobileMenu.module.css';

const MobileMenu = props => {

    const dispatch = useDispatch();

    const initMenu = useSelector(data => data.app.mobileMenuInit)

    console.log(initMenu)

    return (
        <div id='wrapper' className={initMenu ? styles.wrapper : styles.closeMenu}>
            <div className={styles.header}>
                <div className={styles.logoContainer}></div>
                <div className={styles.headerText}>
                    <h2>Quick Links</h2>
                </div>
                <div className={styles.closeContainer}>
                    <div onClick={() => dispatch(initMobileMenu())} className={styles.iconWrapper}>
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