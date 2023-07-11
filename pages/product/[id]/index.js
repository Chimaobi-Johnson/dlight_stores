import { useRouter } from "next/router";
import ProductDetails from "../../../components/Product/ProductDetails/ProductDetails";
import { recommendedProducts } from "../../../data/dummy";
import BasicLayout from "../../../components/layout/BasicLayout/BasicLayout";
import QuickInfo from "../../../components/layout/QuickInfo/QuickInfo";
import RelatedItems from "../../../components/layout/RelatedItems/RelatedItems";
import Pagination from "../../../components/ui/Pagination/Pagination";
import axios from 'axios';
import * as flatted from 'flatted';

import { useSelector } from "react-redux";

const Product = (props) => {
  
  const parsedProducts = flatted.parse(props.products)

  const {product, category} = parsedProducts;

  console.log(parsedProducts)

  const currentIndex = useSelector(data => data.products.product.currentIndex);

  const products = useSelector(data => data.products.products);



  const metaData={ title: product ? product.name : null }
  return (
    <BasicLayout meta={metaData}>
      <ProductDetails product={product ? product : null} />
      <QuickInfo />
      <RelatedItems product={product} category={category} />
      <Pagination products={parsedProducts} currentIndex={currentIndex}  />
    </BasicLayout>
  );
};

export async function getStaticPaths(context) {

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
      products: flatted.stringify(response.data),
    },
    revalidate: 1
  }

}

export default Product;
