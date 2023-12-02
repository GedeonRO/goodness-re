import React from "react";
import styles from "./Auth.module.css";
import CustomInput from "../../components/forms/input";
import CustomButton from "../../components/buttons/button";
import { Link, json, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiSignup } from "../../app/api/controller";
import { SnackbarProvider, useSnackbar } from "notistack";

let formdata = {
    usernamee: "",
    userMaila: "",
    userPhone: "",
    upassword: "",
    cpassword: "",
}

const SignUp = () => {

    const [signupData, setSignupData] = useState(formdata);

    const handleChange = (e) => {
        setSignupData({ ...signupData, [e.target.id]: e.target.value })
    }

    const signup = async () => {
        return await apiSignup(signupData);
    }

    return (
        <div className={styles.authwrapper}>
            <div className={styles.authcontainer}>
                <h1 style={{ marginBottom: 20 }}>Inscription</h1>

                {/*  */}
                <CustomInput value={signupData.usernamee} onChange={(e) => handleChange(e)} placeholder="Ex: Jocelyne wide" label="Votre nom complet" id="usernamee" />

                {/*  */}
                <CustomInput value={signupData.userMaila} onChange={(e) => handleChange(e)} placeholder="Ex: john@gmail.com" label="Adresse mail" id="userMaila" />

                {/*  */}
                <CustomInput value={signupData.userPhone} onChange={(e) => handleChange(e)} placeholder="Ex: 99234569" label="Numéro de téléphone" id="userPhone" />

                {/*  */}
                <CustomInput value={signupData.upassword} onChange={(e) => handleChange(e)} placeholder="********" label="Mot de passe" id="upassword" />

                {/*  */}
                <CustomInput value={signupData.cpassword} onChange={(e) => handleChange(e)} placeholder="********" label="Confirmation de mot de passe" id="cpassword" />

                {/*  */}
                {/* <CustomButton title="S'inscrire" /> */}
                <RegisterButton result={signup} />


                <div style={{ marginTop: "25px", fontSize: 14, textAlign: "center" }}>
                    <span style={{ marginRight: 10 }}>Déjà inscrit ?</span>
                    <Link to="/signin" style={{ color: "#d23f57", textDecorationLine: "none" }}>Connectez vous</Link>
                </div>

            </div>
        </div>
    )
}


export default SignUp;



function Snackbuilder({ result, action }) {
    //

    const navigate = useNavigate();
    const [bLoading, setBLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleSignup = async () => {
        setBLoading(true);
        let response = await result();
        console.log(response)
        if (!response.error) {
            handleClickVariant(response.message, "success");
            setTimeout(() => {
                navigate('/signin');
            }, 2000);
        } else {
            handleClickVariant(response.message, "error");
        }
        setBLoading(false);
    }

    // Variant == "success" || "error"
    const handleClickVariant = (message, variant) => {
        enqueueSnackbar(message, { variant });
    };

    const button = (
        <CustomButton isLoading={bLoading} onClick={handleSignup} title="S'inscrire" />
    );

    return (
        <>
            {button}
        </>
    );
}

const RegisterButton = ({ result }) => {
    return (
        <SnackbarProvider>
            <Snackbuilder result={result} />
        </SnackbarProvider>
    );
}