import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './ExtendedMenu.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const ExtendedMenu = props => {

    const { openModal } = props

    const products = useSelector(data => data.products.products)
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)

    useEffect(() => {
        const recommended = products && products.length !== 0 ? Math.round(Math.random() * products.length) : null
        const recommended2 = products && products.length !== 0 ? Math.round(Math.random() * products.length) : null
        setValue1(recommended);
        setValue2(recommended2)
    }, [])

   

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
                        <Link href={'/product/' + products[value1]._id}>
                            <div className={styles.itemOneContainer}>
                                <div className={styles.imageContainer}>
                                    <Image width={250} height={200} src={products[value1].imagesUrl[0]} alt="" />
                                </div>
                                <h6>{products[value1].name}</h6>
                            </div>
                        </Link>
                        <Link href={'/product/' + products[value2]._id}>
                        <div className={styles.itemTwoContainer}>
                        <div className={styles.imageContainer}>
                                <Image width={250} height={200} src={products[value2].imagesUrl[0]} alt="" />
                            </div>
                            <h6>{products[value2].name}</h6>
                        </div>
                        </Link>
                    </>
                ) : <p>Loading...</p>}

            </div>
        </div>
    )
}

export default ExtendedMenu