import React, { useEffect } from "react";
import styles from "./Card.module.css";
import CartDetailStep1 from "./step1";
import CartDetailStep2 from "./step2";
import CartDetailStep3 from "./step3";
import { useState } from "react";
import CustomButton from "../../components/buttons/button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const data = {
    cart: [],
    username: "",
    useremail: "",
    userphone: "",
    promocodes: [],
    mapaddress: "",
    deliverytype: "livraison",
}


const CartIndex = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const [orderData, setOrderData] = useState(data);
    const [valide, setValide] = useState(false);
    let cart = useSelector((state) => state.cart);
    // const selector = useSelector((state) => state.step);

    useEffect(() => {
        window.scrollTo({ top: 0 })
        setOrderData({ ...orderData, ["cart"]: cart });
    }, [])

    const handleValidation = (value) => {
        setValide(value);
    }

    const handleChange = (e, type) => {
        if (type == 'location') {
            const add = e.name + "-Unit001-" + e.geometry.location.lat() + "-Unit001-" + e.geometry.location.lng() + "-Unit001-" + e.url;
            setOrderData({ ...orderData, ["mapaddress"]: add });
        } else {
            setOrderData({ ...orderData, [e.target.id]: e.target.value });
        }
    }


    let steps = [
        <CartDetailStep1 data={orderData} handleChange={handleChange} validation={(value) => handleValidation(value)} />,
        <CartDetailStep2 data={orderData} handleChange={handleChange} validation={(value) => handleValidation(value)} />,
        <CartDetailStep3 data={orderData} handleChange={handleChange} validation={(value) => handleValidation(value)} />,
    ];

    const stepVerification = (index) => {
        if (index === 1) setStepIndex(index);
        if (index === 2) {
            if (valide) { setStepIndex(index); } else alert("Veuillez remplir tous les champs obligatoires");
        }
        if (index < stepIndex) setStepIndex(index);
        setValide(false);
    }

    const goToIndex = (index) => {
        if (index === 1 && cart.cart.length != 0) setStepIndex(index);
        if (index === 2) {
            if (valide) setStepIndex(index); else alert("Veuillez remplir tous les champs obligatoires");
        }
        if (index < stepIndex) setStepIndex(index);
        setValide(false);
    }

    const stepNextIndex = () => {
        let index = stepIndex + 1;
        if (index < steps.length) stepVerification(index);
    }

    const stepPreviousIndex = () => {
        let index = stepIndex - 1;
        if (index >= 0) stepVerification(index);
    }

    return (
        <div className={styles.cartwrapper}>
            {/* {JSON.stringify(orderData)} */}
            {
                cart.cart.length > 0 ? (
                    <>
                        <div style={{ display: "flex", marginBottom: "1.5rem", flexDirection: "column" }}>
                            <div className={styles.stepswrapper}>
                                <StepCard onClick={() => goToIndex(0)} title="Panier" index={1} stepIndex={stepIndex} />
                                <StepCard onClick={() => goToIndex(1)} title="Détails" index={2} stepIndex={stepIndex} />
                                <StepCard onClick={() => goToIndex(2)} title="Paiement" index={3} stepIndex={stepIndex} />
                            </div>

                            <div style={{ justifyContent: "space-between", display: "flex", marginTop: 12 }}>
                                <div>{stepIndex > 0 && <CustomButton onClick={stepPreviousIndex} title="Précédent" />}</div>
                                <div>{stepIndex < 2 && <CustomButton onClick={stepNextIndex} title="Suivant" />}</div>
                            </div>
                        </div>
                        <div div className={styles.contentwrapper}>
                            {steps[stepIndex]}
                        </div>
                    </>
                ) : (
                    <div style={{ width: "100%", marginTop: "10%" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img style={{ width: 150 }} src="assets/images/shopping-bag.png" />
                            <div>Panier vide</div>
                        </div>

                        <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Link style={{ textDecoration: "none" }} to="/">
                                Retourner à l'accueil
                            </Link>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default CartIndex;

const StepCard = ({ index, stepIndex, title, onClick }) => {

    const goToIndex = () => {
        onClick();
    }

    return (
        <button onClick={goToIndex} style={{ background: stepIndex + 1 === index ? "#D23F57" : "#d23f5780", display: "flex", alignItems: "center", marginRight: 10, padding: "5px 20px", borderRadius: 15, border: 0, cursor: "pointer" }}>
            <span style={{ margin: "0 auto", fontSize: 14, color: "white" }}>
                {index}-{title}
            </span>
        </button>
    );
}