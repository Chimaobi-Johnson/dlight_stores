import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

import styles from "./BasicLayout.module.css";
import Meta from "../Meta/Meta";
import MobileMenu from "../Navigation/MobileMenu/MobileMenu";
import Cart from "../../Cart/Cart";
import { useDispatch } from "react-redux";
import { storeLoggedInUser, updateUserCart } from "../../../store/actions/user";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import axios from "axios";

const BasicLayout = (props) => {

    const { meta } = props;

    const loggedUser =  useSelector(data => data.user)
    const loggedUser2 =  useSelector(data => data)


    console.log(loggedUser)
    console.log(loggedUser2)


    const dispatch = useDispatch()
  
    const localCartItems = useSelector(data => data.app.cart.cartItems);

    useEffect(() => {



      const getUser = () => {
  
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/current_user')
        .then(data => {
          console.log(data)
          if(!data.data.user) {
            // clear redux state
            dispatch(storeLoggedInUser({}))
            // update local cart
  
          } else {
            dispatch(storeLoggedInUser(data.data.user))
            // update local cart
            dispatch(updateUserCart(localCartItems, data.data.user.cart.items))
          }
       
        })
        .catch(err => {
          console.log(err)
        })
      }
  
      getUser()
  
    }, [])

  return (
    <div className={styles.wrapper}>
      <Meta
        title={meta ? meta.title : 'Delight stores'}
        description={meta ? meta.description : 'Souviner and Household items'}
        keywords={meta ? meta.keywords : 'Souviners, gift items, household, household items, delight stores'}
      />
      {/* <MobileMenu /> */}
      <Cart />
      <Navigation user={loggedUser} />
      <div className={styles.contentContainer}>
       {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default BasicLayout;
