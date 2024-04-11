import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { initMobileMenu } from '../../../../store/actions/app';
import styles from './MobileMenu.module.css';
import Link from 'next/link';

const MobileMenu = props => {

    const dispatch = useDispatch();

    const initMenu = useSelector(data => data.app.mobileMenuInit)

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
                <Link href={'/'}><li className={styles.shop}>
                    Home
                </li></Link>
                <Link href={'/products'}><li>Products</li></Link>
                <Link href={'/about'}><li>About Us</li></Link>
                <Link href={'/reviews'}><li>Reviews</li></Link>
          </ul>
        </div>
    )
}

export default MobileMenu