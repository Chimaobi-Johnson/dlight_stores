import Link from "next/link";
import Button from '../ui/Button/Button';
import * as styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';


const Cart = props => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.cartContainer}>
                <div className={styles.header}>
                    <h3>Your Cart</h3>
                    <span>close</span>
                </div>
                <div className={styles.itemsContainer}>
                    <CartItem />
                </div>
                <div className={styles.recommended}>

                </div>
                <div className={styles.subTotalContainer}>
                    <h4>Sub Total</h4>
                    <Button variant='primary'>Checkout</Button>
                    <Link href='/'>Continue shopping</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart