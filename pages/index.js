import BasicLayout from "../components/layout/BasicLayout/BasicLayout";
import Categories from "../components/Home/Categories/Categories";
import ProductInfo from "../components/Home/ProductInfo/ProductInfo";
import Recommended from "../components/Home/Recommended/Recommended";
import ImageSlider from "../components/ui/ImageSlider/ImageSlider";
import React, { useEffect } from "react";
import axios from 'axios';

import styles from "../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { storeProducts } from "../store/actions/products";
import { storeLoggedInUser, updateUserCart } from "../store/actions/user";
import { useSelector } from "react-redux";
import { addCartItemsToLoggedUserCart, isEmpty } from "../utils/helperFunctions";

function Home(props) {

  const { products, categories } = props;

  const loggedUser =  useSelector(data => data.user)

  const dispatch = useDispatch()

  const localCartItems = useSelector(data => data.app.cart.cartItems);

  useEffect(() => {

    const getUser = () => {
  
      const instance = axios.create({
        withCredentials: true
      });
      instance.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/current_user')
      .then(data => {
         console.log(data)
        if(!data.data.user) {
          // clear redux state
          dispatch(storeLoggedInUser({}))
        } else {
          dispatch(storeLoggedInUser(data.data.user))
        }
     
      })
      .catch(err => {
        console.log(err)
      })
    }

    dispatch(storeProducts(products))
    getUser()

  }, [products])

  useEffect(() => {
    if(!isEmpty(loggedUser)) {
      dispatch(updateUserCart(localCartItems, loggedUser.cart.items))
    } 
  }, [loggedUser])

  return (
    <BasicLayout
      user={loggedUser}
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