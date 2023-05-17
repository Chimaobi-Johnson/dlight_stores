import * as styles from "./CheckoutPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Cart/CartItem/CartItem";

const CheckoutPage = (props) => {
  const cartItems = useSelector((data) => data.app.cart.cartItems);

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.orderSummary}>
          <div className={styles.header}>
            <h1>Order Summary</h1>
            <p>Review your items and select delivery method</p>
          </div>
          <div className={styles.itemsWrapper}>
            {cartItems.length !== 0
              ? cartItems.map((item, index) => {
                  return <CartItem key={index} item={item} />;
                })
              : "No item in cart"}
          </div>
          <div className={styles.deliveryMethodContainer}>
            <h3>Delivery Type</h3>
            <div>
              <input type="radio" id="pickup" name="deliveryType" value="pickup" />
              <label for="pickup">
                Pick up - Order and pick up at our store any day you want
              </label>
              <br />
              <input
                type="radio"
                id="delivery"
                name="deliveryType"
                value="delivery"
              />
              <label for="delivery">
                Delivery - Order and pick up at our store any day you want
              </label>
              <br />
            </div>
          </div>
        </div>

        <div className={styles.paymentDetails}>
          <div className={styles.header}>
            <h1>Payment Details</h1>
            <p>Provide your payment details to complete your purchase</p>
          </div>
          <div className={styles.gatewayContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
