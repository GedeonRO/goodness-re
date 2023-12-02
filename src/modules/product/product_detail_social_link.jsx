import React from "react";
import styles from "./Product.module.css";

const ProductDetailSocialLink = () => {

    return (
        <div className={styles.sociallinks}>
            <p style={{ marginRight: 5 }}>Partager: </p>
            <SociaLinkItem name="Facebook" data="fab fa-facebook" />
            <SociaLinkItem name="Facebook" data="fab fa-twitter" />
            <SociaLinkItem name="Facebook" data="fab fa-instagram" />
            <SociaLinkItem name="Facebook" data="fab fa-whatsapp" />
            <SociaLinkItem name="Facebook" data="fab fa-pinterest" />
        </div>
    );
}

const SociaLinkItem = ({ name, data }) => {

    return (
        <a style={{ color: "#12263a" }}>
            <i id={name} className={data}></i>
            {/* <i className="fab fa-facebook-f"></i> */}
        </a>
    );
}

export default ProductDetailSocialLink;