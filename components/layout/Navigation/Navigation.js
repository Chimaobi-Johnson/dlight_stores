import { useState } from "react";
import ExtendedMenu from "./ExtendedMenu/ExtendedMenu";
import Image from "next/image";

import * as styles from "./Navigation.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { initCart } from "../../../store/actions/app";

const Navigation = (props) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch()

  const initExtendedMenu = () => {
    setActive(!active);
  };

  const extendMenuIcon = {
    marginLeft: '2px',
  }

  const initMobileMenu = () => {
    // console.log("yess")
  }

  const initCartHandler = () => {
    dispatch(initCart())
  }

  return (
    <header className={styles.wrapper}>
      <ExtendedMenu activate={active} />
      <div className={styles.searchContainer}>
        <div className={styles.image}>
          <Image width={100} height={100} className={styles.searchIcon} src="/icons/search.png" alt="_search" />
          <Image onClick={initMobileMenu} width={100} height={100} className={styles.barIcon} src="/icons/bars.png" alt="_option" />
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
            <Image width={100} height={100} src="/icons/shopping-cart.png" alt="cart" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
