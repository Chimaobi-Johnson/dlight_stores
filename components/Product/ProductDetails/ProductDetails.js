import Image from 'next/image';
import { useState } from 'react';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import goodTick from '../../../public/svg/good_green.svg';

import styles from './ProductDetails.module.css';
import Cart from '../../Cart/Cart';
import Search from '../../ui/Search/Search';



const ProductDetails = props => {

    const { title, images, price } = props.product;

    const [currentImage, setCurrentImage] = useState(0);

    const changeImageHandler = (index) => {
        setCurrentImage(index);
    }

    const selectSize = () => {
        
    }

    return (
        <div className={styles.wrapper}>
            {/* <Search /> */}
            {/* <Cart /> */}
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
                    <Image width={20} height={20} src={goodTick} alt="" />
                    <p>In stock, ready to ship</p>
                </div>
                <div className={styles.buttonContainer}>
                    <Button variant="secondary">Add to cart</Button>
                    <Button variant="secondary">Add to Wishlist</Button>
                </div>
                <div className={styles.description}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin consequat urna nec nisi vehicula fermentum. 
                    Fusce consectetur ante nec velit tristique, 
                    vitae dictum dui facilisis. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Class aptent taciti sociosqu 
                    ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Vivamus nec odio nec ipsum vestibulum iaculis ut eu libero. Maecenas 
                    consectetur accumsan tellus a vulputate. Donec et sem sit amet mi sodales 
                    pretium. Ut fermentum, metus in vulputate aliquam, magna risus facilisis est,
                    <h4>Requirements</h4>
                    <ul>
                        <li>
                           odio nec ipsum vestibulum iaculis
                        </li>
                        <li>
                           ec ipsum vestibulum
                        </li>
                        <li>
                           vitae dictum dui facilisis
                        </li>
                        <li>
                           Fusce consectetur ante nec
                        </li>
                    </ul>
                     eu blandit sem velit vitae ante. Sed quis nisl mauris. Nam sodales dignissim
                      nibh vel placerat. Duis eu sem et enim pellentesque porttitor. 
                    Nulla luctus urna quis enim fermentum hendrerit.
                    </p>
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