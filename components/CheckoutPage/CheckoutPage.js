import * as styles from "./CheckoutPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Cart/CartItem/CartItem";
import { useState } from "react";
import AddressForm from "./AddressForm/AddressForm";

const CheckoutPage = (props) => {

  const cartItems = useSelector((data) => data.app.cart.cartItems);

  const [deliveryType, setDeliveryType] = useState(null)

  const changeInputHandler = (e) => {
    setDeliveryType(e.target.value)
  }

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
              <input onChange={(e) => changeInputHandler(e)} type="radio" id="pickup" name="deliveryType" value="pickup" />
              <label htmlFor="pickup">
                Pick up - Order and pick up at our store any day you want
              </label>
              <br />
              <input onChange={(e) => changeInputHandler(e)}
                type="radio"
                id="delivery"
                name="deliveryType"
                value="delivery"
              />
              <label htmlFor="delivery">
                Delivery - (DHL)
              </label>
              <br />
            </div>
          </div>
          <div className={styles.addressContainer}>
                {deliveryType === 'delivery' ? (
                    <AddressForm />
                ): null}
          </div>
        </div>

        <div className={styles.paymentDetails}>
          <div className={styles.header}>
            <h1>Payment Details</h1>
            <p>Provide your payment details to complete your purchase</p>
          </div>
          <div className={styles.gatewayContainer}>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
