import { useEffect, useState } from "react";
import ExtendedMenu from "./ExtendedMenu/ExtendedMenu";
import Image from "next/image";

import * as styles from "./Navigation.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { initCart, initMobileMenu, initSearchBar } from "../../../store/actions/app";
import MobileMenu from "./MobileMenu/MobileMenu";
import Search from "../../ui/Search/Search";
import { isEmpty } from "../../../utils/helperFunctions";
import axios from "axios";
import UserIcon from "./UserIcon/UserIcon";
import { storeProducts } from "../../../store/actions/products";
import { useRouter } from "next/router";
import Modal from "../../ui/Modal/Modal";

const Navigation = (props) => {
  const { user } = props 

  console.log(props)
  

  const [ linkToLogin, setLinkToLogin ] = useState('/auth/login')

  const router = useRouter()
  const currentPage = router.pathname.split('/')[1];

  useEffect(() => {
    if(currentPage === 'checkout') {
      setLinkToLogin(`/auth/login?status=checkout`)
    } 
  }, [currentPage])



  const [active, setActive] = useState(false);
  const dispatch = useDispatch()

  const cart = useSelector(data => data.app.cart.cartItems)
  const content = useSelector(data => data.app.content)

  const initExtendedMenu = () => {
    setActive(!active);
  };

  const extendMenuIcon = {
    marginLeft: '2px',
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/products')
        if(response.status === 200) {
          dispatch(storeProducts(response.data.products))
        } 
      } catch (error) {
        console.log(error)
      }
    }

    getProducts()

  }, [])

  const [modal, setModal] = useState(false)

  const initCartHandler = () => {
    dispatch(initCart())
  }

  const openModal = () => {
    setModal(!modal)
  }

  return (
    <>
    <Modal open={modal} openModal={openModal}>{content ? content.shippingInfo : 'loading...'}</Modal>
    <header className={styles.wrapper}>
      <ExtendedMenu openModal={openModal} activate={active} />
      <MobileMenu />
      <Search />
      <div className={styles.searchContainer}>
        <div className={styles.image}>
          {/* <Image onClick={() => dispatch(initSearchBar())} width={100} height={100} className={styles.searchIcon} src="/icons/search.png" alt="_search" /> */}
          <Image onClick={() => dispatch(initMobileMenu())} width={100} height={100} className={styles.barIcon} src="/icons/bars.png" alt="_option" />
        </div>
      </div>
      <div className={styles.menuContainer}>
        <ul>
          <li
            className={styles.shop}
            onMouseOver={initExtendedMenu}
            onClick={initExtendedMenu}
          >
            Shop
            <Image width={10} height={10} style={extendMenuIcon} src="/icons/next.png" alt="_show" />
          </li>
          <Link href={'/about'}><li>About Us </li></Link>
          <li className={styles.logo}><Link href="/"><Image width={300} height={100} src="/logo/logo-dark-text.png" alt="" /></Link></li>
          <li>Blog</li>
          <Link href={'/reviews'}><li>Reviews</li></Link>
        </ul>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoIcons}>
          <div className={styles.accountIcon}>
            {/* {isEmpty(user) ? (
              <Link href={linkToLogin}><Image width={100} height={100} src="/icons/user.png" alt="account" /></Link>
            ): <UserIcon firstName={user.firstName} lastName={user.lastName} />} */}
          </div>
          <div onClick={initCartHandler} className={styles.cartIcon}>
            {!cart || cart.length === 0 ? null : (
              <div className={styles.cartCounter}>
                <span>{cart.length}</span>
              </div>
            )}
      
            <Image width={100} height={100} src="/icons/shopping-cart.png" alt="cart" />
          </div>
        </div>
      </div>
    </header>

    </>
  );
};

export default Navigation;
