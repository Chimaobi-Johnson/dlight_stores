import { useRouter } from "next/router";
import ProductDetails from "../../../components/Product/ProductDetails/ProductDetails";
import { recommendedProducts } from "../../../data/dummy";
import BasicLayout from "../../../components/layout/BasicLayout/BasicLayout";
import QuickInfo from "../../../components/layout/QuickInfo/QuickInfo";
import RelatedItems from "../../../components/layout/RelatedItems/RelatedItems";
import Pagination from "../../../components/ui/Pagination/Pagination";
import axios from 'axios';

import { useSelector } from "react-redux";

const Product = (props) => {
  
  const { product } = props.product;
  console.log(product)

  const currentIndex = useSelector(data => data.products.product.currentIndex);

  const products = useSelector(data => data.products.products);



  const metaData={ title: product ? product.name : null }
  return (
    <BasicLayout meta={metaData}>
      <ProductDetails product={product ? product[0] : null} />
      <QuickInfo />
      <RelatedItems product={product[0]} category={product[0].categoryDetails[0]} />
      <Pagination products={products} currentIndex={currentIndex}  />
    </BasicLayout>
  );
};

export async function getStaticPaths() {

  const response = await axios.get(process.env.BACKEND_URL + '/products/ids');

  return {
    fallback: false,
    paths: response.data.ids.map(product => ({ params: { id: product._id }}))
  }

}

export async function getStaticProps(context) {

  const productId = context.params.id;

  const response = await axios.get(process.env.BACKEND_URL + '/product/?id=' + productId)
  return {
    props: {
      product: response.data,
    },
    revalidate: 1
  }

}

export default Product;
