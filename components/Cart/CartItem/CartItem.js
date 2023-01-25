import * as styles from './CartItem.module.css';


const CartItem = props => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}></div>
            <div className={styles.contentContainer}>
                Awesome
            </div>
        </div>
    )
}

export default CartItem