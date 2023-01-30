import React from "react";
import * as styles from './Search.module.css';

const Search = props => {

    return (
        <div className={styles.wrapper}>
            <p>Delight stores</p>
            <div className={styles.inputWrapper}>
                <input type="search" value="" />
            </div>
        </div>
    )
}


export default Search