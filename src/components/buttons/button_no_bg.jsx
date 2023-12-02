import React from 'react';
import styles from './Button.module.css';
import { CircularProgress } from '@mui/material';


const ButtonNoBackground = ({ title, onClick, width, height, isLoading }) => {

    return (
        <button disabled={isLoading} onClick={() => !isLoading && onClick ? onClick() : {}} style={width != null && height != null ? { width: width, height: height, padding: 0 } : {}} className={styles.buttonnogbwrapper} >
            {!isLoading && <span className={styles.buttonnonbgtext}> {title} </span>}
            {
                isLoading &&
                <div className={styles.buttonnonbgtext}>
                    <CircularProgress size={18} color="grey" />
                </div>
            }
        </button>
    );
}

export default ButtonNoBackground;