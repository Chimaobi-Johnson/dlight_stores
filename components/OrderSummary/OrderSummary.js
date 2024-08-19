import * as styles from "./OrderSummary.module.css";
import { useDispatch, useSelector } from "react-redux";
import Summary from "./Summary/Summary";
import PaystackPage from "../CheckoutPage/PaystackPage/PaystackPage";
import Button from "../ui/Button/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isEmpty } from "../../utils/helperFunctions";
import { NumericFormat } from "react-number-format";

const OrderSummary = (props) => {
    const cartItems = useSelector((data) => data.app.cart.cartItems);
    const subTotal = useSelector((data) => data.app.cart.subTotal);
    const deliveryData = useSelector((data) => data.app.deliveryData);

    const [updatedSubTotal, setUpdatedSubtotal] = useState(subTotal)

    useEffect(() => {
        let mql = window.matchMedia("(max-width: 700px)");
        if(deliveryData.shippingLocation && deliveryData.deliveryType === 'delivery') {
            setUpdatedSubtotal(Number(subTotal) + Number(deliveryData.shippingLocation.locationPrice))
        }
    }, [setUpdatedSubtotal, deliveryData, subTotal])

    const loggedUser = useSelector((data) => data.user);

    const qtyArr = cartItems.map(el => Number(el.quantity));
    const totalQty = qtyArr.length === 0 ? 0 : qtyArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      )
    const initPaymentContainer = () => {
        if(window.matchMedia("(max-width: 700px)").matches) {
            window.scrollTo(0, 0);
            document.getElementById('orderSummary').style.display = 'none';
            setTimeout(() => {
                document.getElementById('contentWrapper2').style.gridTemplateColumns = '1fr';
                document.getElementById('paymentDetails').style.display = 'grid';
            }, 1000);
            setTimeout(() => {
                document.getElementById('paystackContainer').style.opacity = 1;
                document.getElementById('closeButtonPaystack').style.opacity = 1;
                 document.getElementById('orderSummary').style.gridTemplateColumns = '1fr';
                 document.getElementById('orderSummary').style.opacity = 1;
    
            }, 2000);
        } else {
            window.scrollTo(0, 0);
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


    }
    const closePaymentContainer = () => {

        if(window.matchMedia("(max-width: 700px)").matches) {
            document.getElementById('paymentDetails').style.display = 'none';

            setTimeout(() => {
                document.getElementById('contentWrapper2').style.gridTemplateColumns = '1fr';
                document.getElementById('orderSummary').style.display = 'block';

            }, 1000);
            setTimeout(() => {
                document.getElementById('orderSummary').style.gridTemplateColumns = '1fr';
                document.getElementById('closeButtonPaystack').style.opacity = 0;
                document.getElementById('orderSummary').style.opacity = 1;
    
            }, 2000);
        } else {
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


    }
  return (
    <div className={styles.wrapper}>
        <div id='contentWrapper2' className={styles.contentWrapper}>
            <div id='orderSummary' className={styles.orderSummary}>
                <div className={styles.itemSummary}>
                    <Summary cartItems={cartItems} subTotal={updatedSubTotal} />
                    <div className={styles.totalContainer}>
                        {deliveryData.shippingLocation && deliveryData.deliveryType === 'delivery' ? (
                        <p>+ <NumericFormat onChange={() => {}} value={deliveryData.shippingLocation.locationPrice} prefix="N" displayType="text" thousandSeparator="," /> shipping fee ({deliveryData.shippingLocation.locationName})</p>
                        ) : ''}
                        <h1>Total: <NumericFormat value={updatedSubTotal} prefix="N" displayType="text" thousandSeparator="," /> {`(${totalQty} items)`}</h1>
                    </div>
                </div>
                <div className={styles.contactInfo}>
                        <h3>Contact Details</h3>
                        {deliveryData.deliveryType === 'delivery' ? (
                            <ul>
                                <li><span>First Name:</span> {deliveryData.firstName}</li>
                                <li><span>Last Name:</span> {deliveryData.lastName}</li>
                                <li><span>Email:</span> {deliveryData.userEmail}</li>
                                <li><span>Phone No:</span> {deliveryData.mobile}</li>
                                <li><span>City:</span> {deliveryData.city}</li>
                                <li><span>StreetName:</span> {deliveryData.streetname}</li>
                                <li><span>House No:</span> {deliveryData.houseno}</li>
                                <li><span>Additional Info:</span> {deliveryData.additionalInfo}</li>

                            </ul>
                        ) : (
                            <ul>
                                <li>Email: {deliveryData.userEmail}</li>
                                <li>Phone No: {deliveryData.mobile}</li>

                            </ul>
                        )}
                        <div className={styles.buttonContainer}>
                            <Button variant="secondary" onClick={initPaymentContainer}>Proceed {'-->'}</Button>
                            <Link href={'/checkout'}><Button>Go back</Button></Link>

                        </div>
            
                </div>
        

            </div>

            <div id="paymentDetails" className={styles.paymentDetails}>
            <div id='closeButtonPaystack' className={styles.closeButton} onClick={closePaymentContainer}>x</div>

            <div id='paystackContainer' className={styles.paystackContainer}>
                <div className={styles.header}>
                <h1>Payment Details</h1>
                <p>Provide your payment details to complete your purchase</p>
                <PaystackPage
                    amount={updatedSubTotal * 100}
                    cartItems={cartItems}
                    deliveryData={deliveryData}
                    userId={!isEmpty(loggedUser) ? loggedUser._id : null}
                />
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default OrderSummary;
