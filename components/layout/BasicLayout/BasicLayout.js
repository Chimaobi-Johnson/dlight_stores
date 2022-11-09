import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

import styles from "./BasicLayout.module.css";
import Meta from "../Meta/Meta";

const BasicLayout = (props) => {
    const meta = props.metaData;
  return (
    <div className={styles.wrapper}>
      <Meta
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
      />
      <Navigation />
      <div className={styles.contentContainer}>
       {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default BasicLayout;
