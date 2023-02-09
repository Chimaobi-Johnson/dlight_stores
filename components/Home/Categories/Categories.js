import Link from "next/link";
import styles from "./Categories.module.css";

const Categories = (props) => {
  const { data } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>MAKE SOMEONE HAPPY WITH A GIFT</h2>
      </div>
      <div className={styles.content}>
        {data.length !== 0
          ? data.map((category, index) => {
              return (
                <Link
                  key={index}
                  href="/products/[id]"
                  as={`/products/${category._id}`}
                >
                  <div
                    key={index}
                    style={{
                      backgroundImage: `linear-gradient(to right, #ffffff49, #0000009c), url(${category.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPositionY: "30%",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <h2 className={styles.categoryTitle}>
                      {category.name} <div className={styles.underline}></div>
                    </h2>
                  </div>
                </Link>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Categories;
