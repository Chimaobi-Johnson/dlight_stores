import { useState } from "react";
import ExtendedMenu from "./ExtendedMenu/ExtendedMenu";
import * as styles from "./Navigation.module.css";

const Navigation = (props) => {
  const [active, setActive] = useState(false);

  const initExtendedMenu = () => {
    setActive(!active);
  };

  return (
    <header className={styles.wrapper}>
      <ExtendedMenu activate={active} />
      <div className={styles.searchContainer}>
        <div className={styles.image}>
          <img className={styles.searchIcon} src="/icons/search.png" alt="_search" />
          <img className={styles.barIcon} src="/icons/bars.png" alt="_option" />
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
          </li>
          <li>Care Guide</li>
          <li className={styles.logo}><img src="/logo/logo-dark-text.png" alt="" /></li>
          <li>Blog</li>
          <li>Reviews</li>
        </ul>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoIcons}>
          <div className={styles.accountIcon}>
            <img src="/icons/user.png" alt="account" />
          </div>
          <div className={styles.cartIcon}>
            <img src="/icons/shopping-cart.png" alt="cart" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
