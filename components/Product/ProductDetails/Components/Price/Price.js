import * as styles from "./Price.module.css";

export default function Price({ discountDetails, price, currentPrice }) {
  return (
    <div className={styles.wrapper}>
      {discountDetails.length !== 0 && discountDetails[0].active ? (
        <>
          <p>
            <span>
              <del
                style={{
                  marginRight: "5px",
                  fontSize: "1.4rem",
                  color: "#5b5b5b9c",
                }}
              >
                N{price}
              </del>
              N{currentPrice}
            </span>
            <div
              className={styles.sale}
            >{`${discountDetails[0].percentage}%`}</div>
          </p>
          <span className={styles.discountLabel}>~Discount applied~</span>
        </>
      ) : (
        <p>{currentPrice}</p>
      )}
    </div>
  );
}
