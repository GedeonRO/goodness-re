import React from "react";
import styles from "./Auth.module.css";
import CustomButton from "../../components/buttons/button";
import CustomInput from "../../components/forms/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiSignin } from "../../app/api/controller";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { initialize } from "../../app/reducers/user_reducer";


let formdata = {
    userMail: "",
    password: "",
}

const SignIn = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [loginData, setLoginData] = useState(formdata);

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value })
    }

    const signin = async () => {
        return await apiSignin(loginData);
    }

    return (
        <div className={styles.authwrapper}>
            <div className={styles.authcontainer}>
                <h1 style={{ marginBottom: 20 }}>Connexion</h1>

                {/*  */}
                <CustomInput value={loginData.userMail} onChange={(e) => handleChange(e)} placeholder="Ex: john@gmail.com" label="Adresse mail" id="userMail" />

                {/*  */}
                <CustomInput value={loginData.password} onChange={(e) => handleChange(e)} placeholder="********" label="Mot de passe" id="password" />

                {/*  */}
                {/* <CustomButton onClick={signin} title="Se connecter" /> */}
                <LoginButton result={signin} action={dispatch} />

                <div style={{ marginTop: "25px", fontSize: 14, textAlign: "center" }}>
                    <span style={{ marginRight: 10 }}>Pas de compte ?</span>
                    <Link to="/signup" style={{ color: "#d23f57", textDecorationLine: "none" }}>Créer un compte</Link>
                </div>

            </div>
        </div>
    )
}


export default SignIn;


function Snackbuilder({ result, action }) {
    //

    const navigate = useNavigate();
    const [bLoading, setBLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleSignin = async () => {
        setBLoading(true);
        const response = await result();
        if (!response.error) {
            handleClickVariant(response.message, "success");
            action(initialize(response.data));
            setTimeout(() => { navigate('/') }, 1000);
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
        <CustomButton isLoading={bLoading} onClick={handleSignin} title="Se connecter" />
    );

    return (
        <>
            {button}
        </>
    );
}

const LoginButton = ({ result, action }) => {
    return (
        <SnackbarProvider>
            <Snackbuilder result={result} action={action} />
        </SnackbarProvider>
    );
}