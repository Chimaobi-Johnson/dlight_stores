import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { initCart } from "../../store/actions/app";
import Button from "../ui/Button/Button";
import * as styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import CartRecommend from "./CartRecommend/CartRecommend";

const Cart = (props) => {

  const cart = useSelector((data) => data.app.cart);

  const dispatch = useDispatch();

  const initCartHandler = () => {
    dispatch(initCart());
  };

  return (
    <div
      className={
        cart.init === "reveal"
          ? styles.openCart
          : cart.init === "hide"
          ? styles.closeCart
          : styles.wrapper
      }
    >
      <div className={styles.cartContainer}>
        <div className={styles.header}>
          <h3>Your Cart</h3>
          <div className={styles.closeIcon}>
              <Image onClick={initCartHandler} width={15} height={15} src="/icons/close-icon.png" alt="_search" />
          </div>
        </div>
        <div className={styles.itemsContainer}>
            {cart.cartItems.length !== 0 ? cart.cartItems.map(item => {
                return <CartItem item={item} />
            }) : 
            'No item in cart'
            }
        </div>
        <div className={styles.recommended}>
            <p className={styles.recommendedText}>we highly recommended adding a heat pack on houseplant orders this time of year</p>
            <CartRecommend />
        </div>
        <div className={styles.subTotalContainer}>
          <h4>Sub Total</h4>
          <Button variant="primary">Checkout</Button>
          <Link href="/">Continue shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
