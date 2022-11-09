import { useRouter } from "next/router"

const Product = () => {

    const router = useRouter();
    const { id } = router.query;
    <div>
        <h2>THIS IS THE SINGLE PRODUCT PAGE</h2>
    </div>
}

export default Product