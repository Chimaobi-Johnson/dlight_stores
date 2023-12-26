import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import goodTick from "../../../public/svg/good_green.svg";

import styles from "./ProductDetails.module.css";
import Cart from "../../Cart/Cart";
import Search from "../../ui/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  initCart,
  addToCart,
  updateSubTotal,
} from "../../../store/actions/app";
import Pagination from "../../ui/Pagination/Pagination";
import Link from "next/link";
import axios from "axios";
import ColorList from "../components/ColorList/ColorList";
import Price from "./Components/Price/Price";
import { isEmpty } from "../../../utils/helperFunctions";

const ProductDetails = (props) => {
  const {
    _id,
    name,
    imagesUrl,
    price,
    specifications,
    subheading,
    description,
    deliveryStatus,
    category,
    priceSale,
    available,
    discountDetails,
  } = props.product;

  console.log(props.product);

  const user = useSelector(data => data.user)
  const content = useSelector(data => data.app.content)

  const dispatch = useDispatch();
  // const appData = useSelector((data) => data);

  const [currentImage, setCurrentImage] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(price);
  const [availability, setAvailability] = useState();

  const changeImageHandler = (index) => {
    setCurrentImage(index);
  };

  const [currentColorArray, setCurrentColorArray] = useState([]);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [mainPrice, setMainPrice] = useState(price);


  useEffect(() => {
    updateStatus(available > 0 ? "in-stock" : "out of stock")
  }, [updateStatus])

  const selectCurrentSize = (size) => {
    let newPrice;

    setCurrentColorArray(size.colors);
    if(size.colors.length !== 0) {
      setSelectedColor(size.colors[0]);
    } else {
      setSelectedColor(null)
    }
    setSelectedSize(size);
    newPrice =
      size.priceType === "+"
        ? Number(mainPrice) + Number(size.price)
        : Number(mainPrice) - Number(size.price);

    updatePrice(newPrice);
    updateStatus(size.stock > 0 ? "in-stock" : "out of stock");
  };

  const updateColorPrice = (color, selectedSize) => {
    let newPrice;

    if(specifications.type === 'add-colors-only') {
      if (color.priceType === "+") {
        newPrice =
          Number(mainPrice) + Number(color.price)
      } else if (color.priceType === "-") {
        newPrice = Number(mainPrice) - Number(color.price)
      } else {
        newPrice = mainPrice
      }
      return newPrice
    } else {
      if (color.priceType === "+" && selectedSize.priceType === "+") {
        newPrice =
          Number(mainPrice) + Number(color.price) + Number(selectedSize.price);
      } else if (color.priceType === "+" && selectedSize.priceType === "-") {
        newPrice =
          Number(mainPrice) + Number(selectedSize.price) - Number(color.price);
      } else if (color.priceType === "-" && selectedSize.priceType === "+") {
        newPrice =
          Number(mainPrice) + Number(selectedSize.price) - Number(color.price);
      } else if (color.priceType === "-" && selectedSize.priceType === "-") {
        newPrice =
          Number(mainPrice) - Number(selectedSize.price) - Number(color.price);
      } else {
        newPrice = mainPrice;
      }
      return newPrice;
    }
    
  };

  const selectColorHandler = (color) => {
    let oldPrice, newPrice;

    setSelectedColor(color);
    if(specifications.type === "add-colors-only") {
      setSelectedSize(null)
    }
    newPrice = updateColorPrice(color, selectedSize);
    updatePrice(newPrice);
    // updateStatus(color.stock > 0 ? "in-stock" : "out of stock");
  };

  const updatePrice = (input) => {
    input ? setCurrentPrice(input) : setCurrentPrice(mainPrice);
  };

  const updateStatus = (input) => {
    input ? setAvailability(input) : setAvailability("in-stock");
  };

  const selectQuantity = (e) => {
    if(e.target.value < 1) {
      setQuantity(1)
    } else {
      setQuantity(e.target.value)
    }
  };

  useEffect(() => {
    let newPrice;
    if(discountDetails.length !== 0 && discountDetails[0].active) {
      setMainPrice(priceSale)
      setCurrentPrice(priceSale)
      updatePrice(priceSale);

      if (
        specifications.sizes.length !== 0 &&
        (specifications.type === "add-size-and-color" ||
          specifications.type === "add-size-only")
      ) {
        // set default size

        setSelectedSize(specifications.sizes[0]);
        setCurrentColorArray(specifications.sizes[0].colors);
        if(specifications.sizes[0].colors.length !== 0) {
          setSelectedColor(specifications.sizes[0].colors[0]);
        }

  
        newPrice =
          specifications.sizes[0].priceType === "+"
            ? Number(priceSale) + Number(specifications.sizes[0].price)
            : Number(priceSale) - Number(specifications.sizes[0].price);
        updatePrice(newPrice);
      } else if (
        specifications.type === "add-colors-only" &&
        specifications.colors.length !== 0
      ) {
        setSelectedSize(null)
        setSelectedColor(specifications.colors[0]);
        setCurrentColorArray(specifications.colors);
  
        newPrice =
          specifications.colors[0].priceType === "+"
            ? Number(priceSale) + Number(specifications.colors[0].price)
            : Number(priceSale) - Number(specifications.colors[0].price);
        updatePrice(newPrice);
      } else {
        setSelectedColor(null);
        setCurrentColorArray([]);
        updatePrice(priceSale);
      }
    } else {
      setMainPrice(price)
      setCurrentPrice(price)
      updatePrice();

      if (
        specifications.sizes.length !== 0 &&
        (specifications.type === "add-size-and-color" ||
          specifications.type === "add-size-only")
      ) {
        setSelectedSize(specifications.sizes[0]);
        setCurrentColorArray(specifications.sizes[0].colors);
        if(specifications.sizes[0].colors.length !== 0) {
          setSelectedColor(specifications.sizes[0].colors[0]);
        }

        newPrice =
          specifications.sizes[0].priceType === "+"
            ? Number(price) + Number(specifications.sizes[0].price)
            : Number(price) - Number(specifications.sizes[0].price);
        updatePrice(newPrice);
      } else if (
        specifications.type === "add-colors-only" &&
        specifications.colors.length !== 0
      ) {
        setSelectedSize(null)
        setSelectedColor(specifications.colors[0]);
        setCurrentColorArray(specifications.colors);
  
        newPrice =
          specifications.colors[0].priceType === "+"
            ? Number(price) + Number(specifications.colors[0].price)
            : Number(price) - Number(specifications.colors[0].price);
        updatePrice(newPrice);
      } else {
        setSelectedColor(null);
        setCurrentColorArray([]);
        updatePrice(price);

      }
    }   

  }, [specifications, discountDetails]);

  const selectSize = (size) => {
    // setSelectedSize(size);
    // updatePrice(size.sizePrice);
    // updateStatus(size.sizeStock > 0 ? "in-stock" : "out of stock");
  };

  // const selectColor = (color) => {
  //   setSelectedColor(color);
  //   let oldPrice, newPrice;
  //   if (selectedSize) {
  //     oldPrice = selectedSize.sizePrice;
  //   } else {
  //     oldPrice = price;
  //   }
  //   newPrice =
  //     color.colorPriceType === "+"
  //       ? Number(oldPrice) + Number(color.colorPrice)
  //       : Number(oldPrice) - Number(color.colorPrice);
  //   updatePrice(newPrice);

  //   updateStatus(color.colorStock > 0 ? "in-stock" : "out of stock");
  // };

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
      userId: !isEmpty(user) ? user._id : null,
    };
    dispatch(addToCart(cartDetails));
    dispatch(updateSubTotal());
  };

  const renderSizes = () => {
    if (
      specifications.type === "add-size-and-color" ||
      specifications.type === "add-size-only"
    ) {
      return (
        <>
          <h3>Sizes Available</h3>

          <div className={styles.sizeWrapper}>
            {specifications.sizes.map((size, index) => {
              return (
                <div
                  key={index + Math.random() * 100}
                  // onClick={(s) => selectSize(size)}
                  className={
                    selectedSize === size ? styles.active : styles.sizeContainer
                  }
                >
                  <h4 onClick={() => selectCurrentSize(size)}>{size.label}</h4>
                </div>
              );
            })}
          </div>
        </>
      );
    }

    return <></>;
  };

  const renderColors = () => (
    <div className={styles.colorsContainer}>
      <ColorList
        colors={currentColorArray}
        selectColorHandler={selectColorHandler}
        selectedColor={selectedColor}
      />
    </div>
  );

  if (!props.product || props.product.length === 0) {
    return <h1 style={{ textAlign: "center" }}>Product not found</h1>;
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
          <div>
            <Price discountDetails={discountDetails} price={price} currentPrice={currentPrice} />
          </div>
          <div className={styles.specifications}>
            <div>{renderSizes()}</div>
            <div>{renderColors()}</div>
          </div>
          {/* <div className={styles.colorsContainer}>{renderColors(colors)}</div> */}
          <div className={styles.quantity}>
            <Input
              type="number"
              value={quantity}
              onChange={(e) => selectQuantity(e)}
              label="Quantity"
            />
          </div>
          <div className={styles.availability}>
            <Image width={20} height={20} src={goodTick} alt="" />
            <p>
              {deliveryStatus === "ready" ? "Ready to ship" : "Pickup only"}
            </p>
          </div>
          <div className={styles.buttonContainer}>
            {availability === "in-stock" ? (
              <Button onClick={addItemToCart} variant="secondary">
                Add to cart
              </Button>
            ) : (
              <Button variant="secondary">Product N/A</Button>
            )}
            {/* <Button variant="secondary">Add to Wishlist</Button> */}
          </div>
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          {description !== "" ? <h3>About this item</h3> : null}
          <p>{description}</p>
        </div>
        <div className={styles.otherInfo}>
          <div className={styles.shippingInfo}>
            <h3>Shipping Information</h3>
            <p>
              {content ? content.shippingInfo : 'loading...'}
            </p>
          </div>
        </div>
      </div>
      {/* <Pagination /> */}
    </div>
  );
};

export default ProductDetails;
