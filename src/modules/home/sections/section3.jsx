import React from "react";
import styles from "./Section.module.css";


const Section3 = () => {

    return (
        <div className={styles.servicesslides}>
            <div className={`${styles.slidecontainer} ${styles.slideItem} ${styles.slideleftcontainer}`}></div>
            <div className={styles._hseparator}></div>
            <div className={`${styles.slidecontainer} ${styles.sliderightcontainer}`}>
                <div className={styles.rightslidestart}>
                    <div className={`${styles.rightslidetop} ${styles.slideItem}`}></div>
                    <div className={styles._vseparator}></div>
                    <div className={`${styles.rightslidebottom} ${styles.slideItem}`}></div>
                </div>
                <div className={styles._hseparator}></div>
                <div className={`${styles.rightslideend} ${styles.slideItem}`}></div>
            </div>
        </div>
    );

}
export default Section3;