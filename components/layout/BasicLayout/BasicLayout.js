import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

import styles from "./BasicLayout.module.css";
import Meta from "../Meta/Meta";
import MobileMenu from "../Navigation/MobileMenu/MobileMenu";
import Cart from "../../Cart/Cart";

const BasicLayout = (props) => {
    const { meta } = props;
  return (
    <div className={styles.wrapper}>
      <Meta
        title={meta ? meta.title : 'Delight stores'}
        description={meta ? meta.description : 'Souviner and Household items'}
        keywords={meta ? meta.keywords : 'Souviners, gift items, household, household items, delight stores'}
      />
      {/* <MobileMenu /> */}
      <Cart />
      <Navigation />
      <div className={styles.contentContainer}>
       {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default BasicLayout;
