import { recommendedProducts } from '../../../data/dummy';
import Button from '../../ui/Button/Button';
import Image from 'next/image';

import styles from './Recommended.module.css';
import Link from 'next/link';

const Recommended = props => {

    return (
        <div className={styles.wrapper}>
            {recommendedProducts.length !== 0 ? <h1>Recommended Products</h1> : ''}
            <div className={styles.container}>
                {recommendedProducts.length !== 0 ? recommendedProducts.map((product, index) => {
                    return (
                        <Link href="/product/[id]" as={`/product/${product.id}`}>
                            <div key={index} className={styles.boxContainer}>
                                <Image width={150} height={150} src={product.image} alt="" />
                                <h3>{product.title}</h3>
                                <p>from {product.price}</p>
                            </div>
                        </Link>
                    )
                }) : ''}
            </div>
            <div className={styles.buttonContainer}>
                <Button><Link href="/products">View all</Link></Button>  
            </div>
 
        </div>
    )
}

export default Recommended