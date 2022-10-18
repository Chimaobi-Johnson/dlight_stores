import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./ImageSlider.module.css";
import Button from "../Button/Button";

import { useState } from "react";

import { sliderData } from "../../../data/sliderData";

const ImageSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
  };

  const landingImages = {
    slide1: "/site/landing-pic1.png",
    slide2: "/site/landing-bedspread.png",
    slide3: "/site/landing-bedspread2.png",
    slide4: "/site/landing-gift1.png",
    slide5: "/site/landing-pots.png",
    slide6: "/site/landing-gift2.png",
  };

    const [ currentSlide, setCurrentSlide ] = useState(1);


  return (
    <div className={styles.wrapper}>
      {sliderData.map((slide, index) => {
        console.log(index);

        // currentSlide = 

        return (
        <div key={index} className={currentSlide === index ? styles.currentSlide : slide} style={{
              backgroundImage:
                `linear-gradient(to right, #ffffff49, #0000009c), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPositionY: "30%",
              backgroundRepeat: "no-repeat",
            }}>

            <div className={styles.contentContainer}>
              <h1>{slide.title}</h1>
              <h3>{slide.subText}</h3>
              <Button>{slide.buttonText}</Button>
            </div>

            <div className={styles.buttonContainer}>
              <div className={styles.btnLeft}>
                <img src="/icons/prev.png" alt="P" />
              </div>
              <div className={styles.btnRight}>
                <img src="/icons/next.png" alt="N" />
              </div>
            </div>
        </div>)
      })}
    </div>
    // <Slider {...settings}>
    //   <div className={styles.container}>
    //     <div
    //       className={styles.backgroundContent}
    //       style={{
    //         backgroundImage:
    //           `linear-gradient(to right, #ffffff49, #0000009c), url(${landingImages.slide1})`,
    //         backgroundSize: "cover",
    //         backgroundPositionY: "30%",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className={styles.contentContainer}>
    //         <h1><span className={styles.firstWord}>HUNDREDS</span> OF HOUSEHOLD ITEMS</h1>
    //         <h3>beauitful artifacts</h3>
    //         <Button>Shop now</Button>
    //       </div>
    //     </div>
    //   </div>

    //   <div className={styles.container}>
    //     <div
    //       className={styles.backgroundContent}
    //       style={{
    //         backgroundImage:
    //           `linear-gradient(to right, #ffffff49, #0000009c), url(${landingImages.slide3})`,
    //         backgroundSize: "cover",
    //         backgroundPositionY: "30%",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className={styles.contentContainer}>
    //         <h1>HUNDREDS OF HOUSEHOLD ITEMS</h1>
    //         <h3>beauitful artifacts</h3>
    //         <Button>Shop now</Button>
    //       </div>
    //     </div>
    //   </div>


    //   <div className={styles.container}>
    //     <div
    //       className={styles.backgroundContent}
    //       style={{
    //         backgroundImage:
    //           `linear-gradient(to left, #ffffff49, #0000009c), url(${landingImages.slide4})`,
    //         backgroundSize: "cover",
    //         backgroundPositionY: "30%",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className={styles.contentContainerLeft}>
    //         <h1>HUNDREDS OF HOUSEHOLD ITEMS</h1>
    //         <h3>beauitful artifacts</h3>
    //         <Button>Shop now</Button>
    //       </div>
    //     </div>
    //   </div>

    //   <div className={styles.container}>
    //     <div
    //       className={styles.backgroundContent}
    //       style={{
    //         backgroundImage:
    //           `linear-gradient(to right, #ffffff49, #0000009c), url(${landingImages.slide5})`,
    //         backgroundSize: "cover",
    //         backgroundPositionY: "30%",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className={styles.contentContainer}>
    //         <h1>HUNDREDS OF HOUSEHOLD ITEMS</h1>
    //         <h3>beauitful artifacts</h3>
    //         <Button>Shop now</Button>
    //       </div>
    //     </div>
    //   </div>

    // </Slider>
  );
};

export default ImageSlider;
