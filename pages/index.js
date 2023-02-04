import BasicLayout from "../components/layout/BasicLayout/BasicLayout";
import Categories from "../components/Home/Categories/Categories";
import ProductInfo from "../components/Home/ProductInfo/ProductInfo";
import Recommended from "../components/Home/Recommended/Recommended";
import ImageSlider from "../components/ui/ImageSlider/ImageSlider";

import axios from 'axios';

import styles from "../styles/Home.module.css";

function Home(props) {
  // console.log(props)
  return (
    <BasicLayout
      metaData={{
        title: "Home | Delight Stores",
        description: "Everything household",
        keywords:
          "gift items, online store, wedding gifts, souvenirs, household items",
      }}
    >
      <ImageSlider />
      <Recommended />
      <Categories />
      <ProductInfo />
    </BasicLayout>
  );
}

export async function getStaticProps() {

  let products = null;
  axios.get(process.env.BACKEND_URL + '/products')
  .then(products => {
    console.log(products)
    products = products
  }).catch(err => {
    console.log(err)
  })

  return {
    props: {
      products: products,
      categories: null
    },
    revalidate: 1
  }

}

export default Home