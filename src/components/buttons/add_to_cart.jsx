import React from "react";
import styles from './Addtocart.module.css';
import { Add, Remove } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart, updateCart } from "../../app/reducers/cart_reducer";
import { Box, Snackbar, Stack } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { utilsProductIncart } from "../../app/utils/utils";
import { SnackbarProvider, useSnackbar } from 'notistack';


function Snackbuilder({ type, data, cart }) {

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const updateProducCart = () => {
        if (type == "add") {
            handleClickVariant("Article ajouté au panier", "success")
        }
        if (type == "remove") {
            handleClickVariant("Article retiré du panier", "error")
        }
        utilsProductIncart(cart, data).result ?
            dispatch(updateCart({ type: type, data: { data: data } }))
            : dispatch(addToCart(data));
    }

    const handleClickVariant = (message, variant) => {
        enqueueSnackbar(message, { variant });
    };

    const button = (
        <button onClick={() => updateProducCart()} className={styles.addtocart}>
            {
                type == "add" ? (
                    <Add fontSize="small" />
                ) : (
                    <Remove fontSize="small" />
                )
            }
        </button>
    );

    return (
        <>
            {button}
        </>
    );
}

const Addtocart = ({ type, data, cart }) => {
    return (
        <SnackbarProvider>
            <Snackbuilder type={type} data={data} cart={cart} />
        </SnackbarProvider>
    );
}

export default Addtocart;