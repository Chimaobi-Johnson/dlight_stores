import Image from "next/image";
import * as styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { removeCartItem, updateItemQty, updateSubTotal } from "../../../store/actions/app";
import { useState } from "react";
import Link from "next/link";


const CartItem = (props) => {
  const { productId, name, price, color, quantity, size, imageUrl, userId } = props.item;
  const dispatch = useDispatch();

  const [editingMode, setEditingMode] = useState(false);
  const [currentQuantity, setCurrentQty] = useState(quantity)

  const setEditing = () => {
    setEditingMode(true)
  }

  const updateItemQuantity = () => {
    const initialPrice = price / quantity;
    const updatedPrice = initialPrice * currentQuantity;
    dispatch(updateItemQty(productId, color, size, currentQuantity, updatedPrice))
    dispatch(updateSubTotal())
    setEditingMode(false)
  }

  const changeQtyHandler = (e) => {
    if(e.target.value < 1) {
      setCurrentQty(1)
    } else {
      setCurrentQty(e.target.value)
    }
  }

  const removeCartItemandUpdate = (prodId) => {
      // remove item
      dispatch(removeCartItem(prodId))
      dispatch(updateSubTotal())

      // if user is loggedin, update user cart
  }

  const renderColor = (color) => {
    return color ? <span style={{ backgroundColor: color.code, display: 'block', width: '15px', height: '15px', marginLeft: '.2rem', borderRadius: '100%' }}></span> : ''
  }

  const renderSize = (size) => {
    return size ? size.label : ''
  }

  const renderSlash = (size, color) => {
    return size && color ? '/' : ''
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image width={80} height={70} src={imageUrl} alt="" />
      </div>
      <div className={styles.contentContainer}>
        <Link href={'/product/' + productId}>
         <h4 className={styles.heading4}>{name}</h4>
        </Link>
        <div className={styles.sizeColorContainer}>{renderSize(size)} {renderSlash(size, color)}{renderColor(color)}</div>
        <div className={styles.quantityContainer}>
          <div className={styles.inputLabel}>
            <p>Qty</p>
          </div>
          {!editingMode ? (
            <div className={styles.qtyText}>
              <p>{quantity}</p>
              <div className={styles.editButton} onClick={setEditing}>edit</div>
            </div>
          ) : (
            <div className={styles.updateWrapper}>
              <div className={styles.inputContainer}>
                <input type="number" defaultValue={quantity} onChange={(e) => changeQtyHandler(e)} value={currentQuantity} />
              </div>
              <div className={styles.updateContainer}>
                <span onClick={updateItemQuantity}>Update</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        onClick={(id) => removeCartItemandUpdate(productId)}
        className={styles.close}
      >
        <Image
          style={{ cursor: "pointer" }}
          width={10}
          height={10}
          src="/icons/close-icon.png"
          alt="_search"
        />
        <p>N{price}</p>
      </div>
    </div>
  );
};

export default CartItem;
