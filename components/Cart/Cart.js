import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { initCart } from "../../store/actions/app";
import Button from "../ui/Button/Button";
import * as styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import CartRecommend from "./CartRecommend/CartRecommend";
import { isEmpty } from "../../utils/helperFunctions";
import { updateUserCart } from "../../store/actions/user";
import { useState } from "react";

const Cart = (props) => {

  const cartItems = useSelector(data => data.app.cart.cartItems);
  const subTotal = useSelector(data => data.app.cart.subTotal);
  const cartInit = useSelector(data => data.app.cartInit);
  const loggedUser = useSelector(data => data.user);
  const [newRecommendedProduct, setNewRecommendedProduct] = useState(true)

  const dispatch = useDispatch();

  const initCartHandler = () => {
    dispatch(initCart());
    setNewRecommendedProduct(!newRecommendedProduct)
    // if user is loggedin, update user cart
    if(!isEmpty(loggedUser)) {
      dispatch(updateUserCart(cartItems, loggedUser.cart.items))
    }
  };

  return (
    <div
      className={
        cartInit
          ? styles.wrapper
          : styles.closeCart
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
            {cartItems.length !== 0 ? cartItems.map((item, index) => {
                return <CartItem key={index} item={item} />
            }) : 
            <div style={{ marginLeft: '1rem'}}>No item in cart</div>
            }
        </div>
        <div className={styles.recommended}>
            {cartItems.length !== 0 ? <CartRecommend newRecommendedProduct={newRecommendedProduct} cartItem={cartItems[0]} /> : ''}
        </div>
        <div className={styles.subTotalContainer}>
        {cartItems.length !== 0 ? 
          <>
           <h4>Sub Total: {subTotal}</h4>
           <Link href="/checkout"><Button variant="primary">Checkout</Button></Link>
          </> : '' }
          <Link href="#"><span style={{ cursor: 'pointer' }} onClick={initCartHandler}>Continue shopping</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
