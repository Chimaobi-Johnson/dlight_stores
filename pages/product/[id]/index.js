import { useRouter } from "next/router";
import ProductDetails from "../../../components/Product/ProductDetails/ProductDetails";
import { recommendedProducts } from "../../../data/dummy";
import BasicLayout from "../../../components/layout/BasicLayout/BasicLayout";

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
  console.log(product)
//   metaData={{ title: product ? product.title : 'Product' }}
  return (
    <BasicLayout>
      <ProductDetails product={product ? product : dummyProduct} />
    </BasicLayout>
  );
};

export default Product;
