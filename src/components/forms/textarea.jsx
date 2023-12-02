import React from "react";
import styles from './Forms.module.css';


const TextArea = ({label}) => {

    return (
        <div className={styles.inputformwrapper}>
            <label className={styles.inputlabel} htmlFor="voucher"> {label} </label>
            <textarea className={styles.inputform} name="" id="" cols="30" rows="5"></textarea>
        </div>
    );
}

export default TextArea;