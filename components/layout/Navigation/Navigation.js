import * as styles from './Navigation.module.css';

const Navigation = props => {

    return (
        <header className={styles.wrapper}>
            <div className={styles.searchContainer}>

            </div>
            <div className={styles.menuContainer}>
                <ul>
                    <li>Shop</li>
                    <li>Care Guide</li>
                    <li>DLIGHT STORES</li>
                    <li>Blog</li>
                    <li>Reviews</li>
                </ul>
            </div>
            <div className={styles.infoContainer}>

            </div>
        </header>
    )
}

export default Navigation