import styles from './Pagination.module.css';


const Pagination = props => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.navigateLeft} style={{
                backgroundImage:
                    `linear-gradient(to bottom, #ffffff49, #000000d9), url("/products/others.png")`,
                backgroundSize: "cover",
                backgroundPositionY: "center",
                backgroundRepeat: "no-repeat",
                }}>
                <h2>Back to categories</h2>
            </div>
            <div className={styles.navigateRight} style={{
                backgroundImage:
                    `linear-gradient(to bottom, #ffffff49, #000000d9), url('/products/souviners.png')`,
                backgroundSize: "cover",
                backgroundPositionY: "center",
                backgroundRepeat: "no-repeat",
                }}>
                <h2>Next: White plates</h2>
            </div>
        </div>
    )
}

export default Pagination