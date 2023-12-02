import React from "react";
import styles from './Cartitem.module.css';
import { Add, Close, Remove } from "@mui/icons-material";
import AddRemove from "../buttons/add_remove";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCart } from "../../app/reducers/cart_reducer";


const CartItem = ({ product, toggleDrawer }) => {

    const dispatch = useDispatch();

    const removeProductFromCart = () => {
        dispatch(removeFromCart(product))
    }

    const updateProducCart = (type, data) => {
        dispatch(updateCart({ type: type, data: data }));
    }

    return (
        <div className={styles.cartitem}>
            <div style={{ display: "flex", }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <AddRemove onClick={() => {
                        updateProducCart("add", product);
                    }}>
                        <Add fontSize="small" />
                    </AddRemove>
                    <span style={{ margin: "6px 0" }}> {product && product.quantity} </span>
                    <AddRemove onClick={() => updateProducCart("remove", product)}>
                        <Remove fontSize="small" />
                    </AddRemove>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginLeft: 10 }}>
                    <div style={{ height: 40, width: 40, margin: 10 }}>
                        <img style={{ width: "100%", height: "100%", borderRadius: 10 }} src={product && product['data'].images[0]} />
                    </div>
                    <Link onClick={toggleDrawer} to={product && `/product/${product['data'].id}`} style={{ fontSize: 14 }}> {product && product['data'].name} </Link>
                </div>
            </div>
            <div onClick={removeProductFromCart} style={{ paddingLeft: 10, cursor: "pointer" }}>
                <Close style={{ cursor: "pointer" }} fontSize="small" />
            </div>
        </div>
    )
}

export default CartItem;