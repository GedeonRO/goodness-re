import React from "react";
import { Home, Product, Report, User } from "@carbon/icons-react";
import styles from "./Cards.module.css";

const BottomNavigation = () => {

    return (
        <div className={styles.bottombar}>
            <Home size={24} />
            <Product size={24} />
            <Report size={24} />
            <User size={24} />
        </div>
    )
}

export default BottomNavigation;