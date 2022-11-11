import BasicLayout from "../BasicLayout/BasicLayout";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./SidebarLayout.module.css";

const SidebarLayout = (props) => {
  return (
    <BasicLayout metaData={props.metaData}>
        <div className={styles.headerContainer}>
            <div
                className={styles.header}
                style={{
                backgroundImage: `linear-gradient(to right, #ffffff49, #0000009c), url('/site/landing-gift1.png')`,
                backgroundSize: "cover",
                backgroundPositionY: "center",
                backgroundRepeat: "no-repeat",
                }}
            >
                <h1>Best sellers</h1>
            </div>
        </div>
            {props.children}
    </BasicLayout>
  );
};

export default SidebarLayout;
