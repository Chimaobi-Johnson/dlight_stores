import React from "react";
import { usePaystackPayment } from 'react-paystack';
import Button from "../../ui/Button/Button";
import { useRouter } from "next/router";
import axios from "axios";


const PaystackPage = props => {
    const router = useRouter();
    const { amount, userId, cartItems, deliveryData } = props;
    const { userEmail } = deliveryData;

    const config = {
        reference: (new Date()).getTime().toString(),
        email: 'chimaobi@gmail.com',
        amount: amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_42b22a74c63b11e8f3671571e83d0431f3932c0c',
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      // delivery type issue *************
      const data = {
        ...deliveryData,
        products: cartItems,
        paymentRef: reference,
        purchasedBy: userId ? userId : null
      }
      console.log(data)

      axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/store_payment_details`, data)
      .then(res => {
        if(res.status === 200) {
            router.push(`/payment?status=success`)
        }
      }).catch(err => {
        // payment successful but data isnt stored
        // redirect user
        // send email to server with info
        router.push(`/payment?status=datafail`)
        console.log(err)
      })
    };
  
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }

    const PaystackHook = () => {
        const initializePayment = usePaystackPayment(config);
        return (
          <div>
              <Button onClick={() => {
                  initializePayment(onSuccess, onClose)
              }}>Pay with Paystack</Button>
          </div>
        );
    };

    return (
        <PaystackHook />
    )
}

export default PaystackPage