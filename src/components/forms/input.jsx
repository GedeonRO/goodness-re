import React from "react";
import styles from "./Forms.module.css";


const CustomInput = ({ label, placeholder, autocomplete, disable, value, onChange, id, isOptional, type }) => {

    const handleChange = (event) => {
        onChange(event);
    }

    return (
        <div className={styles.inputformwrapper}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <label className={styles.inputlabel} htmlFor={label}> {label} </label>
                {
                    isOptional ? <span style={{ marginLeft: 5 }}>(facultatif)</span> :
                        <span style={{ fontSize: 16, color: "rgb(210, 63, 87)", marginLeft: 5 }}> * </span>
                }
            </div>
            <input id={id} onChange={handleChange} value={value} disabled={disable} name={label} aria-autocomplete={"none"} className={styles.inputform} placeholder={placeholder} type={type} />
        </div>
    );
}

export default CustomInput;