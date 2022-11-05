import { useEffect } from 'react';
import Image from 'next/image';

import styles from './ExtendedMenu.module.css';

const ExtendedMenu = props => {

    

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
                    <li>All items</li>
                    <li>menu item 1</li>
                    <li>menu item 2</li>
                    <li>menu item 3</li>
                    <li>menu item 4</li>
                    <li>menu item 5</li>
                </ul>
            </div>
            <div id="highlightedItems" className={styles.highlightedItems}>
                <div className={styles.itemOneContainer}>
                    <div className={styles.imageContainer}>
                        <Image width={250} height={200} src="/products/others.png" alt="" />
                    </div>
                    <h6>Variety Packs</h6>
                </div>
                <div className={styles.itemTwoContainer}>
                <div className={styles.imageContainer}>
                        <Image width={250} height={200} src="/products/souviners.png" alt="" />
                    </div>
                    <h6>E-Gift Cards</h6>
                </div>
            </div>
        </div>
    )
}

export default ExtendedMenu