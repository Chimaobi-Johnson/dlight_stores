import { useRouter } from "next/router";
import ProductDetails from "../../../components/Product/ProductDetails/ProductDetails";
import { recommendedProducts } from "../../../data/dummy";
import BasicLayout from "../../../components/layout/BasicLayout/BasicLayout";
import QuickInfo from "../../../components/layout/QuickInfo/QuickInfo";
import RelatedItems from "../../../components/layout/RelatedItems/RelatedItems";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = recommendedProducts.find(item => item.id == id ? item : '')
  const dummyProduct = {
    id: 23,
    title: 'Dummy title',
    image: '/products/pot.png',
    description: 'Hallelujah'
  }
//   metaData={{ title: product ? product.title : 'Product' }}
  return (
    <BasicLayout>
      <ProductDetails product={product ? product : dummyProduct} />
      <QuickInfo />
      <RelatedItems />
    </BasicLayout>
  );
};

export default Product;
