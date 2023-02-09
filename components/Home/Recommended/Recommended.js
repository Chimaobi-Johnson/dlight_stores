import Button from '../../ui/Button/Button';
import Image from 'next/image';

import styles from './Recommended.module.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { updateSingleProductPagination } from '../../../store/actions/products';

const Recommended = props => {

    const { data } = props

    const dispatch = useDispatch()

    const updatePagination = (index) => {
        dispatch(updateSingleProductPagination(index));
    }

    return (
        <div id="recommended" className={styles.wrapper}>
            {data.length !== 0 ? <h1>Recommended Products</h1> : ''}
            <div className={styles.container}>
                {data.length !== 0 ? data.map((product, index) => {
                    return (
                        <Link key={index} href="/product/[id]" as={`/product/${product._id}`}>
                            <div onClick={(i) => updatePagination(index)}  className={styles.boxContainer}>
                                 <div className={styles.productImageContainer}>
                                    <Image layout='fill' src={product.imagesUrl[0]} alt="" />
                                 </div>
                                 <div className={styles.productDetails}>
                                    <h3>{product.name}</h3>
                                    <p>from <span className={styles.price}>{product.price} naira</span></p>
                                 </div>
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