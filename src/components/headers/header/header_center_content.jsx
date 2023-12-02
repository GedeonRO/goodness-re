import React, { useState } from "react";
import styles from './Header.module.css';
import "react-dropdown/style.css";
import Searchbar from "../../forms/search_bar";
import { Link } from "react-router-dom";


const HeaderCenterContent = () => {

    const [searchText, setSearchText] = useState("");

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <Link replace aria-disabled to="/search" state={{ searchtype: "pdcts", value: searchText }} className={styles.headercenter}>
            {/* {searchText} */}
            <Searchbar onChange={(e) => handleSearchText(e)} />
        </Link>
    )
}

export default HeaderCenterContent;