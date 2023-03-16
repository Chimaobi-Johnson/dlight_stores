import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import goodTick from "../../../public/svg/good_green.svg";

import styles from "./ProductDetails.module.css";
import Cart from "../../Cart/Cart";
import Search from "../../ui/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { initCart, addToCart } from "../../../store/actions/app";
import Pagination from "../../ui/Pagination/Pagination";
import Link from "next/link";


const ProductDetails = (props) => {

  const {
    _id,
    name,
    imagesUrl,
    price,
    sizes,
    subheading,
    description,
    deliveryStatus,
  } = props.product;

  useEffect(() => {
    setCurrentPrice(price)
  }, [price])

  const dispatch = useDispatch();
  const appData = useSelector((data) => data);

  const [currentImage, setCurrentImage] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0)
  const [availability, setAvailability] = useState('In-stock')

  const changeImageHandler = (index) => {
    setCurrentImage(index);
  };
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);


  const [isActive, setActive] = useState(false)

  const selectSize = (size) => {
    setActive(!isActive)
    setSelectedSize(size)
    updatePrice(size.price)
    updateStatus(size.availability)
  };

  const updatePrice = (input) => {
    input ? setCurrentPrice(input) : setCurrentPrice(price)
  }

  const updateStatus = (input) => {
    input ? setAvailability(input) : setAvailability('In-stock')
  }

  const selectQuantity = (e) => {
    setQuantity(e.target.value)
  }

  const addItemToCart = () => {
    const cartDetails = {
        productId: _id,
        name: name,
        price: price,
        imageUrl: imagesUrl[0],
        size: selectedSize,
        quantity: quantity,
        user: null
    }
    dispatch(addToCart(cartDetails));
  };


  return (
    <div className={styles.wrapper}>
      {/* <Search /> */}
      <div className={styles.topContainer}>
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
                <span className={styles.subheading}>{subheading}</span>
                </div>
                <div className={styles.price}>
                    <p>N {currentPrice}</p>
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
                               {size.name}                        
                            </li>
                        );
                        })}
                    </ul>
                    <span>{availability}</span>
                    </>
                )}
                </div>
                <div className={styles.quantity}>
                    <Input type="number" defaultValue={1} onChange={(event) => selectQuantity(e)} label="Quantity" />
                </div>
                <div className={styles.availability}>
                    <Image width={20} height={20} src={goodTick} alt="" />
                <p>In stock, {deliveryStatus === 'ready' ? 'ready to ship' : 'available for pickup'}</p>
                </div>
                <div className={styles.buttonContainer}>
                <Button onClick={addItemToCart} variant="secondary">
                    Add to cart
                </Button>
                <Button variant="secondary">Add to Wishlist</Button>
                </div>

            </div>
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
            {description !== '' ? 
            (<h3>About this item</h3>) : null
            }
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
      {/* <Pagination /> */}
    </div>
  );
};

export default ProductDetails;
