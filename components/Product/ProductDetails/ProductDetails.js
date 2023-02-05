import Image from "next/image";
import { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import goodTick from "../../../public/svg/good_green.svg";

import styles from "./ProductDetails.module.css";
import Cart from "../../Cart/Cart";
import Search from "../../ui/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { initCart } from "../../../store/actions/app";

const ProductDetails = (props) => {
  const {
    name,
    imagesUrl,
    price,
    sizes,
    subheading,
    description,
    deliveryStatus,
  } = props.product;

  const dispatch = useDispatch();
  const appData = useSelector((data) => data);

  const [currentImage, setCurrentImage] = useState(0);

  const changeImageHandler = (index) => {
    setCurrentImage(index);
  };


  const [isActive, setActive] = useState(false)

  const selectSize = (size) => {
    setActive(!isActive)
  };

  const initCartHandler = () => {
    dispatch(initCart());
  };

  return (
    <div className={styles.wrapper}>
      {/* <Search /> */}
      {/* <Cart /> */}
      <div className={styles.imageContainer}>
        <div className={styles.zoomImageWrapper}>
          {imagesUrl.map((image, index) => {
            return (
              <div
                key={index}
                onClick={(id) => changeImageHandler(index)}
                className={styles.image1}
              >
                <Image src={image} layout="fill" alt="" />
              </div>
            );
          })}
        </div>
        <div className={styles.imageWrapper}>
          <Image src={imagesUrl[currentImage]} layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <h1>{name}</h1>
        </div>
        <div className={styles.price}>
          <p>N {price}</p>
        </div>
        <div className={styles.size}>
          {sizes.length === 0 || sizes[0] === "" ? null : (
            <>
              <h4>Select size</h4>
              <ul>
                {sizes.map((size, index) => {
                  return (
                    <li
                      key={index + Math.random() * 100}
                      onClick={(s) => selectSize(size)}
                      className={isActive ? styles.active : null}
                    >
                      {size}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
        <div className={styles.quantity}>
          <Input type="number" defaultValue={0} label="Quantity" />
        </div>
        <div className={styles.availability}>
          <Image width={20} height={20} src={goodTick} alt="" />
          <p>In stock, {deliveryStatus === 'ready' ? 'ready to ship' : 'available for pickup'}</p>
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={initCartHandler} variant="secondary">
            Add to cart
          </Button>
          <Button variant="secondary">Add to Wishlist</Button>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.otherInfo}>
          <div className={styles.shippingInfo}>
            <h3>Shipping Information</h3>
            <p>
              All plants are shipped bare-root with the exception of House
              Plants and Plant Club Subscription Boxes. House plants and
              succulents will ship from separate locations and may arrive at
              different times. Orders ship Monday-Friday each week. Please allow
              1-3 business days for your order to be processed. We ship within
              the USA and its outlying territories ONLY. Read our full policy
              here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
