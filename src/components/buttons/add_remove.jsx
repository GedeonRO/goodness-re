import React from "react";
import styles from "./Button.module.css";


const AddRemove = ({ size, children, onClick }) => {

    return (
        <button onClick={onClick} className={`${styles.cartitembutton}`} style={size ? { padding: 6 } : {}}>
            {children}
        </button>
    );
}

export default AddRemove;