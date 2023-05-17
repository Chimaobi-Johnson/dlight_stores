import BasicLayout from "../components/layout/BasicLayout/BasicLayout";
import Categories from "../components/Home/Categories/Categories";
import ProductInfo from "../components/Home/ProductInfo/ProductInfo";
import Recommended from "../components/Home/Recommended/Recommended";
import ImageSlider from "../components/ui/ImageSlider/ImageSlider";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeProducts } from "../store/actions/products";

import axios from 'axios';

import styles from "../styles/Home.module.css";


function Home(props) {

  const { products, categories } = props;

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(storeProducts(products))
  }, [])

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
      <Recommended data={products} />
      <Categories data={categories} />
      <ProductInfo />
    </BasicLayout>
  );
}

export async function getStaticProps() {

 const response = await axios.get(process.env.BACKEND_URL + '/products')
 const response2 = await axios.get(process.env.BACKEND_URL + '/categories ')


  return {
    props: {
      products: response.data.products,
      categories: response2.data.categories,
    },
    revalidate: 1
  }

}

export default Home