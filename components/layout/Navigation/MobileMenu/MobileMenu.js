import styles from './MobileMenu.module.css';

const MobileMenu = props => {


    return (
        <div id='wrapper' className={styles.wrapper}>
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