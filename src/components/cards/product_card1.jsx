import React from "react";
import styles from './Productcard1.module.css';
import Addtocart from "../buttons/add_to_cart";
import { Link } from "react-router-dom";
import { Image, Breathing, Shimmer } from "react-shimmer";
import { Star } from "@mui/icons-material";
import { utilsProductIncart, utilsThousandSeparator } from "../../app/utils/utils";
import { useSelector } from "react-redux";


const ProductCard1 = ({ data, to }) => {

    let cart = useSelector((state) => state.cart);

    var productName = to == "search" && data && data.name.length >= 30 ?
        data.name.substring(0, 27) + '...' : data.name

    var badge = ["28% off", "26% off", "En stock"];

    return (
        <div style={to == "search" ? { marginRight: 0 } : {}} className={styles.productcart1wrapper}>
            <div className={styles.promotioncard}>
                <span> {badge[Math.floor(Math.random() * 3)]} </span>
                {/* <span>28% off</span> */}
            </div>
            <Link replace className={styles.productimagecontainer} to={`/product/${data.id}`} >
                <Image
                    src={data && data.images[0]}
                    fallback={<Shimmer width={205} height={198} />}
                    NativeImgProps={{ style: { width: "100%", height: "100%", height: "auto", display: "block", borderRadius: 10, objectFit: "cover" } }}
                />
            </Link>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <Link style={{ textDecoration: "none", marginRight: 10 }} to={`/product/${data.id}`}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <h3 className={styles.producttitle}> {productName} </h3>
                        <div style={{ marginBottom: 5, display: "flex", color: "#faaf00" }}>
                            <div><Star fontSize="small" color="yellow" /></div>
                            <div><Star fontSize="small" color="yellow" /></div>
                            <div><Star fontSize="small" color="yellow" /></div>
                            <div><Star fontSize="small" color="yellow" /></div>
                            <div><Star fontSize="small" color="yellow" /></div>
                        </div>
                        <span className={styles.pricestyles}> {data && utilsThousandSeparator(data.discount_price)} F CFA</span>
                    </div>
                </Link>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {
                        utilsProductIncart(cart.cart, data).result ? (
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Addtocart cart={cart.cart} type="remove" data={data} />
                                <span style={{ margin: "5px 0" }}> {utilsProductIncart(cart.cart, data).data.quantity} </span>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                    <Addtocart cart={cart.cart} type="add" data={data} />
                </div>
            </div>
        </div>
    );
}

export default ProductCard1;