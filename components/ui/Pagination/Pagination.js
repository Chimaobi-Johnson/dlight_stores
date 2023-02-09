import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Pagination.module.css';
import { useDispatch } from 'react-redux';
import { updateSingleProductPagination } from '../../../store/actions/products';
import { current } from '@reduxjs/toolkit';


const Pagination = props => {

    const { products, currentIndex } = props

    const dispatch = useDispatch();
    const [ nextData, setNextData ] = useState(null)
    const [ prevData, setPrevData ] = useState(null)

    useEffect(() => {
        setNextData(products[currentIndex + 1])
        setPrevData(products[currentIndex - 1])
    }, [products, currentIndex])

    
    return (
        <div className={styles.wrapper}>
            {prevData !== null || undefined ? (
                <div className={styles.navigateLeft} style={{
                    backgroundImage:
                        `linear-gradient(to bottom, #ffffff49, #000000d9), url(${prevData.imagesUrl[0]})`,
                    backgroundSize: "cover",
                    backgroundPositionY: "center",
                    backgroundRepeat: "no-repeat",
                    }}>
                    <Link href={'/product/' + prevData._id}>
                        <h2 onClick={(i) => dispatch(updateSingleProductPagination(currentIndex - 1))}>Back to {prevData.name}</h2>
                    </Link>
                </div>
            ) : (
            <div className={styles.navigateLeft} style={{
                backgroundImage:
                    `linear-gradient(to bottom, #ffffff49, #000000d9), url("/products/others.png")`,
                backgroundSize: "cover",
                backgroundPositionY: "center",
                backgroundRepeat: "no-repeat",
                }}>
                <Link href={'/'}>
                  <h2>Back to Home Page</h2>
                </Link>
            </div>
            )}

            {nextData !== null || undefined ? (
            <div className={styles.navigateRight} style={{
                backgroundImage:
                    `linear-gradient(to bottom, #ffffff49, #000000d9), url(${nextData.imagesUrl[0]})`,
                backgroundSize: "cover",
                backgroundPositionY: "center",
                backgroundRepeat: "no-repeat",
                }}>
                <Link href={'/product/' + nextData._id}>
                 <h2 onClick={(i) => dispatch(updateSingleProductPagination(currentIndex + 1))}>Next: {nextData.name}</h2>
                </Link>
            </div>
            ) : (
                <div className={styles.navigateRight} style={{
                    backgroundImage:
                        `linear-gradient(to bottom, #ffffff49, #000000d9), url('/products/souviners.png')`,
                    backgroundSize: "cover",
                    backgroundPositionY: "center",
                    backgroundRepeat: "no-repeat",
                    }}>
                    <Link href={'/products'}>
                     <h2>Next: Our Products</h2>
                    </Link>
                </div>
            )}
            

        </div>
    )
}

export default Pagination