import styles from "./ImageSlider.module.css";
import Image from 'next/image';

import Button from "../Button/Button";

import { useState, useEffect } from "react";

import { sliderData } from "../../../data/sliderData";
import Link from "next/link";

const ImageSlider = (props) => {


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
    });

    const autoScroll = false;
    let slideInterval;
    let intervalTime = 7000; 

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
                        <Link href="#recommended">
                          <Button variant='secondary'>{slide.buttonText}</Button>
                        </Link>
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
                  <Image width={100} height={100} src="/icons/prev.png" alt="P" />
                </div>
                <div onClick={() => nextSlide()} className={styles.btnRight}>
                  <Image width={100} height={100} src="/icons/next.png" alt="N" />
                </div>
         </div>
      </div>
  );
};

export default ImageSlider;
