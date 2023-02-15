import React from "react";
import { useSelector } from "react-redux";
import * as styles from './Search.module.css';

const Search = props => {

    const init = useSelector(data => data.app.searchBarInit)

    return (
        <div className={init ? styles.wrapper : styles.closeSearchBar}>
            <p>Delight stores</p>
            <div className={styles.inputWrapper}>
                <input placeholder="Search..." type="search" value="" />
            </div>
        </div>
    )
}


export default Search