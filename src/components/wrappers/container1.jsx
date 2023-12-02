import React from "react";
import styles from "./Container1.module.css";


const ProductsContainer1 = (props) => {

    return (
        <div >
            <div style={{ marginBottom: "1rem" }}>
                <h2 className={styles.containertitle}>{props.title}</h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
                {props.children}
            </div>
        </div>
    );
}

export default ProductsContainer1;