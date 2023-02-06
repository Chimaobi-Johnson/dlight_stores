import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { initCart } from "../../store/actions/app";
import Button from "../ui/Button/Button";
import * as styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cart = useSelector((data) => data.app.cart);

  console.log(cart);

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
          <CartItem />
        </div>
        <div className={styles.recommended}></div>
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
