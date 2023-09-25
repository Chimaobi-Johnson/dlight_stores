import * as styles from "./CheckoutPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Cart/CartItem/CartItem";
import { useState } from "react";
import AddressForm from "./AddressForm/AddressForm";
import PaystackPage from "./PaystackPage/PaystackPage";

const CheckoutPage = (props) => {
  const cartItems = useSelector((data) => data.app.cart.cartItems);
  const subTotal = useSelector((data) => data.app.cart.subTotal);

  const [deliveryType, setDeliveryType] = useState(null);

  const changeInputHandler = (e) => {
    setDeliveryType(e.target.value);
  };

  const removeLoginInfo = () => {
    document.getElementById('loginInfo').style.display = 'none'
  }

  return (
    <div className={styles.wrapper}>
      <div id='loginInfo' className={styles.loginContainer}>
        <span onClick={removeLoginInfo}>close {'(x)'}</span>
        <h5>
          You are not logged in, log in or register with us for an easier
          experience
        </h5>
      </div>
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
          <h2>Total = N{subTotal ? subTotal : 0}</h2>
          <div className={styles.deliveryMethodContainer}>
            <h3>Delivery Type</h3>
            <div>
              <input
                onChange={(e) => changeInputHandler(e)}
                type="radio"
                id="pickup"
                name="deliveryType"
                value="pickup"
              />
              <label htmlFor="pickup">
                Pick up - Order and pick up at our store any day you want
              </label>
              <br />
              <input
                onChange={(e) => changeInputHandler(e)}
                type="radio"
                id="delivery"
                name="deliveryType"
                value="delivery"
              />
              <label htmlFor="delivery">Delivery - (DHL)</label>
              <br />
            </div>
          </div>
          <div className={styles.addressContainer}>
            {deliveryType === "delivery" ? <AddressForm /> : null}
          </div>
        </div>

        <div className={styles.paymentDetails}>
          <div className={styles.header}>
            <h1>Payment Details</h1>
            <p>Provide your payment details to complete your purchase</p>
            <PaystackPage
              total={subTotal}
              cartItems={cartItems}
              deliveryType={deliveryType}
            />
          </div>
          <div className={styles.gatewayContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
