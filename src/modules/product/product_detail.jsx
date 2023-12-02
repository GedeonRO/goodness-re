import React from "react";
import styles from './Product.module.css';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { utilsProductIncart, utilsThousandSeparator } from "../../app/utils/utils";
import AddRemove from "../../components/buttons/add_remove";
import { Add, CheckRounded, Remove, Star, CheckCircle } from "@mui/icons-material";
import { addToCart, updateCart } from "../../app/reducers/cart_reducer";
import ProductCard1 from "../../components/cards/product_card1";
import ProductDetailSocialLink from "./product_detail_social_link";
import ProductDetailContent from "./product_detail_content";
import SectionWrapper from "../../components/wrappers/section";
import ProductCard from "../../components/cards/product";
import { Image, Shimmer } from "react-shimmer";


const ProductDetail = () => {

    const [product, setProduct] = useState(null);
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [currentImage, setCurrentImage] = useState("");
    const [fields, setFields] = useState([]);
    // const [productItem, setProductItem] = useState('');

    let params = useParams();
    let cart = useSelector((state) => state.cart);
    let products = useSelector((state) => state.product.data);

    const dispatch = useDispatch();

    useEffect(() => {
        if (product) {
            setRelatedProduct((products.filter((fproduct) => fproduct.item == product.item)).slice(0, 4));
            setCurrentImage(product.images[0]);
            if (product && product.fields) {
                setFields(JSON.parse(product.fields))
            }
            // const fields = product.fields ? JSON.parse(product.item_data.fields) : [];
            // setFields(fields);
        }
    }, [product])

    useEffect(() => {
        setProduct(products.find((product) => product.id == params.pid));
        window.scrollTo({ top: 0 });
    }, [params])

    const updateProducCart = (type) => {
        dispatch(updateCart(product && { type: type, data: { data: product } }))
    }

    const addProductToCart = () => {
        dispatch(addToCart(product && product))
    }

    return (
        <>
            {/* {JSON.stringify(product)} */}
            <div className={styles.cardwrapper}>
                <div className={styles.card}>
                    <div className={styles.productimgs}>
                        <div className={styles.imgdisplay}>
                            <Image
                                src={currentImage || product && product.images[0]}
                                fallback={<Shimmer width="100%" height="100%" />}
                                NativeImgProps={{ style: { width: "100%", height: "100%", display: "block", borderRadius: 10, objectFit: "contain" } }}
                            />
                        </div>
                        <div className={styles.imgselect}>
                            {
                                product && product.images.map((element) => {
                                    return (
                                        <div key={product.id} onClick={() => setCurrentImage(element)} className={styles.imgitem}>
                                            <a href="#" data-id="1">
                                                <img width="100%" height="100%" src={element} alt="shoe image" />
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div data-testid="flex-container" className="buy-box-column flex flex-column z5"
                                style={{ maxwidth: 'auto', paddingtop: '57'}}>

                        <div data-testid="flex-container" className="flex buy-box-container ba b--lighter-gray br3 pa3 flex-column h-100">

                                <div className={styles.productcontent}>
                                <h3 className={styles.producttitle}> {product && product.name} </h3>
                                <span className={styles.productlink}>vendu par Goodness Unit</span>
                                <div className={styles.productrating}>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span>4.7(21)</span>
                                </div>

                                <div className={styles.productprice}>
                                    <p className={styles.lastprice}>Prix d'avant: <span style={{ fontWeight: "bold" }}> {product && utilsThousandSeparator(product.price)} FCFA  </span></p>
                                    <p className={styles.newprice}>Nouveau prix: <span style={{ fontWeight: "bold" }}> {product && utilsThousandSeparator(product.discount_price)} FCFA  </span></p>
                                    <p className={styles.newprice}>Réduit de: <span style={{ color: "green", fontWeight: "bold" }}> {product && utilsThousandSeparator(product.price - product.discount_price)} FCFA  </span></p>
                                </div>

                                <div>
                                    <h2>Description : </h2>
                                    <p> {product && product.description && product.description.slice(0, 100)} ... </p>
                                </div>

                                <div className={styles.purchaseinfo}>
                                    {/* <input type="number" min="0" value="1" /> */}
                                    {
                                        !utilsProductIncart(cart.cart, product && product).result ? (
                                            <div onClick={() => addProductToCart()} className={styles.productdetailaddtocart}>
                                                Ajouter au panier <i style={{ color: "white" }} className="fas fa-shopping-cart"></i>
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

                                <ProductDetailSocialLink />

                                {
                                    product && product.pay_goodpay && <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
                                        <h4>Payable par goodpay </h4>
                                        <div style={{ padding: "5px 10px", background: "orange", marginLeft: 5 }}>
                                            <h5>Bientôt disponible</h5>
                                        </div>
                                    </div>
                                }
                            </div>

                        </div>
                        </div>

                    <div>
                        <ProductDetailContent fields={fields} description={product && product.description} />
                    </div>
                </div>
            </div>



            <SectionWrapper title="Produits similaires" name="products">
                {
                    relatedProduct && relatedProduct.map(product => {
                        return (
                            <React.Fragment key={product.id}>
                                <div style={{ margin: "0 10px" }}>
                                    <ProductCard to="search" data={product} image="/assets/images/nike-black.png" />
                                </div>
                            </React.Fragment>
                        );
                    })
                }
            </SectionWrapper>

            <SectionWrapper title="Dans la même catégorie" name="categories">
                {
                    relatedProduct && relatedProduct.map(product => {
                        return (
                            <React.Fragment key={product.id}>
                                <div style={{ margin: "0 10px" }}>
                                    <ProductCard to="search" data={product} image="/assets/images/nike-black.png" />
                                </div>
                            </React.Fragment>
                        );
                    })
                }
            </SectionWrapper>

            <SectionWrapper title="Commentaires" name="comments">
                { }
            </SectionWrapper>

        </>
    );
    // return (
    //     <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
    //         <div style={{ background: 'lightblue', padding: '10px' }}>
    //             <p>Div à gauche</p>
    //         </div>
    //         <div style={{ background: 'lightgreen', padding: '10px' }}>
    //             <p>Div à droite</p>
    //         </div>
    //     </div>
    // );
}

export default ProductDetail;