import React from "react";
import styles from "./Card.module.css";
import { Close, Remove, Add, CloseOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from "../../components/forms/input";
import TextArea from "../../components/forms/textarea";
import ButtonNoBackground from "../../components/buttons/button_no_bg";
import AddRemove from "../../components/buttons/add_remove";
import { Image, Shimmer } from "react-shimmer";
import { removeFromCart, updateCart } from "../../app/reducers/cart_reducer";
import { utilsThousandSeparator } from "../../app/utils/utils";
import { Link } from "react-router-dom";


const CartDetailStep1 = () => {

    let cart = useSelector((state) => state.cart);


    return (
        <>
            {
                cart.cart.length > 0 && (
                    <>
                        <div className={styles.contentleftwrapper}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                {
                                    cart.cart.map(product => {
                                        return <CartItem quantity={product.quantity} product={product.data} />
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.contentrightwrapper}>
                            <div className={styles.carttotalprice}>
                                <span className={styles.carttotalpricetext}> Total </span>
                                <div>
                                    <span className={styles.carttotalpricevalue}> {cart.total} </span> <span>XOF</span>
                                </div>
                            </div>

                            <hr />

                            <div style={{ display: "flex", margin: "16px 0", columnGap: 6, alignItems: "center" }}>
                                <span className={styles.cartleftlisttitle}>Commentaires</span>
                                <span className={styles.descriptionnote}>Note</span>
                            </div>

                            <TextArea />

                            <hr style={{ marginBottom: 16 }} />

                            <CustomInput label="Code promo" />
                            <ButtonNoBackground title="Appliquer" />
                        </div>
                    </>
                )
            }
        </>
    );
}

export default CartDetailStep1;

const CartItem = ({ product, quantity }) => {

    const dispatch = useDispatch();

    const removeProductFromCart = (product) => {
        dispatch(removeFromCart({ data: product }))
    }

    const updateProducCart = (type, data) => {
        dispatch(updateCart({ type: type, data: { data: product } }));
    }

    return (
        <div className={styles.cartitemwrapper}>
            <div className={styles.cartitemdata}>
                <div className={styles.cartitemimagecontainer}>
                    {/* <img style={{ width: "100%", height: "100%", borderRadius: 10 }} src={product.images[0]} alt="" /> */}

                    <Image
                        src={product.images[0]}
                        fallback={<Shimmer width={100} height={100} />}
                        NativeImgProps={{ style: { width: "100%", height: "100%", borderRadius: 10 } }}
                    />
                </div>
                <div className={styles.cartiteminfos}>
                    <Link>
                        <span className={styles.cartitemname} ellipsis="1">{product.name}</span>
                    </Link>
                    <div style={{ margin: "8px 0" }}>
                        <span className=" MuiBox-root css-1m3t8s2">{`${utilsThousandSeparator(product.price)} * ${quantity} =  `}</span>
                        <span className={styles.price_}> {utilsThousandSeparator((parseInt(product.price) * parseInt(quantity)))} XOF </span>
                    </div>
                    <div>
                        <AddRemove onClick={() => updateProducCart("remove", product)}>
                            <Remove fontSize="small" />
                        </AddRemove>
                        <span className={styles.cartitemquantity}> {quantity} </span>
                        <AddRemove onClick={() => updateProducCart("add", product)}>
                            <Add fontSize="small" />
                        </AddRemove>
                    </div>
                </div>
                <div onClick={() => removeProductFromCart(product)} className={styles.cartitemremove}>
                    <CloseOutlined fontSize="medium" />
                </div>
            </div>
        </div>
    );
}