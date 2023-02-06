import Image from 'next/image';
import Button from '../../ui/Button/Button';
import * as styles from './CartRecommend.module.css';



const CartRecommend = props => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <Image width={80} height={80} src="/products/others.png" alt="_search" />
            </div>
            <div className={styles.contentContainer}>
                <h4>knives</h4>
                <p>N 25000</p>
            </div>
            <div className={styles.buttonContainer}>
                <Button variant="primary">
                    Add
                </Button>
            </div>
        </div>
    )
}

export default CartRecommend