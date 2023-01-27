import Image from "next/image";
import Input from "../../ui/Input/Input";
import sampleImage from '../../../public/products/plastic-cups.png';

import * as styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
       <Image width={100} height={100} src={sampleImage} alt="" />
      </div>
      <div className={styles.contentContainer}>
        <h4 className={styles.heading4}>Awesome pots for cooking</h4>
        <span>2.5/6 Packs</span>
        <div className={styles.inputWrapper}>
          <div className={styles.inputContainer}>
            <div className={styles.decreaseBtn}>-</div>
            <input type="text" defaultValue={0} />
            <div className={styles.increaseBtn}>+</div>
          </div>
        </div>
      </div>
      <div className={styles.close}>
        <span>close</span>
      </div>
    </div>
  );
};

export default CartItem;
