import React from "react";
import styles from "./Forms.module.css";


const CustomSelectInput = ({ label, placeholder, options, onChange }) => {

    const handleChange = (e) => {
        onChange(e);
    }

    return (
        <div className={styles.inputformwrapper}>
            <label className={styles.inputlabel} htmlFor="voucher"> {label} </label>
            <select className={styles.inputform} placeholder={placeholder} name="" id="" onChange={handleChange}>
                {options && options.map(opt => <option value={opt.value}>{opt.label}</option>)}
            </select>
        </div>
    );
}

export default CustomSelectInput;