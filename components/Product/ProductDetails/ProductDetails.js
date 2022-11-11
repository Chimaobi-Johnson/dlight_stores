import Image from 'next/image';
import { useState } from 'react';
import styles from './ProductDetails.module.css';



const ProductDetails = props => {

    const { title, image, images, price } = props.product;

    const [currentImage, setCurrentImage] = useState(0);

    const changeImageHandler = (index) => {
        setCurrentImage(index);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <div className={styles.zoomImageWrapper}>
                    {images.map((image, index) => {
                        return (
                            <div onClick={(id) => changeImageHandler(index)} className={styles.image1}>
                                <Image src={image} layout="fill" alt='' />
                            </div>
                        )
                    })}
                </div>
                <div className={styles.imageWrapper}>
                    <Image src={images[currentImage]} layout="fill" alt='' />
                </div>

            </div>
            <div className={styles.contentContainer}>
                <div className={styles.header}>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails