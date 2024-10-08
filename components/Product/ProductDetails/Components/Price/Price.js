import { NumericFormat } from "react-number-format";
import * as styles from "./Price.module.css";

export default function Price({ discountDetails, price, currentPrice }) {
  return (
    <div className={styles.wrapper}>
      {discountDetails.length !== 0 && discountDetails[0].active ? (
        <>
          <div>
            <span>
              <del
                style={{
                  marginRight: "5px",
                  fontSize: "1.4rem",
                  color: "#5b5b5b9c",
                }}
              >
                <NumericFormat value={price} onChange={() => {}} prefix="N" displayType="text" thousandSeparator="," />
              </del>
              <NumericFormat value={currentPrice} onChange={() => {}} prefix="N" displayType="text" thousandSeparator="," />
            </span>
            <div
              className={styles.sale}
            >{`${discountDetails[0].percentage}%`}</div>
          </div>
          <span className={styles.discountLabel}>~Discount applied~</span>
        </>
      ) : (
        <div><NumericFormat value={currentPrice} prefix="N" displayType="text" thousandSeparator="," /></div>
      )}
    </div>
  );
}
