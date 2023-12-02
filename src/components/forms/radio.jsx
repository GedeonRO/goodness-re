import React from "react";
import styles from "./Forms.module.css";


const RadioBox = ({ checked, name, onChange, value, id }) => {
    const handleChange = (e) => {
        onChange(e);
    }
    return (
        <span className={styles.customcheckboxwrapper}>
            <input id={id} name={name} onChange={handleChange} value={value} checked={checked} className={styles.checkboxinput} type="radio" />
        </span>
    );
}

export default RadioBox;