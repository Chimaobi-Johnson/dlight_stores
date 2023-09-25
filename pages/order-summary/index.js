import CheckoutPage from "../../components/CheckoutPage/CheckoutPage"
import OrderSummary from "../../components/OrderSummary/OrderSummary"
import BasicLayout from "../../components/layout/BasicLayout/BasicLayout"


const FinalSummary = () => {

    return (
        <BasicLayout metaData={{
            title: "Order Overview | Delight Stores",
            description: "Everything household",
            keywords: "gift items, online store, wedding gifts, souvenirs, household items"
        }}>
            <OrderSummary />
        </BasicLayout>
    )
}


export default FinalSummary