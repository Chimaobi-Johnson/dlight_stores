import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./ImageSlider.module.css";
import Button from "../Button/Button";

import { useState, useEffect } from "react";

import { sliderData } from "../../../data/sliderData";

const ImageSlider = (props) => {

  const landingImages = {
    slide1: "/site/landing-pic1.png",
    slide2: "/site/landing-bedspread.png",
    slide3: "/site/landing-bedspread2.png",
    slide4: "/site/landing-gift1.png",
    slide5: "/site/landing-pots.png",
    slide6: "/site/landing-gift2.png",
    slide7: "/site/sample1.jpg",
    slide8: "/site/sample2.jpg",
    slide9: "/site/sample3.jpg",
    slide10: "/site/sample4.jpg",
  };

    const [ currentSlide, setCurrentSlide ] = useState(0);
    const slideLength = sliderData.length;

    useEffect(() => {
      setCurrentSlide(0);
    }, []);

    useEffect(() => {
      if(autoScroll) {
        auto();
      }
      return () => clearInterval(slideInterval); // clean up function, starts counter afresh after the next slide
    }, [currentSlide]);

    const autoScroll = false;
    let slideInterval;
    let intervalTime = 10000; 

    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    }
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    }

    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {sliderData.map((slide, index) => {

          return (
          <div key={index} className={currentSlide === index ? styles.currentSlide : styles.slide}>

                {index === currentSlide && (
                    <div className={styles.slideImage} style={{
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
                    </div>
                )}
          </div>
          )
        })}
             
      
          {/* <div className={styles.autoBar}>
            <div className={styles.fillBar} style={{ width: intervalTime }}></div>
          </div> */}
         </div>
         <div className={styles.buttonContainer}>
                <div onClick={() => prevSlide()} className={styles.btnLeft}>
                  <img src="/icons/prev.png" alt="P" />
                </div>
                <div onClick={() => nextSlide()} className={styles.btnRight}>
                  <img src="/icons/next.png" alt="N" />
                </div>
         </div>
      </div>
  );
};

export default ImageSlider;
