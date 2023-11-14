import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './ExtendedMenu.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const ExtendedMenu = props => {

    const { openModal } = props

    const products = useSelector(data => data.products.products)

    const recommended = products && products.length !== 0 ? Math.round(Math.random() * products.length) : null
    const recommended2 = products && products.length !== 0 ? Math.round(Math.random() * products.length) : null

    useEffect(() => {

        displayExtendedMenu(props.activate);
        
    }, [props.activate])

    const displayExtendedMenu = (activate) => {
        const wrapper = document.getElementById('wrapper');
        const menuItems = document.getElementById('menuItems');
        const highlightedItems = document.getElementById('highlightedItems');

        if(activate) {
            wrapper.style.maxHeight = '60vh';
            menuItems.style.display = 'block';
            highlightedItems.style.display = 'grid';
        } else {
            wrapper.style.maxHeight = '0';
            menuItems.style.display = 'none';
            highlightedItems.style.display = 'none';
        }
    }

    return (
        <div id='wrapper' onMouseLeave={() => displayExtendedMenu(false)} className={styles.wrapper}>
            <div id='menuItems' className={styles.menuItems}>
                <ul>
                    <li>Quick links</li>
                    <Link href={'/products'}><li>Products</li></Link>
                    <Link href={'/about'}><li>About Us</li></Link>
                    <li onClick={openModal}>Shipping Information</li>
                    <Link href={'#footer'}><li>Contact Us</li></Link>
                </ul>
            </div>
            <div id="highlightedItems" className={styles.highlightedItems}>
                {products && products.length !== 0 ? (
                    <>
                        <Link href={'/product/' + products[recommended]._id}>
                            <div className={styles.itemOneContainer}>
                                <div className={styles.imageContainer}>
                                    <Image width={250} height={200} src={products[recommended].imagesUrl[0]} alt="" />
                                </div>
                                <h6>{products[recommended].name}</h6>
                            </div>
                        </Link>
                        <Link href={'/product/' + products[recommended]._id}>
                        <div className={styles.itemTwoContainer}>
                        <div className={styles.imageContainer}>
                                <Image width={250} height={200} src={products[recommended2].imagesUrl[0]} alt="" />
                            </div>
                            <h6>{products[recommended2].name}</h6>
                        </div>
                        </Link>
                    </>
                ) : <p>Loading...</p>}

            </div>
        </div>
    )
}

export default ExtendedMenu