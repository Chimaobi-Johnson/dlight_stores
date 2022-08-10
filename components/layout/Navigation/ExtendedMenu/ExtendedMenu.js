import styles from './ExtendedMenu.module.css';

const ExtendedMenu = props => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.menuItems}>
                <ul>
                    <li>All items</li>
                    <li>menu item 1</li>
                    <li>menu item 2</li>
                    <li>menu item 3</li>
                    <li>menu item 4</li>
                    <li>menu item 5</li>
                </ul>
            </div>
            <div className={styles.highlightedItems}>
                <div className={styles.itemOneContainer}>
                    <div className={styles.imageContainer}>
                        <img src="products/20210304_191601.jpg" alt="" />
                    </div>
                    <h6>Variety Packs</h6>
                </div>
                <div className={styles.itemTwoContainer}>
                <div className={styles.imageContainer}>
                        <img src="products/20210415_084559.jpg" alt="" />
                    </div>
                    <h6>E-Gift Cards</h6>
                </div>
            </div>
        </div>
    )
}

export default ExtendedMenu