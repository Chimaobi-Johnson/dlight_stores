import Link from "next/link";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const { categories, currentCategory } = props;

  return (
    <div className={styles.wrapper}>
      <ul>
        {categories.length !== 0
          ? categories.map((category, index) => {
              return (
                <Link
                  key={index}
                  href="/products/[id]"
                  as={`/products/${category._id}`}
                >
                  <li
                    className={
                      category._id === currentCategory ? styles.active : null
                    }
                    key={index}
                    id="linkItem"
                  >
                    {category.name}
                  </li>
                </Link>
              );
            })
          : ""}
      </ul>
    </div>
  );
};

export default Sidebar;
