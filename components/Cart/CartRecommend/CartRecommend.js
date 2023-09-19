import Image from "next/image";
import Button from "../../ui/Button/Button";
import * as styles from "./CartRecommend.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const CartRecommend = (props) => {
  const { category } = props.cartItem;
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/?id=${category}`
        );
        if (response.status === 200) {
            // select a random product from existing array of products under same category
          const randomNumber = Math.floor(Math.random() * response.data.products.length)
          setProduct(response.data.products[randomNumber])
        }
      } catch (error) {
        console.log(error);
      }
    };

    if(props.newRecommendedProduct) {
        getProductsByCategory();
    }

  }, [category, props.newRecommendedProduct]);

  if(!product) {
    return 
  }

  // if recommended product matches existing product
    // if(product._id === window.location.pathname.split('/')[2]) {
    //     return
    // }

  return (
    <>
      <p className={styles.recommendedText}>
        {`We highly recommended adding the ${product.name} on orders this time of year!`}
      </p>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <Image
            width={80}
            height={80}
            src={product.imagesUrl[0]}
            alt="_search"
          />
        </div>
        <div className={styles.contentContainer}>
          <h3>{product.name}</h3>
          <p>N {product.price}</p>
        </div>
        <div className={styles.buttonContainer}>
          <Link href={'/product/' + product._id}><Button>View</Button></Link>
        </div>
      </div>
    </>
  );
};

export default CartRecommend;
