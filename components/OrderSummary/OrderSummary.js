import * as styles from "./OrderSummary.module.css";
import { useDispatch, useSelector } from "react-redux";
import Summary from "./Summary/Summary";
import PaystackPage from "../CheckoutPage/PaystackPage/PaystackPage";
import Button from "../ui/Button/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

const OrderSummary = (props) => {
    const cartItems = useSelector((data) => data.app.cart.cartItems);
    const subTotal = useSelector((data) => data.app.cart.subTotal);
    const deliveryData = useSelector((data) => data.app.deliveryData);

    const [paymentComponent, setPaymentComponent] = useState(false)

    // useEffect(() => {   
    //     if(paymentComponent) {
    //         initPaymentContainer()
    //     } else {
    //         // closePaymentContainer()
    //     }    
    // }, [paymentComponent])


    const initPaymentContainer = () => {
        document.getElementById('orderSummary').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('contentWrapper2').style.gridTemplateColumns = '1fr 1fr';
        }, 1000);
        setTimeout(() => {
            document.getElementById('paystackContainer').style.opacity = 1;
            document.getElementById('closeButtonPaystack').style.opacity = 1;
             document.getElementById('orderSummary').style.gridTemplateColumns = '1fr';
             document.getElementById('orderSummary').style.opacity = 1;

        }, 2000);

    }
    const closePaymentContainer = () => {
        document.getElementById('paystackContainer').style.opacity = 0;
        document.getElementById('orderSummary').style.opacity = 0;

        setTimeout(() => {
            document.getElementById('contentWrapper2').style.gridTemplateColumns = '10fr 1fr';

        }, 1000);
        setTimeout(() => {
            document.getElementById('orderSummary').style.gridTemplateColumns = '1fr 1fr';
            document.getElementById('closeButtonPaystack').style.opacity = 0;
            document.getElementById('orderSummary').style.opacity = 1;

        }, 2000);

    }
  return (
    <div className={styles.wrapper}>
        <div id='contentWrapper2' className={styles.contentWrapper}>
            <div id='orderSummary' className={styles.orderSummary}>
                <div className={styles.itemSummary}>
                    <Summary cartItems={cartItems} subTotal={subTotal} />
                </div>
                <div className={styles.contactInfo}>
                        <h3>Contact Details</h3>
                        {deliveryData.deliveryType === 'delivery' ? (
                            <ul>
                                <li><span>First Name:</span> {deliveryData.firstName}</li>
                                <li><span>Last Name:</span> {deliveryData.lastName}</li>
                                <li><span>Email:</span> {deliveryData.email}</li>
                                <li><span>Phone No:</span> {deliveryData.mobile}</li>
                                <li><span>City:</span> {deliveryData.city}</li>
                                <li><span>StreetName:</span> {deliveryData.streetname}</li>
                                <li><span>House No:</span> {deliveryData.houseno}</li>
                            </ul>
                        ) : (
                            <ul>
                                <li>Email: {deliveryData.email}</li>
                                <li>Phone No: {deliveryData.mobile}</li>

                            </ul>
                        )}
                        <div className={styles.buttonContainer}>
                            <Button variant="secondary" onClick={initPaymentContainer}>Looks good {'--->'}</Button>
                            <Link href={'/checkout'}><Button>Go back</Button></Link>

                        </div>
            
                </div>
        

            </div>

            <div className={styles.paymentDetails}>
            <div id='closeButtonPaystack' className={styles.closeButton} onClick={closePaymentContainer}>x</div>

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
