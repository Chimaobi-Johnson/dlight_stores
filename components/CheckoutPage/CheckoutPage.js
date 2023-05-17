import * as styles from "./CheckoutPage.module.css";

const CheckoutPage = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.orderSummary}>
          <div className={styles.headerLeft}>
            <h3>Order Summary</h3>
            <p>Review your items and select delivery method</p>
          </div>
          <div className={styles.itemsWrapper}></div>
          <div className={styles.deliveryMethodContainer}></div>
        </div>

        <div className={styles.paymentDetails}>
          <div className={styles.headerLeft}>
            <h3>Payment Details</h3>
            <p>Provide your payment details to complete your purchase</p>
          </div>
          <div className={styles.gatewayContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
