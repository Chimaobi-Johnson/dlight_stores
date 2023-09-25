import * as styles from "./OrderSummary.module.css";
import { useDispatch, useSelector } from "react-redux";
import Summary from "./Summary/Summary";
import PaystackPage from "../CheckoutPage/PaystackPage/PaystackPage";

const OrderSummary = (props) => {
    const cartItems = useSelector((data) => data.app.cart.cartItems);
    const subTotal = useSelector((data) => data.app.cart.subTotal);
  return (
    <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
        <div className={styles.orderSummary}>
            <Summary cartItems={cartItems} subTotal={subTotal} />
        </div>

        <div className={styles.paymentDetails}>
        <div className={styles.paystackContainer}>
            <div className={styles.header}>
              <h1>Payment Details</h1>
              <p>Provide your payment details to complete your purchase</p>
              <PaystackPage
                total={subTotal}
                cartItems={cartItems}
              />
            </div>
          </div>
          <div className={styles.gatewayContainer}></div>
        </div>
        </div>
    </div>
  );
};

export default OrderSummary;
