import { CheckCircle } from "@mui/icons-material";
import React from "react";
import styles from "./Product.module.css";


const ProductDetailContent = ({ description, fields }) => {

    return (
        <div className={styles.productdetail}>
            <h2>Spécifications : </h2>
            <p> {description} </p>
            <ul>
                {/* <DetailLine item="Color" value="Black" /> */}
                <DetailLine item="Disponibilité" value="En stock" />
                <DetailLine item="Vendu" value="Togo" />
                <DetailLine item="Livraison free" value="-" />
                {
                    fields && fields.length > 0 && fields.map(element =>
                        <DetailLine item={element.name} value={element.value} />
                    )
                }
            </ul>
        </div>
    );
}

const DetailLine = ({ item, value }) => {

    return (
        <li>
            <CheckCircle fontSize="10" style={{ marginRight: 5 }} color="red" /> {item.charAt(0).toUpperCase() + item.slice(1)}: <span style={{ marginLeft: 5 }}> {value} </span>
        </li>
    )
}

export default ProductDetailContent;