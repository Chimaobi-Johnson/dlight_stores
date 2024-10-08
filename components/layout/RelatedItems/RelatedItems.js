import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { recommendedProducts } from '../../../data/dummy';

import styles from './RelatedItems.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';


const RelatedItems = props => {
    const dispatch = useDispatch()

    const { product, category } = props

    const products = useSelector(data => data.products.products)

    const [relatedProducts, setRelatedProducts] = useState(null)

    const getRelatedProducts = (products, category) => {
        // algorithm to generate related products using same category grouping
        const relatedProducts = [];
        function checkCategory(item) {
            return item.category === category._id && item._id !== product._id 
        } 
        const sameCatArr = products.filter(checkCategory)
        
        if(sameCatArr.length === 4) {
            setRelatedProducts(sameCatArr)
        } else if(sameCatArr.length > 4) {
            const relatedProducts = sameCatArr.slice(0, 4)
            setRelatedProducts(relatedProducts)
        } else {
            // length is less than 4
            function checkProducts(item) {
                return item.category !== category._id && item._id !== product._id 
            }

            // add products to remaining filtered items if its less than 4 to make array length a total of 4 items
            const productsArr = products.filter(checkProducts).slice(0, 4)
            const newCatArr = [...sameCatArr, ...productsArr]
            const relatedProducts = newCatArr.slice(0, 4)
            setRelatedProducts(relatedProducts)
        }
    }

    useEffect(() => {
        products ? getRelatedProducts(products, category) : <h1>Loading...</h1>
    }, [products, category])

    
    return (
            <div className={styles.wrapper}>
                <h2>You may also like</h2>
                <div className={styles.itemsContainer}>
                    {relatedProducts ? relatedProducts.map((product, index) => {
                        return (
                            <Link key={index} href={'/product/' + product._id}>
                                <div className={styles.item}>
                                    <div className={styles.imageWrapper}>
                                        <Image width={320} height={300} src={product.imagesUrl[0]} alt="" />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <h4>{product.name}</h4>
                                        <div className={styles.priceContent}>
                                             <p>N {product.price}</p> 
                                            {/* <div className={styles.colorEffect}></div> */}
                                        </div>
                                    </div>
                                   
                                </div>
                            </Link>
                        )
                    }) : null}
                </div>
            </div>
        )
}

export default RelatedItems