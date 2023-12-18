import * as styles from "./CheckoutPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Cart/CartItem/CartItem";
import AddressForm from "./AddressForm/AddressForm";
import { useState } from "react";
import { NumericFormat } from 'react-number-format';
import Link from "next/link";
import ShortForm from "./ShortForm/ShortForm";
import { isEmpty } from "../../utils/helperFunctions";

const CheckoutPage = (props) => {
  const cartItems = useSelector((data) => data.app.cart.cartItems);
  const subTotal = useSelector((data) => data.app.cart.subTotal);
  const loggedUser = useSelector((data) => data.user);


  const [deliveryType, setDeliveryType] = useState(null);

  const changeInputHandler = (e) => {
    setDeliveryType(e.target.value);
  };

  const LoginInfo = () => {
    return (
      <div id='loginInfo' className={styles.loginContainer}>
      <span className={styles.closeIcon} onClick={removeLoginInfo}>close {'(x)'}</span>
      <h5>
        You are not logged in, <span style={{ color: '#fbffa5', cursor: 'pointer' }}><Link href={`/auth/login?status=checkout`}>log in</Link></span> or <span style={{ color: '#a5f0ff', cursor: 'pointer' }}><Link href={`/auth/register?status=checkout`}>register</Link></span>  with us for an easier
        experience
      </h5>
    </div>
    )
  }

  const removeLoginInfo = () => {
    document.getElementById('loginInfo').style.display = 'none'
  }

  const renderRadioOptions = () => (
    <div className={styles.deliveryMethodContainer}>
    <h3>Delivery Type</h3>
    <div>
      <input
        onChange={(e) => changeInputHandler(e)}
        type="radio"
        id="pickup"
        checked={deliveryType === 'pickup'}
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
        checked={deliveryType === 'delivery'}
        name="deliveryType"
        value="delivery"
      />
      <label htmlFor="delivery">Delivery</label>
      <br />
    </div>
  </div>
  )

  const OrderDetails = () => {
    return (
      <>
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
          <h2>Total = <NumericFormat value={subTotal ? subTotal : 0} prefix="N" displayType="text" thousandSeparator="," /></h2>
          {renderRadioOptions()}
          <div className={styles.addressContainer}>
            {deliveryType === "delivery" ? <AddressForm cartLength={cartItems.length} deliveryType={deliveryType} /> : deliveryType === "pickup" ? <ShortForm cartLength={cartItems.length} deliveryType={deliveryType} /> : ''}
          </div>
      </>
    )
  }

  return (
    <div className={styles.wrapper}>
      {isEmpty(loggedUser) ? (
       <LoginInfo />
      ) : ''}
      <div className={styles.contentWrapper}>
        <div className={styles.orderSummary}>
            <OrderDetails />
        </div>

        <div className={styles.paymentDetails}>
          <div className={styles.paystackContainer}>
            <div className={styles.header}>
              <h1>Payment Details</h1>
              <p>Provide your payment details to complete your purchase</p>
            </div>
          </div>
          <div className={styles.gatewayContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
