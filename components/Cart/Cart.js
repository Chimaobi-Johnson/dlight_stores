import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { initCart } from "../../store/actions/app";
import Button from '../ui/Button/Button';
import * as styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';


const Cart = props => {

    const cart = useSelector(data => data.app.cart)

    const dispatch = useDispatch();

    const initCartHandler = () => {
        dispatch(initCart())
    }

    return (
        <div className={cart.init ? styles.wrapper : styles.closeCart}>
            <div className={styles.cartContainer}>
                <div className={styles.header}>
                    <h3>Your Cart</h3>
                    <span onClick={initCartHandler}>close</span>
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