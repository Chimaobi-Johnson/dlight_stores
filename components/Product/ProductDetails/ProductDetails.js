import Image from 'next/image';
import { useState } from 'react';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import styles from './ProductDetails.module.css';



const ProductDetails = props => {

    const { title, image, images, price } = props.product;

    const [currentImage, setCurrentImage] = useState(0);

    const changeImageHandler = (index) => {
        setCurrentImage(index);
    }

    const selectSize = () => {
        
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <div className={styles.zoomImageWrapper}>
                    {images.map((image, index) => {
                        return (
                            <div key={index} onClick={(id) => changeImageHandler(index)} className={styles.image1}>
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
                <div className={styles.price}>
                    <p>N {price}</p>
                </div>
                <div className={styles.size}>
                    <h4>Select size</h4>
                    <ul>
                        <li onClick={() => selectSize()}>SM</li>
                        <li onClick={() => selectSize()} className={styles.active}>MD</li>
                        <li onClick={() => selectSize()}>LG</li>
                        <li onClick={() => selectSize()}>XL</li>
                        <li onClick={() => selectSize()}>XXL</li>
                    </ul>
                </div>
                <div className={styles.quantity}>
                    <Input type="number" defaultValue={0} label="Quantity" />
                </div>
                <div className={styles.availability}>
                    <h1>null</h1>
                </div>
                <Button>Add to cart</Button>
                <Button>Add to Wishlist</Button>
                <div className={styles.description}>

                </div>
                <div className={styles.otherInfo}>
                    <div className={styles.shippingInfo}>
                        <h3>Shipping Information</h3>
                        <p>
                            All plants are shipped bare-root with the exception of House Plants and Plant Club Subscription Boxes. 
                            House plants and succulents will ship from separate locations and may arrive at different times. Orders ship Monday-Friday each week. 
                            Please allow 1-3 business days for your order to be processed. We ship within the USA and its outlying territories ONLY. 
                            Read our full policy here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails