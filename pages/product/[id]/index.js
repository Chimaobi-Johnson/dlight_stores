import { useRouter } from "next/router";
import ProductDetails from "../../../components/Product/ProductDetails/ProductDetails";
import { recommendedProducts } from "../../../data/dummy";
import BasicLayout from "../../../components/layout/BasicLayout/BasicLayout";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = recommendedProducts.find(item => item.id == id ? item : '')

  return (
    <BasicLayout metaData={{ title: product.title }}>
      <h2>THIS IS THE SINGLE PRODUCT PAGE {id} </h2>
      <ProductDetails />
    </BasicLayout>
  );
};

export default Product;
