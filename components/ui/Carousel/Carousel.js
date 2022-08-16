import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './carousel.module.css';


const Carousel = props => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src='/products/20210304_191601.jpg' alt="slide one" />
                </div>
                <div className={styles.contentContainer}>
                    <h1>HUNDREDS OF HOUSEHOLD ITEMS</h1>
                    <h3>beauitful artifacts</h3>
                    <button>Shop now</button>
                </div>
                
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    )
}

export default Carousel