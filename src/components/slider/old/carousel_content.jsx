import React from "react";
import styles from './Crousel.module.css';
import CustomButton from "../../buttons/button";


const CarouselContent = ({ data }) => {

    return (
        <div className={styles.carouselcontent}>
            <div className={styles.carouselcontentleft}>
                {/* <img src="assets/images/logo-goodness.png" alt="" /> */}
                <h1 className={styles.carouselcontenttitle}> {data.big_text} </h1>
                {/* <h1 className={styles.carouselcontenttitle}>50% Off For Your First Shopping</h1> */}
                <p className={styles.carouselcontentdata}>
                    {data.alt_text}
                </p>

                {/* <p className={styles.carouselcontentdata}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus atque dolore veritatis, exercitationem rem distinctio, reiciendis sed nam voluptates ea quisquam rerum. Iure facere non explicabo exercitationem earum, temporibus atque.
                </p> */}

                <div className={styles.shopbutton}>
                    <span className={styles.shopnow}>
                        Parcourir
                    </span>
                </div>
            </div>
            <div className={styles.carouselcontentright}>
                <img style={{ width: "100%", height: "100%" }} className={styles.carouselcontentrightimage} src={data.image} />
                {/* <img style={{ width: "100%", height: "100%" }} className={styles.carouselcontentrightimage} src="/assets/images/tv1.webp" /> */}
            </div>
        </div>
    );
}

export default CarouselContent;