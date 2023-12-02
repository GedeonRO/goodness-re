import React from "react";
import styles from "./Button.module.css";
import { CircularProgress } from '@mui/material';


const CustomButton = ({ title, onClick, isLoading }) => {

    return (
        <div disabled={isLoading} onClick={() => !isLoading && onClick ? onClick() : {}} className={styles.buttonwithbgwrapper}>
            {!isLoading && <span className={styles.buttonnonbgtext}> {title} </span>}
            {
                isLoading &&
                <div className={styles.buttonnonbgtext}>
                    <CircularProgress size={18} color="grey" />
                </div>
            }
        </div>
    );
}

export default CustomButton;