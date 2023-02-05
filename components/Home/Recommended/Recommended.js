import Button from '../../ui/Button/Button';
import Image from 'next/image';

import styles from './Recommended.module.css';
import Link from 'next/link';

const Recommended = props => {

    const { data } = props

    return (
        <div className={styles.wrapper}>
            {data.length !== 0 ? <h1>Recommended Products</h1> : ''}
            <div className={styles.container}>
                {data.length !== 0 ? data.map((product, index) => {
                    return (
                        <Link key={index} href="/product/[id]" as={`/product/${product._id}`}>
                            <div className={styles.boxContainer}>
                                 <div className={styles.productImageContainer}>
                                    <Image layout='fill' src={product.imagesUrl[0]} alt="" />
                                 </div>
                                <h3>{product.title}</h3>
                                <p>from {product.price} naira</p>
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