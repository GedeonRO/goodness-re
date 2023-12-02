import React from "react";
import styles from './Forms.module.css';


const CustomCheckbox = ({ onChange, id, checked }) => {

    const handleChange = (event) => {
        onChange(event);
    }

    return (
        <span className={styles.customcheckboxwrapper}>
            <input id={id} checked={checked} onChange={handleChange} className={styles.checkboxinput} type="checkbox" />
        </span>
    );
}

export default CustomCheckbox;