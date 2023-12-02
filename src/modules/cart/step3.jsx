import React, { useState } from "react";
import styles from "./Card.module.css";
import CustomInput from "../../components/forms/input";
import ButtonNoBackground from "../../components/buttons/button_no_bg";
import RadioBox from "../../components/forms/radio";
import { apiCreateOrder } from "../../app/api/controller";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";
import { restore } from "../../app/reducers/cart_reducer";


const CartDetailStep3 = ({ validation, data, handleChange }) => {

    const navigate = useNavigate();
    // const [bLoading, setBLoading] = useState(false);

    const dispatch = useDispatch();
    const cart = data.cart;
    const user = useSelector((state) => state.user);

    const createOrder = async () => {
        return await apiCreateOrder(data);
    }

    return (
        <>
            <div className={`${styles.contentleftwrapper} ${styles.movetotop}`}>
                <div className={styles.cartpaymentwrapper}>


                    <div style={{ display: "flex", columnGap: 8, alignItems: "center" }}>
                        <RadioBox id="paymentype" name="paymentype" value="mobilemoney" onChange={(e) => { }} />
                        <span className={styles.cartleftlisttitle}>Payer par mobile money</span>
                    </div>
                    <hr style={{ margin: "20px 0" }} />

                    <div style={{ display: "flex", columnGap: 8, alignItems: "center" }}>
                        <RadioBox id="paymentype" name="paymentype" value="delivery" onChange={(e) => { }} />
                        <span className={styles.cartleftlisttitle}>Payer par à la livraison</span>
                    </div>
                    <hr style={{ margin: "20px 0" }} />

                    <div style={{ display: "flex", columnGap: 8, alignItems: "center" }}>
                        <RadioBox id="paymentype" name="paymentype" value="goodpay" onChange={(e) => { }} />
                        <span className={styles.cartleftlisttitle}>Payer par Goodpay</span>
                        <div style={{ padding: "5px 10px", background: "orange", marginLeft: 5 }}>
                            <h5>Bientôt disponible</h5>
                        </div>
                    </div>
                    <hr style={{ margin: "20px 0" }} />

                    <div style={{ display: "flex", marginLeft: 12, alignItems: "flex-end" }}>
                        <PayButton result={createOrder} action={dispatch} />
                    </div>
                </div>
            </div>
            <div className={`${styles.contentrightwrapper}`}>
                <div className={styles.carttotalprice}>
                    <span className={styles.carttotalpricetext}> Sous total </span>
                    <span className={styles.carttotalpricevalue}> {cart && cart.total} </span>
                </div>
                <div className={styles.carttotalprice}>
                    <span className={styles.carttotalpricetext}> Livraison </span>
                    <span className={styles.carttotalpricevalue}> ... </span>
                </div>
                <div className={styles.carttotalprice}>
                    <span className={styles.carttotalpricetext}> Rabais </span>
                    <span className={styles.carttotalpricevalue}> 0.00 </span>
                </div>

                <hr style={{ margin: 20 }} />

                <div style={{ textAlign: "right" }}>
                    <span className={styles.lasttotalpricetext}> {cart && cart.total} </span>
                </div>
            </div>
        </>
    );
}

export default CartDetailStep3;




function Snackbuilder({ result, action }) {
    //

    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const [bLoading, setBLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const createOrder = async () => {
        setBLoading(true);
        if (!user.data.token) {
            handleClickVariant("Vous n'êtes pas connecté", "error");
            setTimeout(() => {
                navigate('/signin');
            }, 2000)
        } else {
            const response = await result();
            if (!response.error) {
                handleClickVariant("Vous allez être redirigé pour le paiement", "success");
                setTimeout(() => {
                    action(restore());
                    console.log(response);
                    window.open(response.data.url, "_blank", "noreferrer");
                    navigate('/profile')
                }, 2000)
            } else {
                handleClickVariant("Une erreur est survenue réessayer", "error");
            }
        }
        setBLoading(false);
    }

    // Variant == "success" || "error"
    const handleClickVariant = (message, variant) => {
        enqueueSnackbar(message, { variant });
    };

    const button = (
        <ButtonNoBackground isLoading={bLoading} height={41} onClick={createOrder} title="Valider le paiement" />
    );

    return (
        <>
            {button}
        </>
    );
}

const PayButton = ({ result, action }) => {
    return (
        <SnackbarProvider>
            <Snackbuilder result={result} action={action} />
        </SnackbarProvider>
    );
}