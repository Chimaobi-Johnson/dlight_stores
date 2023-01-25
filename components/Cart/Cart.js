import * as styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';


const Cart = props => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.cartContainer}>
                <div className={styles.header}>
                    <h1>Your Cart</h1>
                    <span>close</span>
                </div>
                <div className={styles.itemsContainer}>
                    <CartItem />
                </div>
            </div>
        </div>
    )
}

export default Cart