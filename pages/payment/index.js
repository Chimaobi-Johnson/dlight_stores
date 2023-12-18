import CheckoutPage from "../../components/CheckoutPage/CheckoutPage"
import ConfirmationPage from "../../components/Confirmation/Confirmation"
import OrderSummary from "../../components/OrderSummary/OrderSummary"
import BasicLayout from "../../components/layout/BasicLayout/BasicLayout"


const Payment = () => {

    return (
        <BasicLayout metaData={{
            title: "Payment Confirmation | Delight Stores",
            description: "Everything household",
            keywords: "gift items, online store, wedding gifts, souvenirs, household items"
        }}>
            <ConfirmationPage />
        </BasicLayout>
    )
}


export default Payment