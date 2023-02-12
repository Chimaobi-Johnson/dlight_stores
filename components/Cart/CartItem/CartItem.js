import Image from "next/image";
import Input from "../../ui/Input/Input";
import sampleImage from '../../../public/products/plastic-cups.png';

import * as styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../../store/actions/app";

const CartItem = (props) => {

  const { productId, name, price, quantity, size, imageUrl } = props.item;

  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
       <Image width={80} height={70} src={imageUrl} alt="" />
      </div>
      <div className={styles.contentContainer}>
        <h4 className={styles.heading4}>{name}</h4>
        <span>2.5/6 Pieces</span>
        <div className={styles.inputWrapper}>
          <div className={styles.inputContainer}>
            <div className={styles.decreaseBtn}>-</div>
            <input type="text" value={quantity} />
            <div className={styles.increaseBtn}>+</div>
          </div>
        </div>
      </div>
      <div onClick={(id) => dispatch(removeCartItem(productId))} className={styles.close}>
        <Image style={{ cursor: 'pointer' }} width={10} height={10} src="/icons/close-icon.png" alt="_search" />
        <p>N{price}</p>
      </div>
    </div>
  );
};

export default CartItem;
