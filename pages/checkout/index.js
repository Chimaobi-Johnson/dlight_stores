import CheckoutPage from "../../components/CheckoutPage/CheckoutPage"
import BasicLayout from "../../components/layout/BasicLayout/BasicLayout"


const Checkout = () => {

    return (
        <BasicLayout metaData={{
            title: "Order Overview | Delight Stores",
            description: "Everything household",
            keywords: "gift items, online store, wedding gifts, souvenirs, household items"
        }}>
            <CheckoutPage />
        </BasicLayout>
    )
}


export default Checkout