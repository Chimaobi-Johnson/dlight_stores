import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import goodTick from "../../../public/svg/good_green.svg";

import styles from "./ProductDetails.module.css";
import Cart from "../../Cart/Cart";
import Search from "../../ui/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { initCart, addToCart, updateSubTotal } from "../../../store/actions/app";
import Pagination from "../../ui/Pagination/Pagination";
import Link from "next/link";


const ProductDetails = (props) => {

  const {
    _id,
    name,
    imagesUrl,
    price,
    sizes,
    colors,
    subheading,
    description,
    deliveryStatus,
    category
  } = props.product;

  console.log(props.product)

  const dispatch = useDispatch();
  // const appData = useSelector((data) => data);

  const [currentImage, setCurrentImage] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(price)
  const [availability, setAvailability] = useState()

  const changeImageHandler = (index) => {
    setCurrentImage(index);
  };
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null)

  useEffect(() => {
    if(sizes.length !== 0) {
      setSelectedSize(sizes[0])
    }
    // setCurrentPrice(sizes[0].sizePrice)
    // updateStatus(sizes[0].sizeStock > 0 ? 'in-stock' : 'out of stock')

  }, [sizes])

  useEffect(() => {
    let newPrice, oldPrice;
    if(colors.length !== 0) {
      setSelectedColor(colors[0])
    }
    if(selectedSize) {
      oldPrice = selectedSize.sizePrice
    } else {
      oldPrice = price
    }
    if(colors.length === 0) return
    newPrice = colors[0].colorPriceType === '+' ? Number(oldPrice) + Number(colors[0].colorPrice) : Number(oldPrice) - Number(colors[0].colorPrice)
    updatePrice(newPrice)
    updateStatus(colors[0].colorStock > 0 ? 'in-stock' : 'out of stock')

  }, [selectedSize])


  const selectSize = (size) => {
    setSelectedSize(size)
    updatePrice(size.sizePrice)
    updateStatus(size.sizeStock > 0 ? 'in-stock' : 'out of stock')
  };

  const selectColor = (color) => {
    setSelectedColor(color)
    let oldPrice, newPrice;
    if(selectedSize) {
      oldPrice = selectedSize.sizePrice
    } else {
      oldPrice = price
    }
    newPrice = color.colorPriceType === '+' ? Number(oldPrice) + Number(color.colorPrice) : Number(oldPrice) - Number(color.colorPrice)
    updatePrice(newPrice)

    updateStatus(color.colorStock > 0 ? 'in-stock' : 'out of stock')
  };

  const updatePrice = (input) => {
    input ? setCurrentPrice(input) : setCurrentPrice(price)
  }

  const updateStatus = (input) => {
    input ? setAvailability(input) : setAvailability('in-stock')
  }

  const selectQuantity = (e) => {
    setQuantity(e.target.value)
  }

  const addItemToCart = () => {
    const newPrice = quantity * currentPrice;
    const cartDetails = {
        productId: _id,
        name: name,
        price: newPrice,
        imageUrl: imagesUrl[0],
        size: selectedSize,
        quantity: quantity,
        color: selectedColor,
        category: category,
        user: null
    }
    dispatch(addToCart(cartDetails));
    dispatch(updateSubTotal());
  };

  const renderColors = (colors) => {
    return colors.length !== 0 ? 
    <>
      <h4 style={{ marginBottom: '9px'}}>Available colors</h4>
      <ul className={styles.colorItems}>
      {
        colors.map((color, index) => {
          return <li
          key={index + Math.random() * 100}
          onClick={(c) => selectColor(color)}
          className={selectedColor === color ? styles.currentColor : null}
          style={{ backgroundColor: color.colorCode }}>
          <span style={{ width: 'max-content', fontWeight: 'bold' }}>{`${color.colorPriceType}N${color.colorPrice}`}</span>
          </li>
        })
      }
    </ul>
    </>


    : ''
  }


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
                            className={selectedSize === size ? styles.active : null}
                            >
                               {size.sizeName}                        
                            </li>
                        );
                        })}
                    </ul>
                    <span>{availability}</span>
                    </>
                )}
                </div>
                <div className={styles.colorsContainer}>
                  {renderColors(colors)}
                </div>
                <div className={styles.quantity}>
                    <Input type="number" value={quantity} onChange={(e) => selectQuantity(e)} label="Quantity" />
                </div>
                <div className={styles.availability}>
                    <Image width={20} height={20} src={goodTick} alt="" />
                <p>{deliveryStatus === 'ready' ? 'Ready to ship' : 'Pickup only'}</p>
                </div>
                <div className={styles.buttonContainer}>
                {availability !== 'in-stock' ? (
                  <Button onClick={addItemToCart} variant="secondary">
                      Add to cart
                  </Button>
                ) : (
                  <Button variant="secondary">
                    Product N/A
                  </Button>
                )}
                {/* <Button variant="secondary">Add to Wishlist</Button> */}
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
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
                    piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked 
                    up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                    and going through the cites of the word in classical literature, discovered the undoubtable source
                    </p>
                </div>
            </div>
        </div>
      {/* <Pagination /> */}
    </div>
  );
};

export default ProductDetails;
