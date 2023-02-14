import { useState } from "react";
import ExtendedMenu from "./ExtendedMenu/ExtendedMenu";
import Image from "next/image";

import * as styles from "./Navigation.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { initCart, initMobileMenu } from "../../../store/actions/app";
import MobileMenu from "./MobileMenu/MobileMenu";

const Navigation = (props) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch()

  const cart = useSelector(data => data.app.cart.cartItems)

  const initExtendedMenu = () => {
    setActive(!active);
  };

  const extendMenuIcon = {
    marginLeft: '2px',
  }



  const initCartHandler = () => {
    dispatch(initCart())
  }

  return (
    <header className={styles.wrapper}>
      <ExtendedMenu activate={active} />
      <MobileMenu />
      <div className={styles.searchContainer}>
        <div className={styles.image}>
          <Image width={100} height={100} className={styles.searchIcon} src="/icons/search.png" alt="_search" />
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
          <li>Reviews</li>
        </ul>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoIcons}>
          <div className={styles.accountIcon}>
            <Link href="/auth/login"><Image width={100} height={100} src="/icons/user.png" alt="account" /></Link>
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
  );
};

export default Navigation;
