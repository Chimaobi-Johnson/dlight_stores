import * as styles from "./OrderSummary.module.css";
import { useDispatch, useSelector } from "react-redux";
import Summary from "./Summary/Summary";
import PaystackPage from "../CheckoutPage/PaystackPage/PaystackPage";
import Button from "../ui/Button/Button";

const OrderSummary = (props) => {
    const cartItems = useSelector((data) => data.app.cart.cartItems);
    const subTotal = useSelector((data) => data.app.cart.subTotal);

    const initPaymentContainer = () => {
        document.getElementById('contentWrapper').style.gridTemplateColumns = '1fr 1fr';
        setTimeout(() => {
            document.getElementById('paystackContainer').style.opacity = 1;
        }, 1000);

    }
    const closePaymentContainer = () => {
        document.getElementById('paystackContainer').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('contentWrapper').style.gridTemplateColumns = '10fr 1fr';
        }, 1000);

    }
  return (
    <div className={styles.wrapper}>
        <div id='contentWrapper' className={styles.contentWrapper}>
        <div className={styles.orderSummary}>
            <Summary cartItems={cartItems} subTotal={subTotal} />
            <Button onClick={initPaymentContainer}>open</Button>
            <Button onClick={closePaymentContainer}>close</Button>

        </div>

        <div className={styles.paymentDetails}>

        <div id='paystackContainer' className={styles.paystackContainer}>
            <div className={styles.header}>
              <h1>Payment Details</h1>
              <p>Provide your payment details to complete your purchase</p>
              <PaystackPage
                total={subTotal}
                cartItems={cartItems}
              />
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default OrderSummary;
