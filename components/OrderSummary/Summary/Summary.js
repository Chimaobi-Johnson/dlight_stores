import { useEffect, useState } from "react";
import * as styles from "./Summary.module.css";
import Image from "next/image";

const Summary = (props) => {
  const { cartItems } = props;

  useEffect(() => {
    sortedCartItems();
  }, []);

  const [items, setItems] = useState([]);

  const sortedCartItems = () => {
    // group by product Id
    let itms = [];
    const groupByName = cartItems.reduce((group, item) => {
      const { name } = item;
      group[name] = group[name] ?? [];
      group[name].push(item);
      return group;
    }, {});

    console.log(groupByName);

    for (const [key, value] of Object.entries(groupByName)) {
      itms.push({
        productName: key,
        imageUrl: value[0].imageUrl,
        variants: value,
        colors: value.map((el) => el.color),
        sizes: value.map((el) => el.size),
        quantity: value.map((el) => Number(el.quantity)),
      });
    }
    setItems(itms);
  };

  console.log(items)

  return (
    <div className={styles.wrapper}>
      <h3>Final Review</h3>
      <div className={styles.itemsContainer}>

        {items.map((el) => (
          <div className={styles.detailsWrapper}>
            <div key={Math.random() * 10} className={styles.items}>
              <h2>{el.productName}</h2>
              <h4>
                Total Quantity:{" "}
                {el.quantity.reduce(
                  (accumulator, currentValue) => accumulator + currentValue
                )}
              </h4>
              <p className={styles.breakdown}>Breakdown:</p>
              <div className={styles.textContainer}>
              <ul>
                {el.variants.map((x) => (
                  <li key={Math.random() * 18} >
                    <span>Size:</span> {x.size ? x.size : 'N/A'} - {" "}
                    <span>Color:</span>
                      {x.color ? (
                      <>
                        <span
                          style={{
                            backgroundColor: x.color,
                            width: "15px",
                            height: "15px",
                            display: "inline-block",
                            marginLeft: "7px",
                            borderRadius: "100%",
                          }}
                        ></span>
                      </>
                    ) : (
                      "N/A"
                    )}
                    <span style={{ marginLeft: '.8rem' }}>Qty:</span>{x.quantity} 
                  </li>
                ))}
              </ul>
              </div>

            </div>
            <div className={styles.imageContainer}>
                <Image layout="fill" src={el.imageUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
