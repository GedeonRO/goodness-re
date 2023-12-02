import React from "react";
import styles from './Drawercartcontent.module.css';
import { Close, ShoppingBasket } from "@mui/icons-material";
import CartItem from "../cards/cart_item";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


const DrawerCartContent = (props) => {

    const cart = useSelector((state) => state.cart);

    return (
        <div style={{ height: "calc(100% - calc(100vh - 100%))", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ height: "92%", overflow: "scroll" }}>
                <div className={styles.contentheader}>
                    <div style={{ display: "flex" }}>
                        <ShoppingBasket fontSize="small" />
                        <div style={{ marginLeft: 10 }}>
                            <span>{cart.length} éléments</span>
                        </div>
                    </div>
                    <div onClick={props.closeanydrawer}>
                        <Close style={{ color: "red", cursor: "pointer" }} fontSize="medium" />
                    </div>
                </div>

                <div className={styles.contentbottomdata}>
                    {
                        cart.cart && cart.cart.length !== 0 ? cart.cart.map(product => {
                            return <CartItem toggleDrawer={props.closeanydrawer} product={product} />
                        }) : (
                            <div style={{ display: "flex", alignItems: "center", height: "100%", }}>
                                <div style={{ margin: "0 auto" }}>
                                    <img src="assets/images/shopping-bag.png" />
                                    <div>
                                        Votre panier est vide
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            {
                cart.cart.length !== 0 &&
                <div style={{ margin: 12 }}>
                    {/* <Link onClick={props.closeanydrawer} to="/" className={styles.payment}>
                            <span>Checkout now</span>
                        </Link> */}
                    <Link onClick={props.closeanydrawer} to="/cart" className={styles.viewcart}>
                        <span>Afficher le panier</span>
                    </Link>
                </div>

            }
        </div>
    );
}

export default DrawerCartContent;