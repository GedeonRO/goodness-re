import React from "react";
import styles from './Product.module.css';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { utilsProductIncart, utilsThousandSeparator } from "../../app/utils/utils";
import AddRemove from "../../components/buttons/add_remove";
import { Add, Remove, Star } from "@mui/icons-material";
import { addToCart, updateCart } from "../../app/reducers/cart_reducer";
import ProductCard1 from "../../components/cards/product_card1";


const ProductDetail = () => {

    const [product, setProduct] = useState(null);
    const [relatedProduct, setRelatedProduct] = useState([])
    let params = useParams();
    let cart = useSelector((state) => state.cart);
    let products = useSelector((state) => state.product.data);

    const dispatch = useDispatch();

    useEffect(() => {
        setProduct(products.find((product) => product.id == params.pid));
        if (product) {
            setRelatedProduct((products.filter((fproduct) => fproduct.item == product.item)).slice(0, 4));
        }
    })

    const updateProducCart = (type) => {
        dispatch(updateCart(product && { type: type, data: { data: product } }))
    }

    const addProductToCart = () => {
        dispatch(addToCart(product && product))
    }

    return (
        <>
            <div className={styles.productwrapper}>
                {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ background: "white", alignItems: "center", display: "flex", padding: "1.5rem 0" }}>
                    <img style={{ width: "70%", border: "1px solid red", margin: "0 auto" }} className={styles.carouselcontentrightimage} src={product && product.images[0]} />
                </div>
                <div style={{ marginTop: "1rem", display: "flex", alignSelf: 'center' }}>
                    <div style={{ width: 50, height: 50, marginRight: 15, border: "1px solid grey", borderRadius: 5 }}>
                        <img style={{ width: "100%", height: "100%", margin: "0 auto", borderRadius: 6 }} className={styles.carouselcontentrightimage} src={product && product.images[0]} />
                    </div>
                    <div style={{ width: 50, height: 50, marginRight: 15, border: "1px solid grey", borderRadius: 5 }}>
                        <img style={{ width: "100%", height: "100%", margin: "0 auto", borderRadius: 6 }} className={styles.carouselcontentrightimage} src={product && product.images[0]} />
                    </div>
                </div>
            </div> */}
                <div className={styles.ptopwrper}>
                    <div className={styles.ptopwrperleft}>
                        <div className={styles.ptopwrperimages}>
                            {/* <div style={{ width: 50, height: 50, marginRight: 15, border: "1px solid grey", borderRadius: 5 }}>
                            <img style={{ width: "100%", height: "100%", margin: "0 auto", borderRadius: 6 }} className={styles.carouselcontentrightimage} src={product && product.images[0]} />
                        </div>
                        <div style={{ width: 50, height: 50, marginRight: 15, border: "1px solid grey", borderRadius: 5 }}>
                            <img style={{ width: "100%", height: "100%", margin: "0 auto", borderRadius: 6 }} className={styles.carouselcontentrightimage} src={product && product.images[0]} />
                        </div> */}

                            {
                                product && product.images.map((element) => {
                                    return (
                                        <div className={styles.productimagesitems}>
                                            <img style={{ width: "100%", height: "100%", margin: "0 auto", borderRadius: 2 }} className={styles.carouselcontentrightimage} src={product && product.images[0]} />
                                        </div>
                                    );
                                })
                            }
                        </div>

                        <div className={styles.ptopwrperselectedimage}>
                            <div className={styles.productimageselected}>
                                <img style={{ width: "100%", height: "100%", margin: "0 auto" }} className={styles.carouselcontentrightimage} src={product && product.images[0]} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.productleftcontainer}>
                    <h1 mpd="" className={styles.productname}> {product && product.name} </h1>
                    <div mpd="" className={styles.productbrand}>
                        <span style={{ fontSize: 16 }}>Marque du produit: </span>
                        <span style={{ fontSize: 18, fontWeight: 600 }}>{product && product.brand_data.name}</span>
                    </div>
                    <div mpd="" style={{ display: "flex", marginBottom: 15 }}>
                        <span style={{ fontSize: 16 }}>Notes: </span>
                        <div style={{ marginBottom: 5, display: "flex", color: "#faaf00", marginLeft: 5 }}>
                            <div><Star fontSize="small" color="yellow" /></div>
                            <div><Star fontSize="small" color="yellow" /></div>
                            <div><Star fontSize="small" color="yellow" /></div>
                            <div><Star fontSize="small" color="yellow" /></div>
                            <div><Star fontSize="small" color="yellow" /></div>
                        </div>
                    </div>
                    {/* <div mpd="">
                    <h4>Option</h4>
                    <div className={styles.optionitem}>
                        <span>Option 1</span>
                    </div>
                </div>
                <div mpd="">
                    <h4>Type</h4>
                    <div className={styles.optionitem}>
                        <span>Type 1</span>
                    </div>
                </div> */}
                    <div mpd="" mpdb="" className={styles.pricecontainer} style={{ marginTop: 15, marginBottom: 12 }}>
                        <h2 className={styles.productprice}> {product && utilsThousandSeparator(product.discount_price)} FCFA</h2>
                        <div><span style={{ fontSize: 16 }}>Stock available</span></div>
                    </div>
                    {/* <button className={styles.addproducttocart}>Add to cart</button> */}
                    {
                        !utilsProductIncart(cart.cart, product && product).result ? (
                            <div onClick={() => addProductToCart()} className={styles.productdetailaddtocart}>
                                Ajouter au panier
                            </div>
                        ) : (
                            <div>
                                <AddRemove size="ok" onClick={() => updateProducCart("remove")}>
                                    <Remove fontSize="small" />
                                </AddRemove>
                                <span className={styles.cartitemquantity}> {utilsProductIncart(cart.cart, product && product).data.quantity} </span>
                                <AddRemove size="ok" onClick={() => updateProducCart("add")}>
                                    <Add fontSize="small" />
                                </AddRemove>
                            </div>
                        )
                    }
                </div>



                {/* <div className={styles.bottomaddtocart}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <span className={styles.productdetailprice}> {product && utilsThousandSeparator(product.discount_price)} </span>
                    <span>F CFA</span>
                </div>
                {
                    !utilsProductIncart(cart.cart, product && product).result ? (
                        <div onClick={() => addProductToCart()} className={styles.productdetailaddtocart}>
                            Add to cart
                        </div>
                    ) : (
                        <div>
                            <AddRemove size="ok" onClick={() => updateProducCart("remove")}>
                                <Remove fontSize="small" />
                            </AddRemove>
                            <span className={styles.cartitemquantity}> {utilsProductIncart(cart.cart, product && product).data.quantity} </span>
                            <AddRemove size="ok" onClick={() => updateProducCart("add")}>
                                <Add fontSize="small" />
                            </AddRemove>
                        </div>
                    )
                }
            </div> */}
            </div>


            <div className={styles.relatedProduct}>
                {
                    relatedProduct && relatedProduct.map((rproduct) => {
                        return (
                            <ProductCard1 data={rproduct} />
                        )
                    })
                }
            </div>
        </>
    );
}

export default ProductDetail;