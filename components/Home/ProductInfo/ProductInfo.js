import Button from "../../ui/Button/Button";
import Image from "next/image";
import truncate from "truncate";

import { useState, useEffect } from "react";
import { productInfoData } from "../../../data/dummy";

import styles from "./ProductInfo.module.css";

const ProductInfo = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = productInfoData.length;

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const nextSlide = () => {    
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  return (
    <div className={styles.wrapper}>
      {productInfoData.map((el, index) => {
        return (
          <div
            key={index}
            className={
              currentSlide === index ? styles.currentSlide : styles.slide
            }
          >
            {/* {index === currentSlide && ( */}
            <>
              <div className={styles.productText}>
                <span>{el.type}</span>
                <h1>{el.title}</h1>
                <p>{truncate(el.subText, 500)}</p>
                <Button>{el.buttonText}</Button>
              </div>
              <div className={styles.media}>
                <div className={styles.mediaContainer}>
                  <video controls muted>
                    <source src={el.image} type="video/mp4"  />
                  </video>
                  {/* <Image width={450} height={400} src={el.image} alt="" /> */}
                </div>
              </div>
            </>
            {/* )} */}
          </div>
        );
      })}
      {productInfoData.length <= 1 ? (
        ""
      ) : (
        <div className={styles.arrowContainer}>
          <div className={styles.arrowLeft} onClick={() => prevSlide()}>
            <Image width={100} height={100} src="/icons/prev.png" alt="P" />
          </div>
          <div className={styles.arrowRight} onClick={() => nextSlide()}>
            <Image width={100} height={100} src="/icons/next.png" alt="N" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
