import Button from '../../ui/Button/Button';
import Image from 'next/image';

import styles from './Recommended.module.css';
import Link from 'next/link';
import truncate from 'truncate';

import { useDispatch } from 'react-redux';
import { updateSingleProductPagination } from '../../../store/actions/products';
import { NumericFormat } from 'react-number-format';

const Recommended = props => {

    const { data } = props

    const limitedData = data.slice(0, 12)

    const dispatch = useDispatch()

    const updatePagination = (index) => {
        dispatch(updateSingleProductPagination(index));
    }

    return (
        <div id="recommended" className={styles.wrapper}>
            {limitedData.length !== 0 ? <h1>Recommended Products</h1> : ''}
            <div className={styles.container}>
                {limitedData.length !== 0 ? limitedData.map((product, index) => {
                    return (
                        <Link key={index} href="/product/[id]" as={`/product/${product._id}`}>
                            <div onClick={(i) => updatePagination(index)}  className={styles.boxContainer}>
                                 <div className={styles.productImageContainer}>
                                    <Image layout='fill' src={product.imagesUrl[0]} alt="" />
                                 </div>
                                 <div className={styles.productDetails}>
                                    <h3>{truncate(product.name, 60)}</h3>
                                    <p>from <span className={styles.price}><NumericFormat value={product.price} displayType="text" thousandSeparator="," /> naira</span></p>
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