import ReviewsPage from "../../components/ReviewsPage/ReviewsPage"
import BasicLayout from "../../components/layout/BasicLayout/BasicLayout"


const Reviews = () => {

    return (
        <BasicLayout metaData={{
            title: "Reviews | Delight Stores",
            description: "Everything household",
            keywords: "gift items, online store, wedding gifts, souvenirs, household items"
        }}>
        <ReviewsPage />
        </BasicLayout>
    )
}


export default Reviews